import { createSlice, Reducer } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isLogged: true
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
}