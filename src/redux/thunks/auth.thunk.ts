import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, publicApi } from "../../api/config";
import { AUTH_ENDPOINTS } from "../../api/endpoint";
import { IAuthDetails, ILogin } from "../../interfaces/auth/authLogin.interface";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";
import { RootState } from "../../store/store";
import { TYPE_SESSION } from "../../locales/auth/auth.locals";
import { validateJwt } from "../../utils/auth/jwt.util";
import { AxiosError } from "axios";
import { AXIOS_ERRORS } from "../../constants/errors/axios.error";
import { ON_FORBIDDEN } from '../slices/auth/auth.slice'
import { message } from "antd";

export const authLogin = createAsyncThunk('auth/login', async(payload: ILogin, thunkApi) => {
    try{
        const { auth } = thunkApi.getState() as (RootState);
        let url = AUTH_ENDPOINTS.login;
        if(auth.session_type === TYPE_SESSION.CLIENT) url = AUTH_ENDPOINTS.loginClient;
        const response = await publicApi<{token: string}>({
            url: url,
            method: 'POST',
            data: payload
        });
        const { data } = response;
        localStorage.setItem('token', data.token);
        const userSessionDetail = await validateJwt<IAuthDetails>(localStorage.getItem('token')!);
        return userSessionDetail;
    }catch(error) {
        if(error instanceof AxiosError){
            if(error.code === AXIOS_ERRORS.ERR_NETWORK) {
                thunkApi.dispatch(ON_FORBIDDEN(''));
                message.error('Estamos teniendo problemas, por favor intente más tarde.');
            }
        }
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async(_, thunkApi) => {
    try{
        const response = await privateApi<{token: string}>({
            url: `${AUTH_ENDPOINTS.refresh}`,
            method: 'GET',
        });
        const { data } = response;
        localStorage.setItem('token', data.token);
        const userSessionDetail = await validateJwt<IAuthDetails>(localStorage.getItem('token')!);
        return userSessionDetail;
    }catch(error) {
        if(error instanceof AxiosError){
            if(error.code === AXIOS_ERRORS.ERR_NETWORK) {
                thunkApi.dispatch(ON_FORBIDDEN(''));
                message.error('Estamos teniendo problemas, por favor intente más tarde.');
            }
        }
        localStorage.removeItem('token');
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
},
{
    condition: (_, api) => {
        if(localStorage.getItem('token')) return true;
        return false;
    }
});
