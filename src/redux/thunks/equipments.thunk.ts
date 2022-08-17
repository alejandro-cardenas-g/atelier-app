import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { IEquipmentsResponse } from "../../interfaces/responses/portal/equipmentsResponse.interface";
import { IUsersResponse } from "../../interfaces/responses/portal/usersResponse.interface";
import { TYPE_SESSION, TYPE_USER } from "../../locales/auth/auth.locals";
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
