import { PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { IUserDetailResponse, IUsersResponse } from "../../../../interfaces/responses/portal/usersResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateUsers } from "../../../slices/portal/users.slice";

// getUsers

export const getUsersPending = (state: IStateUsers, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getUsersFullfilled = (state: IStateUsers, action: PayloadAction<IUsersResponse,any>): void => {
    state.isLoading = false;
    state.users = action.payload.users;
    state.total = action.payload.total;
    state.userDetail = null;
    state.detailSection = null;
}

export const getUsersRejected = (state: IStateUsers, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.userDetail = null;
    state.detailSection = null;
    notificationErrorV1(message);
}

// getUserDetail

export const getUserDetailPending = (state: IStateUsers, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getUserDetailFullfilled = (state: IStateUsers, action: PayloadAction<IUserDetailResponse,any>): void => {
    state.isLoading = false;
    state.userDetail = action.payload;
}

export const getUserDetailRejected = (state: IStateUsers, action: any): void => {
    const { message = 'Error'} = action.payload;

    state.isLoading = false;
    state.userDetail = null;
    state.detailSection = null;
    notificationErrorV1 (message || 'Error', 2.1);
}

// patchSimpleUserDetail

export const patchSimpleUserDetailPending = (state: IStateUsers, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const patchSimpleUserDetailFullfilled = (state: IStateUsers, action: PayloadAction<IUserDetailResponse,any>): void => {
    state.isLoading = false;
    state.userDetail = action.payload;
    message.success('El usuario ha sido actualizado');
}

export const patchSimpleUserDetailRejected = (state: IStateUsers, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    notificationErrorV1 (message || 'Error', 2.1);
}

// Delete user

export const deleteUserPending = (state: IStateUsers, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const deleteUserFullfilled = (state: IStateUsers, action: PayloadAction<{id:number},any>): void => {
    state.isLoading = false;
    state.users = state.users.filter(user => user.id !== action.payload.id);
    message.success('El usuario ha sido Eliminado');
}

export const deleteUserRejected = (state: IStateUsers, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    notificationErrorV1 (message || 'Error', 2.1);
}