import { store } from "../../../store/store";
import { deleteUser, getUserDetail, getUsers, patchSimpleUserDetail, uploadDocument } from "../../thunks/users.thunk";
import { SET_ACTIVE_USER, SET_USER_DETAIL_SECTION } from "../../slices/portal/users.slice";
import { EUserDetailSection } from "../../../interfaces/redux/usuarios/reduxUsers.interface";
import { IPatchRequest } from "../../../interfaces/redux/usuarios/usersPayload.interface";
import { ICommonProps } from "../../../interfaces/common/common.interface";

export const dispatchGetUsers = (page: number, search: string = '') => store.dispatch(getUsers({page, search}));
export const dispatchSetActiveUser = (id: number) => store.dispatch(SET_ACTIVE_USER(id));
export const setUserDetailSection = (section: EUserDetailSection | null) => 
    store.dispatch(SET_USER_DETAIL_SECTION(section));
export const dispatchGetUserDetail = (id: string | number) => store.dispatch(getUserDetail(id));
export const dispatchPatchSimpleUserDetail = (payload: IPatchRequest) => 
    store.dispatch(patchSimpleUserDetail(payload))
export const dispatchDeleteUser = (id: number) =>
    store.dispatch(deleteUser(id));
export const dispatchUploadDocument = (data: {id:number, data: ICommonProps}) =>
    store.dispatch(uploadDocument(data))