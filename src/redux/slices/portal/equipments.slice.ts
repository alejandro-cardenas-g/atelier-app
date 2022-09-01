import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IDocTags, IEquipments } from '../../../interfaces/redux/equipments/reduxEquipments.interface';
import { ISingleEquipmentResponse } from '../../../interfaces/responses/portal/equipmentsResponse.interface';
import { extraReducer } from '../../extraReducers/portal/equipments/equipments.extraReducers';

const equipmentsSlice = createSlice<IStateEquipments, SliceCaseReducers<IStateEquipments>>({
    name: 'equipments',
    initialState: {
        equipments: [],
        isLoading: false,
        total: null,
        docTags: [],
        equipmentDetail: null
    },
    reducers: {

    },
    extraReducers: extraReducer
});

export const equipmentsReducer:Reducer<IStateEquipments> = equipmentsSlice.reducer;

export const {

} = equipmentsSlice.actions;

export interface IStateEquipments {
    equipments: IEquipments[];
    isLoading: boolean;
    total: number | null;
    docTags: IDocTags[];
    equipmentDetail: ISingleEquipmentResponse | null
}
