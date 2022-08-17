import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IEquipments } from '../../../interfaces/redux/equipments/reduxEquipments.interface';
import { extraReducer } from '../../extraReducers/portal/equipments/equipments.extraReducers';

const equipmentsSlice = createSlice<IStateEquipments, SliceCaseReducers<IStateEquipments>>({
    name: 'equipments',
    initialState: {
        equipments: [],
        isLoading: false,
        total: null
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
}
