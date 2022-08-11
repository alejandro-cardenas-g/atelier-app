import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthDetails } from "../../../interfaces/auth/authLogin.interface";
import { notificationErrorV1 } from "../../../utils/notifications/notifications.util";
import { IStateAuth } from "../../slices/auth/auth.slice";

export const loginPending = (state: IStateAuth, action: any): void => {
    state.loading = true;
}

export const loginFullfilled = (state: IStateAuth, action: PayloadAction<IAuthDetails>): void => {
    state.loading = false;
    state.isLogged = !!action.payload.id
    state.checked = !!action.payload.id;
    state.user = action.payload;
}

export const loginRejected = (state: IStateAuth, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.loading = false;
    state.isLogged = false;
    state.checked = false;
    state.user = null;
    notificationErrorV1 (message || 'Error', 2.1);
}

export const refreshTokenPending = (state: IStateAuth, action: any): void => {
    state.loading = true;
}

export const refreshTokenFullfilled = (state: IStateAuth, action: PayloadAction<IAuthDetails>): void => {
    state.loading = false;
    state.isLogged = !!action.payload.id;
    state.checked = !!action.payload.id;
    state.user = action.payload;
    // state.type = 1;
}

export const refreshTokenRejected = (state: IStateAuth, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.loading = false;
    state.isLogged = false;
    state.checked = false;
    notificationErrorV1 (message || 'Error', 2.1);
}