import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { privateApi } from "../../api/config";
import { IUserDetail, IUserDetailSend } from "../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { IPatchRequest } from "../../interfaces/redux/usuarios/usersPayload.interface";
import { IUsersResponse } from "../../interfaces/responses/portal/usersResponse.interface";

export const getUsers = createAsyncThunk('users/fetchusers', async(page: number) => {
    try{
        const response = await privateApi.get<IUsersResponse>(`?page=${page}`)
        const { data } = response;
        return data;
    }catch(error) {
        if(error instanceof AxiosError) throw new Error(error.response?.data.error);
        else throw new Error('Error');
    }
});

export const getUserDetail = createAsyncThunk('users/fetchuserDetail', async(id: string | number) => {
    try{
        let response: AxiosResponse<IUserDetail, any>;
        if(typeof(id) === 'number'){
            response = await privateApi.get<IUserDetail>(`/user/${id}`);
        }else{
            response = await privateApi.get<IUserDetail>(`/user/slug/${id}`);
        }
        const { data } = response;
        return data;
    }catch(error) {
        if(error instanceof AxiosError) throw new Error(error.response?.data.error);
        else throw new Error('Error');
    }
});

export const patchSimpleUserDetail = createAsyncThunk<IUserDetail, IPatchRequest>('users/patchUserDetail', async(
    {   
        id,
        token,
        data
    }: IPatchRequest
) => {
    try{
        if(token){
            const response = await privateApi.patch<IUserDetail>(`/user`, data);
            const { data:dataResponse } = response;
            return dataResponse;
        }
        const response = await privateApi.patch<IUserDetail>(`/user/${id}`)
        const { data:dataResponse } = response;
        return dataResponse;
    }catch(error) {
        if(error instanceof AxiosError) throw new Error(error.response?.data.error);
        else throw new Error('Error');
    }
});