import { RootState } from "../../store/store";

export const getIsLogged = (state:RootState) => state.auth.isLogged;
export const getLoading = (state: RootState) => state.auth.loading;
export const getUserType = (state:RootState) => state.auth.user?.type;
export const getAuth = (state: RootState) => state.auth;
export const getAuthVerify = (state: RootState) => {
    const {isLogged,loading,checked} = state.auth;
    return {
        isLogged,
        loading,
        checked
    }
}
export const getUserName = (state:RootState) => {
    const { name, lastname } = state.auth.user!;
    return {
        name,
        lastname
    }
}

export const getIsSuperUser = (state:RootState) => {
    const { isSuperUser } = state.auth.user!;
    return isSuperUser;
}

export const getPermissions = (state: RootState) => {
    const { type, isSuperUser } = state.auth.user!;
    return {
        type,
        isSuperUser
    }
    
}