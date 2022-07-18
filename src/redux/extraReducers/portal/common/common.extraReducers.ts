import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateCommon } from "../../../slices/common/common.slice";
import { getCommon } from "../../../thunks/common.thunk";
import { 
    getCommonFullfilled,
    getCommonPending,
    getCommonPendingRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateCommon>) => {
    builder
        .addCase(getCommon.pending, getCommonPending) 
        .addCase(getCommon.fulfilled, getCommonFullfilled)
        .addCase(getCommon.rejected, getCommonPendingRejected)
}