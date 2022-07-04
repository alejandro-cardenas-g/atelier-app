import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit'
import { IUsers } from '../../../interfaces/redux/usuarios/reduxUsuarios.interface';

const usuariosSlice = createSlice<IState, SliceCaseReducers<IState>>({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        SET_USERS: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const usuariosReducer:Reducer<IState> = usuariosSlice.reducer;

export const {
    SET_USERS
} = usuariosSlice.actions;

interface IState {
    users: IUsers[]
}

