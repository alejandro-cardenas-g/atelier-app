import { store } from "../../../store/store";
import { CLEAR_DRAWER } from "../../slices/portal/equipments.slice";
import { getEquipments, getEquipmentTags, getParametersDrawer, getSingleEquipment } from "../../thunks/equipments.thunk";

export const dispatchGetEquipments = (page: number, search: string = '') => store.dispatch(getEquipments({page, search}));
export const dispatchGetDocTagsEquipment = () => store.dispatch(getEquipmentTags());
export const dispatchGetSingleEquipment = (id: number) => store.dispatch(getSingleEquipment(id));
export const dispatchGetIps = (id: number) => store.dispatch(getParametersDrawer({action: 1, id}));
export const dispatchGetLocations = (id: number) => store.dispatch(getParametersDrawer({action: 2, id}));
export const dispatchClearDrawer =
    (values:{clearLocation: boolean; clearIps: boolean})=> store.dispatch(CLEAR_DRAWER(values));
