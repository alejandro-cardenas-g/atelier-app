import { store } from "../../../store/store";
import { getEquipments } from "../../thunks/equipments.thunk";

export const dispatchGetEquipments = (page: number, search: string = '') => store.dispatch(getEquipments({page, search}));