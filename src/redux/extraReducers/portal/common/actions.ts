import { PayloadAction } from "@reduxjs/toolkit";
import { ICommonResponse } from "../../../../interfaces/responses/portal/commonResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateCommon } from '../../../slices/common/common.slice';

// getUsers

export const getCommonPending = (state: IStateCommon, action: PayloadAction<any>): void => {
    state.loading = true;
}

export const getCommonFullfilled = (state: IStateCommon, action: PayloadAction<ICommonResponse,any>): void => {
    state.loading = false;
    state.userTypes = action.payload.userTypes;
    state.institutions = action.payload.institutions;
    state.exists = true;
}

export const getCommonPendingRejected = (state: IStateCommon, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.loading = false;
    state.exists = false;
    notificationErrorV1 (message || 'Error', 2.1);
}