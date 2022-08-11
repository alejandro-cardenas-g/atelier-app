import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateUsers } from "../../../slices/portal/users.slice";
import { deleteUser, getUserDetail, getUsers, patchSimpleUserDetail, uploadDocument } from "../../../thunks/users.thunk";
import { 
    deleteUserPending,
    deleteUserFullfilled,
    deleteUserRejected,
    getUserDetailFullfilled,
    getUserDetailPending,
    getUserDetailRejected,
    getUsersFullfilled, 
    getUsersPending,
    getUsersRejected,
    patchSimpleUserDetailFullfilled,
    patchSimpleUserDetailPending,
    patchSimpleUserDetailRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateUsers>) => {
    builder
        // GET USERS
        .addCase(getUsers.pending, getUsersPending) 
        .addCase(getUsers.fulfilled, getUsersFullfilled)
        .addCase(getUsers.rejected, getUsersRejected)
        // GET USER DETAIL
        .addCase(getUserDetail.pending, getUserDetailPending)
        .addCase(getUserDetail.fulfilled, getUserDetailFullfilled)
        .addCase(getUserDetail.rejected, getUserDetailRejected)
        // PATCH USER-SIMPLE
        .addCase(patchSimpleUserDetail.pending, patchSimpleUserDetailPending)
        .addCase(patchSimpleUserDetail.fulfilled, patchSimpleUserDetailFullfilled)
        .addCase(patchSimpleUserDetail.rejected, patchSimpleUserDetailRejected)
        // DELETE USER
        .addCase(deleteUser.pending, deleteUserPending)
        .addCase(deleteUser.fulfilled, deleteUserFullfilled)
        .addCase(deleteUser.rejected, deleteUserRejected)
        // UPLOAD FILE
        .addCase(uploadDocument.pending, patchSimpleUserDetailPending)
        .addCase(uploadDocument.fulfilled, patchSimpleUserDetailFullfilled)
        .addCase(uploadDocument.rejected, patchSimpleUserDetailRejected)  
}