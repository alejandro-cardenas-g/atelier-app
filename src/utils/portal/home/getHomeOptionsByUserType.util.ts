import { homeEasyOptionLayouts } from "../../../layouts/portal/home/homeEasyOption.layout";
import { TYPE_USER } from "../../../locales/auth/auth.locals";


export function getHomeOptionsByUserType(userType: TYPE_USER,){
    return homeEasyOptionLayouts[userType];
} 