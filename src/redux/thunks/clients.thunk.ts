import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { IPatchRequest } from "../../interfaces/redux/clients/clientsPayload.interface";
import { IClientDetail } from "../../interfaces/redux/clients/reduxClient.interface";
import { IClientDetailResponse, IClientsResponse } from "../../interfaces/responses/portal/clientsResponse.interface";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";

export const getClients = createAsyncThunk('clients/fetchclients', async(
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

export const getClientDetail = createAsyncThunk('clients/fetchClientDetails', async(id: string | number, thunkApi) => {
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

export const patchSimpleClientDetail = createAsyncThunk<IClientDetail, IPatchRequest>('clients/patchClientDetail', async(
    {   
        id,
        token,
        data,
        step
    }: IPatchRequest,
    thunkApi
) => {
    try{
        let response: AxiosResponse<IClientDetail, any>;
        if(token){
            response = await privateApi<IClientDetailResponse>({
                url: `${PORTAL_ENDPOINTS.baseClients}/`,
                method: 'PATCH',
                data: {
                    ...data,
                    step
                }
            });
            const { data:dataResponse } = response;
            return dataResponse;
        }else{
            response = await privateApi<IClientDetail>({
                url: `${PORTAL_ENDPOINTS.baseClients}/${id}`,
                method: 'PATCH',
                data: {
                    ...data,
                    step
                }
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

export const deleteClient = createAsyncThunk('clients/deleteClient', async(
    id: number,
    thunkApi
) => {
    try{
        const response = await privateApi<{ok: boolean}>({
            url: `${PORTAL_ENDPOINTS.baseClients}/${id}`,
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
