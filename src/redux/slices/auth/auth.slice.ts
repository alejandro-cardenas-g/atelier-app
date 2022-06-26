import { createSlice, Reducer } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isLogged: true,
        session_type: 1,
        type: 1
    },
    reducers: {
        SET:(state,action) => {
            console.log(action.payload)
            state.loading = !state.loading
        },
    }
});

export const authReducer:Reducer<IState> = authSlice.reducer

export const { SET } = authSlice.actions;

interface IState {
    loading: boolean;
    isLogged: boolean;
    session_type: number;
    type: number;
}