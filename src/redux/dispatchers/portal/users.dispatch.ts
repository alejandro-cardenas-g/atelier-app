import { store } from "../../../store/store";
import { getUserDetail, getUsers, patchSimpleUserDetail } from "../../thunks/users.thunk";
import { SET_ACTIVE_USER, SET_USER_DETAIL_SECTION } from "../../slices/portal/users.slice";
import { EUserDetailSection } from "../../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { IPatchRequest } from "../../../interfaces/redux/usuarios/usersPayload.interface";

export const dispatchGetUsers = (page: number) => store.dispatch(getUsers(page));
export const dispatchSetActiveUser = (id: number) => store.dispatch(SET_ACTIVE_USER(id));
export const setUserDetailSection = (section: EUserDetailSection | null) => 
    store.dispatch(SET_USER_DETAIL_SECTION(section));
export const dispatchGetUserDetail = (id: string | number) => store.dispatch(getUserDetail(id));
export const dispatchPatchSimpleUserDetail = (payload: IPatchRequest) => 
    store.dispatch(patchSimpleUserDetail(payload))