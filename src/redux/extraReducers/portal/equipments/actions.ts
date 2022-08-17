import { PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { IEquipmentsResponse } from "../../../../interfaces/responses/portal/equipmentsResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateEquipments } from "../../../slices/portal/equipments.slice";

// getEquipments

export const getEquipmentsPending = (state: IStateEquipments, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getEquipmentsFullfilled = (state: IStateEquipments, action: PayloadAction<IEquipmentsResponse,any>): void => {
    state.isLoading = false;
    state.equipments = action.payload.equipments;
    state.total = action.payload.total;
}

export const getEquipmentsRejected = (state: IStateEquipments, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.equipments = [];
    notificationErrorV1(message);
}
