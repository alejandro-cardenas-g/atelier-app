import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IStateEquipments } from "../../../slices/portal/equipments.slice";
import {
    getEquipments,
    getEquipmentTags,
    getSingleEquipment,
    getParametersDrawer
} from "../../../thunks/equipments.thunk";
import {
    getDocumentEquipmentsTagsFullfilled,
    getDocumentEquipmentsTagsRejected,
    getEquipmentsFullfilled,
    getEquipmentsPending,
    getEquipmentsRejected,
    getSingleEquipmentFullFilled,
    getSingleEquipmentRejected
} from "./actions";
import { getDrawerActionsFulfilled, getDrawerActionsPending, getDrawerActionsRejected } from "./drawer.actions";

export const extraReducer = (builder: ActionReducerMapBuilder<IStateEquipments>) => {
    builder
        // GET EQUIPMETNS
        .addCase(getEquipments.pending, getEquipmentsPending) 
        .addCase(getEquipments.fulfilled, getEquipmentsFullfilled)
        .addCase(getEquipments.rejected, getEquipmentsRejected)
        // GET DOC-EQ-TYPES
        .addCase(getEquipmentTags.pending, getEquipmentsPending) 
        .addCase(getEquipmentTags.fulfilled, getDocumentEquipmentsTagsFullfilled)
        .addCase(getEquipmentTags.rejected, getDocumentEquipmentsTagsRejected)
        // GET SINGLE EQUIPMENT
        .addCase(getSingleEquipment.pending, getEquipmentsPending) 
        .addCase(getSingleEquipment.fulfilled, getSingleEquipmentFullFilled)
        .addCase(getSingleEquipment.rejected, getSingleEquipmentRejected)
        // GET DRAWER CONF
        .addCase(getParametersDrawer.pending, getDrawerActionsPending) 
        .addCase(getParametersDrawer.fulfilled, getDrawerActionsFulfilled)
        .addCase(getParametersDrawer.rejected, getDrawerActionsRejected)
}