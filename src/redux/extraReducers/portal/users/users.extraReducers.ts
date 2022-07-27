import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateUsers } from "../../../slices/portal/users.slice";
import { getUserDetail, getUsers } from "../../../thunks/users.thunk";
import { 
    getUserDetailFullfilled,
    getUserDetailPending,
    getUserDetailRejected,
    getUsersFullfilled, 
    getUsersPending,
    getUsersRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateUsers>) => {
    builder
        .addCase(getUsers.pending, getUsersPending) 
        .addCase(getUsers.fulfilled, getUsersFullfilled)
        .addCase(getUsers.rejected, getUsersRejected)
        .addCase(getUserDetail.pending, getUserDetailPending)
        .addCase(getUserDetail.fulfilled, getUserDetailFullfilled)
        .addCase(getUserDetail.rejected, getUserDetailRejected)
}