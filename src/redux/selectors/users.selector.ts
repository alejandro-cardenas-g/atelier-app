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

export const getUserDetailsSection = (state:RootState) => {
    const { 
        detailSection,
        isLoading 
    } = state.users;
    return {
        detailSection,
        isLoading
    }
};

export const getUserDetails = (state:RootState) => {
    const {
        userDetail,
        active
    } = state.users;
    return {userDetail, active}
}