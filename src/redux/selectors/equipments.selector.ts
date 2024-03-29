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

export const getDocTagsSelector = (state:RootState) => {

    const { 
        docTags
    } = state.equipments;

    return docTags;
};

export const getSingleEquipment = (state: RootState) => state.equipments.equipmentDetail;
export const isLoadingEquipments = (state: RootState) => state.equipments.isLoading;
export const getDrawerSelector = (state: RootState) => state.equipments.drawer;