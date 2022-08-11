import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { ICommonProps } from "../../interfaces/common/common.interface";
import { IUserDetail } from "../../interfaces/redux/usuarios/reduxUsers.interface";
import { IPatchRequest } from "../../interfaces/redux/usuarios/usersPayload.interface";
import { IUsersResponse } from "../../interfaces/responses/portal/usersResponse.interface";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";

export const getUsers = createAsyncThunk('users/fetchusers', async(
    {page, search}:{page: number, search: string},
    thunkApi
) => {
    try{
        const response = await privateApi<IUsersResponse>({
            url: `${PORTAL_ENDPOINTS.searchUsers}?page=${page}${search}`,
            method: 'GET',
        });
        const { data } = response;
        return data;
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});

export const getUserDetail = createAsyncThunk('users/fetchuserDetail', async(id: string | number, thunkApi) => {
    try{
        let response: AxiosResponse<IUserDetail, any>;
        if(typeof(id) === 'number'){
            response = await privateApi<IUserDetail>({
                url: `${PORTAL_ENDPOINTS.baseUsers}/${id}`,
                method: 'GET',
            });
        }else{
            response = await privateApi<IUserDetail>({
                url: `${PORTAL_ENDPOINTS.baseUsers}/slug/${id}`,
                method: 'GET',
            });
        }
        const { data } = response;
        return data;
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});

export const patchSimpleUserDetail = createAsyncThunk<IUserDetail, IPatchRequest>('users/patchUserDetail', async(
    {   
        id,
        token,
        data
    }: IPatchRequest,
    thunkApi
) => {
    try{
        let response: AxiosResponse<IUserDetail, any>;
        if(token){
            response = await privateApi<IUserDetail>({
                url: `${PORTAL_ENDPOINTS.baseUsers}/`,
                method: 'PATCH',
                data
            });
            const { data:dataResponse } = response;
            return dataResponse;
        }else{
            response = await privateApi<IUserDetail>({
                url: `${PORTAL_ENDPOINTS.baseUsers}/${id}`,
                method: 'PATCH',
                data
            });
        }
        const { data:dataResponse } = response;
        return dataResponse;
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async(
    id: number,
    thunkApi
) => {
    try{
        const response = await privateApi<{ok: boolean}>({
            url: `${PORTAL_ENDPOINTS.baseUsers}/${id}`,
            method: 'DELETE',
        });
        const { data } = response;
        if(data.ok === true) return {id};
        return thunkApi.rejectWithValue({
            code: 0,
            message: 'No se pudo ejecutar esta operación'
        });
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});

export const uploadDocument = createAsyncThunk('users/uploadFile', async(
    {
        id,
        data 
    }: {
        id: number,
        data: ICommonProps
    },
    thunkApi
) => {
    try{
        const response = await privateApi<IUserDetail>({
            url: `${PORTAL_ENDPOINTS.baseUsers}/${id}`,
            method: 'PUT',
            data
        });
        const { data:dataResponse } = response;
        return dataResponse;
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
},
{
    condition: ({
        id,
        data 
    }: {
        id: number,
        data: ICommonProps
    }) => {
        if(data.file){
            return true;
        }
        return false;
    }
});
