import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthDetails } from "../../../interfaces/auth/authLogin.interface";
import { TYPE_SESSION, TYPE_USER } from "../../../locales/auth/auth.locals";
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
    switch(localStorage.getItem('role')){
        case TYPE_SESSION.ADMIN.toString():
            state.isLogged = !!action.payload.id;
            state.checked = !!action.payload.id;
            state.user = {
                ...action.payload,
                company: null
            };
            break;
        case TYPE_SESSION.CLIENT.toString():
            state.isLogged = !!action.payload.id;
            state.checked = !!action.payload.id;
            state.user = {
                ...action.payload,
                isSuperUser: false,
                type: TYPE_USER.CLIENT
            };
            break;
        default:
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            state.isLogged = false;
            state.checked = false;
            notificationErrorV1 ('Error', 2.1);
            break;
    }
    state.loading = false;
    // state.type = 1;
}

export const refreshTokenRejected = (state: IStateAuth, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.loading = false;
    state.isLogged = false;
    state.checked = false;
    notificationErrorV1 (message || 'Error', 2.1);
}