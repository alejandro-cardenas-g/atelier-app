import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateClients } from "../../../slices/portal/clients.slice";
import {
    getClientDetail,
    getClients 
} from "../../../thunks/clients.thunk";
import { 
    getClientsPending, 
    getClientsFullfilled,
    getClientsRejected,
    getClientDetailFullfilled,
    getClientDetailPending,
    getClientDetailRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateClients>) => {
    builder
        // GET CLIENTS
        .addCase(getClients.pending, getClientsPending) 
        .addCase(getClients.fulfilled, getClientsFullfilled)
        .addCase(getClients.rejected, getClientsRejected)
        // GET CLIENT DETAILS
        .addCase(getClientDetail.pending, getClientDetailPending) 
        .addCase(getClientDetail.fulfilled, getClientDetailFullfilled)
        .addCase(getClientDetail.rejected, getClientDetailRejected)
}