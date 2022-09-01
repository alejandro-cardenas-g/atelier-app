import { store } from "../../../store/store";
import { getEquipments, getEquipmentTags, getSingleEquipment } from "../../thunks/equipments.thunk";

export const dispatchGetEquipments = (page: number, search: string = '') => store.dispatch(getEquipments({page, search}));
export const dispatchGetDocTagsEquipment = () => store.dispatch(getEquipmentTags());
export const dispatchGetSingleEquipment = (id: number) => store.dispatch(getSingleEquipment(id));
