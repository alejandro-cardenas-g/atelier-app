import { PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { IClientDetailResponse, IClientsResponse } from "../../../../interfaces/responses/portal/clientsResponse.interface";
import { notificationErrorV1 } from "../../../../utils/notifications/notifications.util";
import { IStateClients } from "../../../slices/portal/clients.slice";

// getClients

export const getClientsPending = (state: IStateClients, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getClientsFullfilled = (state: IStateClients, action: PayloadAction<IClientsResponse,any>): void => {
    state.isLoading = false;
    state.clients = action.payload.clients;
    state.total = action.payload.total;
    state.clientDetail = null;
    state.detailSection = null;
}

export const getClientsRejected = (state: IStateClients, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.clientDetail = null;
    state.detailSection = null;
    notificationErrorV1(message);
}

// getClientDetail

export const getClientDetailPending = (state: IStateClients, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const getClientDetailFullfilled = (state: IStateClients, action: PayloadAction<IClientDetailResponse,any>): void => {
    state.isLoading = false;
    state.clientDetail = action.payload;
}

export const getClientDetailRejected = (state: IStateClients, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    state.clientDetail = null;
    state.detailSection = null;
    notificationErrorV1 (message || 'Error', 2.1);
}

// Delete client

export const deleteClientPending = (state: IStateClients, action: PayloadAction<any>): void => {
    state.isLoading = true;
}

export const deleteClientFullfilled = (state: IStateClients, action: PayloadAction<{id:number},any>): void => {
    state.isLoading = false;
    state.clients = state.clients.filter(client => client.id !== action.payload.id);
    message.success('El usuario ha sido Eliminado');
}

export const deleteClientRejected = (state: IStateClients, action: any): void => {
    const { message = 'Error'} = action.payload;
    state.isLoading = false;
    notificationErrorV1 (message || 'Error', 2.1);
}
