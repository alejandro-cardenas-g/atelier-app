import { store } from "../../../store/store";
import { getUserDetail, getUsers, patchSimpleUserDetail } from "../../thunks/users.thunk";
import { SET_USER_DETAIL_SECTION } from "../../slices/portal/users.slice";
import { EUserDetailSection } from "../../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { IPatchRequest } from "../../../interfaces/redux/usuarios/usersPayload.interface";

export const dispatchGetUsers = (page: number) => store.dispatch(getUsers(page));
export const setUserDetailSection = (section: EUserDetailSection | null) => 
    store.dispatch(SET_USER_DETAIL_SECTION(section));
export const dispatchGetUserDetail = (id: number) => store.dispatch(getUserDetail(id));
export const dispatchPatchSimpleUserDetail = (payload: IPatchRequest) => 
    store.dispatch(patchSimpleUserDetail(payload))