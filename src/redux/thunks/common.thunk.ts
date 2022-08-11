import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { privateApi } from "../../api/config";
import { PORTAL_ENDPOINTS } from "../../api/endpoint";
import { ICommonResponse } from "../../interfaces/responses/portal/commonResponse.interface";
import { RootState } from "../../store/store";
import { reduxRejectedHandler } from "../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../dispatchers/auth/auth.dispatch";

export const getCommon = createAsyncThunk('common/get', async(_, thunkApi) => {
    try{
        // const response = await privateApi.get<ICommonResponse>(`/commons`);
        const response = await privateApi<ICommonResponse>({
            url: PORTAL_ENDPOINTS.common,
            method: 'GET'
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
        const { common } = api.getState() as (RootState);
        if(common.exists){
            return false;
        }
        return true;
    }
}
);