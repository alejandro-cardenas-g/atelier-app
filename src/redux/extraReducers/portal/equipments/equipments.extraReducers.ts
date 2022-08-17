import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateEquipments } from "../../../slices/portal/equipments.slice";
import {
    getEquipments
} from "../../../thunks/equipments.thunk";
import {
    getEquipmentsFullfilled,
    getEquipmentsPending,
    getEquipmentsRejected
} from "./actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateEquipments>) => {
    builder
        // GET EQUIPMETNS
        .addCase(getEquipments.pending, getEquipmentsPending) 
        .addCase(getEquipments.fulfilled, getEquipmentsFullfilled)
        .addCase(getEquipments.rejected, getEquipmentsRejected)
}