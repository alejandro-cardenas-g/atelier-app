import { store } from "../../../store/store";
import { getUserDetail, getUsers } from "../../thunks/users.thunk";
import { SET_ACTIVE_USER, SET_USER_DETAIL_SECTION } from "../../slices/portal/users.slice";
import { EUserDetailSection } from "../../../interfaces/redux/usuarios/reduxUsuarios.interface";

export const dispatchGetUsers = (page: number) => store.dispatch(getUsers(page));
export const setUserDetailSection = (section: EUserDetailSection | null) => 
    store.dispatch(SET_USER_DETAIL_SECTION(section));
export const dispatchGetUserDetail = (id: number) => store.dispatch(getUserDetail(id));