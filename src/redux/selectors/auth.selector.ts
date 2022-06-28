import { RootState } from "../../store/store";

export const getIsLogged = (state:RootState) => state.auth.isLogged;
export const getUserType = (state:RootState) => state.auth.type;