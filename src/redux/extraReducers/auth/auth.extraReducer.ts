import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { IStateAuth } from "../../slices/auth/auth.slice"
import { 
    authLogin,
    refreshToken
} from "../../thunks/auth.thunk"
import { 
    loginFullfilled, 
    loginPending, 
    loginRejected,
    refreshTokenPending,
    refreshTokenFullfilled,
    refreshTokenRejected,
} from "./actions"

export const extraReducer = (builder: ActionReducerMapBuilder<IStateAuth>) => {
    builder
        // LOGIN
        .addCase(authLogin.pending, loginPending) 
        .addCase(authLogin.fulfilled, loginFullfilled)
        .addCase(authLogin.rejected, loginRejected)
        // REFRESH-TOKEN
        .addCase(refreshToken.pending, refreshTokenPending)
        .addCase(refreshToken.fulfilled, refreshTokenFullfilled)
        .addCase(refreshToken.rejected, refreshTokenRejected)
}