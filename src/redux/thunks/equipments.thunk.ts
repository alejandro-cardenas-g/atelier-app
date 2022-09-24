import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { IDocumentEquipmentsResponse, IEquipmentsResponse, ISingleEquipmentResponse } from "../../interfaces/responses/portal/equipmentsResponse.interface";
import { RootState } from "../../store/store";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";

export const getEquipments = createAsyncThunk('equipments/fetchequipments', async(
    {page, search}:{page: number, search: string},
    thunkApi
) => {
    try{
        let endpoint = PORTAL_ENDPOINTS.searchEquipmentsUsers;
        const response = await privateApi<IEquipmentsResponse>({
            url: `${endpoint}?page=${page}${search}`,
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

export const getSingleEquipment = createAsyncThunk('equipments/getSingle', async(
    id:number,
    thunkApi
) => {
    try{
        const endpoint = `${PORTAL_ENDPOINTS.baseEquipments}/${id}`;
        const response = await privateApi<ISingleEquipmentResponse>({
            url: endpoint,
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

export const getEquipmentTags = createAsyncThunk('equipments/fetch-types', async(
    _,
    thunkApi
) => {
    try{
        const response = await privateApi<IDocumentEquipmentsResponse>({
            url: PORTAL_ENDPOINTS.getDocumentEquipmentTags,
            method: 'GET',
        });
        const { data } = response;
        return data;
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
},
{
    condition: (_, api) => {
        const { equipments } = api.getState() as (RootState);
        if(equipments.docTags.length > 0){
            return false;
        }
        return true;
    }
});

export const getParametersDrawer = createAsyncThunk('equipments/drawer-conf', async(
    {
        action,
        id
    }: {
        action: 1 | 2,
        id: number
    },
    thunkApi
) => {
    try{
        let endpoint: string = PORTAL_ENDPOINTS.searchIps;
        let field: "ips" | "location" = "ips";
        if(action === 2){
            endpoint = PORTAL_ENDPOINTS.searchLocations;
            field = "location";
        };

        const response = await privateApi<{id: number, name: string}[]>({
            url: `${endpoint}/${id}`,
            method: 'GET',
        });
        const { data } = response;
        return { data, field };
    }catch(error) {
        const payload = reduxRejectedHandler(error);
        if(payload.code === 401) dispatchForbidden();
        return thunkApi.rejectWithValue(payload);
    }
});
