import { PayloadAction } from "@reduxjs/toolkit";
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
    state.isLoading = false;
    state.userDetail = null;
    state.detailSection = null;
    notificationErrorV1(action.error.message);
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
    state.isLoading = false;
    state.userDetail = null;
    state.detailSection = null;
    notificationErrorV1(action.error.message, 2.1);
}