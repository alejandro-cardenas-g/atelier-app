import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IDocTags, IDrawer, IEquipments } from '../../../interfaces/redux/equipments/reduxEquipments.interface';
import { ISingleEquipmentResponse } from '../../../interfaces/responses/portal/equipmentsResponse.interface';
import { extraReducer } from '../../extraReducers/portal/equipments/equipments.extraReducers';

const equipmentsSlice = createSlice<IStateEquipments, SliceCaseReducers<IStateEquipments>>({
    name: 'equipments',
    initialState: {
        equipments: [],
        isLoading: false,
        total: null,
        docTags: [],
        equipmentDetail: null,
        drawer: {
            filters: {},
            ips: [],
            location: [],
            loading: false
        }
    },
    reducers: {
        CLEAR_DRAWER: (state, action: {payload: {clearLocation: boolean; clearIps: boolean}}) => {
            if(action.payload.clearIps){
                state.drawer.ips = [];
            }
            if(action.payload.clearLocation){
                state.drawer.location = [];
            }
        }
    },
    extraReducers: extraReducer
});

export const equipmentsReducer:Reducer<IStateEquipments> = equipmentsSlice.reducer;

export const {
    CLEAR_DRAWER
} = equipmentsSlice.actions;

export interface IStateEquipments {
    equipments: IEquipments[];
    isLoading: boolean;
    total: number | null;
    docTags: IDocTags[];
    equipmentDetail: ISingleEquipmentResponse | null
    drawer: IDrawer
}


