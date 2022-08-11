import { EClientDetailSection } from "../../../interfaces/redux/clients/reduxClient.interface";
import { store } from "../../../store/store";
import { SET_ACTIVE_CLIENT, SET_CLIENT_DETAIL_SECTION } from "../../slices/portal/clients.slice";
import { getClientDetail, getClients } from "../../thunks/clients.thunk";

export const dispatchGetClients = (page: number, search: string = '') => store.dispatch(getClients({page, search}));
export const dispatchSetActiveClient = (id: number) => store.dispatch(SET_ACTIVE_CLIENT(id));
export const setClientDetailSection = (section: EClientDetailSection | null) => 
    store.dispatch(SET_CLIENT_DETAIL_SECTION(section));
export const dispatchGetClientDetail = (id: string | number) => store.dispatch(getClientDetail(id));