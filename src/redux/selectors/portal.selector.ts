import { RootState } from "../../store/store";

export const getUsersPortal = (state:RootState) => {

    const { 
        isLoading,
        total,
        users
    } = state.users;

    return {
        users,
        total,
        isLoading
    }
};