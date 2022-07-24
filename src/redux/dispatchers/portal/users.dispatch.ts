import { store } from "../../../store/store";
import { getUsers } from "../../thunks/users.thunk";
import { SET_ACTIVE_USER } from "../../slices/portal/usuarios.slice";

export const dispatchGetUsers = (page: number) => store.dispatch(getUsers(page));
export const setUserDispatch = (userId: number) => store.dispatch(SET_ACTIVE_USER(userId));