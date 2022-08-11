import { ILogin } from "../../../interfaces/auth/authLogin.interface";
import { TYPE_SESSION } from "../../../locales/auth/auth.locals";
import { store } from "../../../store/store";
import { LOGOUT, ON_FORBIDDEN, STABLISH_USER_SESSION } from "../../slices/auth/auth.slice";
import { authLogin, refreshToken } from "../../thunks/auth.thunk";

export const dispatchLogin = (data: ILogin) => store.dispatch(authLogin(data));
export const dispatchRefreshToken = () => store.dispatch(refreshToken());
export const dispatchForbidden = () => store.dispatch(ON_FORBIDDEN('FORBIDDEN'));
export const dispatchUserSession = (user_session: TYPE_SESSION) => store.dispatch(STABLISH_USER_SESSION(user_session));
export const dispatLogout = () => store.dispatch(LOGOUT('LOGOUT'));