import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateUsers } from "../../../slices/portal/usuarios.slice";
import { getUsers } from "../../../thunks/users.thunk";
import { 
    getUserFullfilled, 
    getUsersPending,
    getUserRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateUsers>) => {
    builder
        .addCase(getUsers.pending, getUsersPending) 
        .addCase(getUsers.fulfilled, getUserFullfilled)
        .addCase(getUsers.rejected, getUserRejected)
}