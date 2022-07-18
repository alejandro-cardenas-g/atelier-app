import { store } from "../../../store/store";
import { getUsers } from "../../thunks/users.thunk";

export const dispatchGetUsers = (page: number) => store.dispatch(getUsers(page));