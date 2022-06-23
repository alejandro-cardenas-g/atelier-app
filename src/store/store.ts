import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../redux/rootReducer'

export const store = configureStore({
    reducer: {
        ...rootReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>