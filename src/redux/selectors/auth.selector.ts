import { RootState } from "../../store/store";

export const getIsLogged = (state:RootState) => state.auth.isLogged;