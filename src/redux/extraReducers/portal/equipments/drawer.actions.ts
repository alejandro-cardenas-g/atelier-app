import { PayloadAction } from "@reduxjs/toolkit";
import { IEquipmentsResponse } from "../../../../interfaces/responses/portal/equipmentsResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateEquipments } from "../../../slices/portal/equipments.slice";

// drawer actions
export const getDrawerActionsPending = (state: IStateEquipments, action: PayloadAction<any>): void => {
    state.drawer.loading = true;
}

export const getDrawerActionsFulfilled = (state: IStateEquipments, action: PayloadAction<{
    data: {id: number, name: string}[], field: 'ips' | 'location'
},any>): void => {
    state.drawer.loading = false;
    state.drawer[action.payload.field] = action.payload.data;
}

export const getDrawerActionsRejected = (state: IStateEquipments, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.drawer.loading = false;
    state.drawer.ips = [];
    state.drawer.location = [];
    notificationErrorV1(message);
}
