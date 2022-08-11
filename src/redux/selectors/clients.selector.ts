import { RootState } from "../../store/store";

export const getClientsPortal = (state:RootState) => {

    const { 
        isLoading,
        total,
        clients
    } = state.clients;

    return {
        clients,
        total,
        isLoading
    }
};

export const getClientDetailsSection = (state:RootState) => {
    const { 
        detailSection,
        isLoading 
    } = state.clients;
    return {
        detailSection,
        isLoading
    }
};

export const getClientDetails = (state:RootState) => {
    const {
        clientDetail,
        active
    } = state.clients;
    return {clientDetail, active}
}