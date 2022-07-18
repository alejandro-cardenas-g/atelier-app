import { store } from "../../../store/store";
import { getCommon } from "../../thunks/common.thunk";

export const dispatchGetCommon = () => store.dispatch(getCommon());