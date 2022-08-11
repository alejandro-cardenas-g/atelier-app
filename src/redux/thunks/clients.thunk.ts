import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { IClientDetail } from "../../interfaces/redux/clients/reduxClient.interface";
import { IClientsResponse } from "../../interfaces/responses/portal/clientsResponse.interface";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";

export const getClients = createAsyncThunk('users/fetchclients', async(
    {page, search}:{page: number, search: string},
    thunkApi
) => {
    try{
        const response = await privateApi<IClientsResponse>({
            url: `${PORTAL_ENDPOINTS.searchClients}?page=${page}${search}`,
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

export const getClientDetail = createAsyncThunk('users/fetchClientDetails', async(id: string | number, thunkApi) => {
    try{
        let response: AxiosResponse<IClientDetail, any>;
        if(typeof(id) === 'number'){
            response = await privateApi<IClientDetail>({
                url: `${PORTAL_ENDPOINTS.baseClients}/${id}`,
                method: 'GET',
            });
        }else{
            response = await privateApi<IClientDetail>({
                url: `${PORTAL_ENDPOINTS.baseClients}/slug/${id}`,
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
