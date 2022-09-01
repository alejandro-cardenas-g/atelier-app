import { RootState } from "../../store/store";

export const getUserTypes = (state:RootState) => state.common.userTypes;
export const getInstitutions = (state:RootState) => state.common.institutions;