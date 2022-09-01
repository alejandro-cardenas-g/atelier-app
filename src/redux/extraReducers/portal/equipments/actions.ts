import { PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { IDocumentEquipmentsResponse, IEquipmentsResponse, ISingleEquipmentResponse } from "../../../../interfaces/responses/portal/equipmentsResponse.interface";
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

export const getDocumentEquipmentsTagsFullfilled = (state: IStateEquipments, action: PayloadAction<IDocumentEquipmentsResponse,any>): void => {
    state.isLoading = false;
    state.docTags = action.payload.tags;
}

export const getDocumentEquipmentsTagsRejected = (state: IStateEquipments, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.docTags = [];
    notificationErrorV1(message);
}

export const getSingleEquipmentFullFilled = (state: IStateEquipments, action: PayloadAction<ISingleEquipmentResponse,any>): void => {
    state.isLoading = false;
    state.equipmentDetail = action.payload;
}

export const getSingleEquipmentRejected = (state: IStateEquipments, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.equipmentDetail = null;
    notificationErrorV1(message);
}