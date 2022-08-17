import { RootState } from "../../store/store";

export const getEquipmentsPortal = (state:RootState) => {

    const { 
        isLoading,
        total,
        equipments
    } = state.equipments;

    return {
        equipments,
        total,
        isLoading
    }
};
