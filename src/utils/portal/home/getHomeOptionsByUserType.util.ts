import { homeEasyOptionLayouts } from "../../../layouts/portal/homeEasyOption.layout";
import { TYPE_USER } from "../../../locales/auth/auth.locales";


export function getHomeOptionsByUserType(userType: TYPE_USER,){
    return homeEasyOptionLayouts[userType];
} 