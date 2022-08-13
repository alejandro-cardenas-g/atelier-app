import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateClients } from "../../../slices/portal/clients.slice";
import {
    deleteClient,
    getClientDetail,
    getClients, 
    patchSimpleClientDetail
} from "../../../thunks/clients.thunk";
import { 
    getClientsPending, 
    getClientsFullfilled,
    getClientsRejected,
    getClientDetailFullfilled,
    getClientDetailPending,
    getClientDetailRejected,
    deleteClientPending,
    deleteClientFullfilled,
    deleteClientRejected
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
        // PATCH SIMPLE CLIENT DETAIL
        .addCase(patchSimpleClientDetail.pending, getClientDetailPending) 
        .addCase(patchSimpleClientDetail.fulfilled, getClientDetailFullfilled)
        .addCase(patchSimpleClientDetail.rejected, getClientDetailRejected) 
        // DELETE CLIENT
        .addCase(deleteClient.pending, deleteClientPending) 
        .addCase(deleteClient.fulfilled, deleteClientFullfilled)
        .addCase(deleteClient.rejected, deleteClientRejected) 
}