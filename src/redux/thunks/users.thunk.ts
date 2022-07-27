import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { privateApi } from "../../api/config";
import { IUserDetail } from "../../interfaces/redux/usuarios/reduxUsuarios.interface";
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

export const getUserDetail = createAsyncThunk('users/fetchuserDetail', async(id: number) => {
    try{
        const response = await privateApi.get<IUserDetail>(`/user/${id}`)
        const { data } = response;
        return data;
    }catch(error) {
        if(error instanceof AxiosError) throw new Error(error.response?.data.error);
        else throw new Error('Error');
    }
});