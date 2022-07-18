import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { privateApi } from "../../api/config";
import { ICommonResponse } from "../../interfaces/responses/portal/commonResponse.interface";
import { RootState } from "../../store/store";

export const getCommon = createAsyncThunk('common/get', async() => {
    try{
        console.log("llegó");
        const response = await privateApi.get<ICommonResponse>(`/commons`);
        const { data } = response;
        return data;
    }catch(error) {
        if(error instanceof AxiosError) throw new Error(error.response?.data.error);
        else throw new Error('Error');
    }
},
{
    condition: (_, api) => {
        const { common } = api.getState() as (RootState);
        if(common.exists){
            console.log("no llegó");
            return false;
        }
        return true;
    }
}
);