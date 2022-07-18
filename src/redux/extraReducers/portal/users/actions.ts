import { PayloadAction } from "@reduxjs/toolkit";
import { IUsersResponse } from "../../../../interfaces/responses/portal/usersResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateUsers } from "../../../slices/portal/usuarios.slice";

// getUsers

export const getUsersPending = (state: IStateUsers, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getUserFullfilled = (state: IStateUsers, action: PayloadAction<IUsersResponse,any>): void => {
    state.isLoading = false;
    state.users = action.payload.users;
    state.total = action.payload.total;
}

export const getUserRejected = (state: IStateUsers, action: any): void => {
    state.isLoading = false;
    notificationErrorV1(action.error.message);
}