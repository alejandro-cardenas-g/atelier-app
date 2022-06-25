import { lazy } from "react";
import { Nullish } from "../../components/Common/Nullish.component";
import { AUTHLOCALES } from "../../locales/auth/auth.locales";
import { AuthPage } from "../../pages/auth/authPage.page";
import { IRoutes, IS_INDEX_COMPONENT } from "./interfaces";
import { ROUTES, PATHNAMES } from '../routes.enum';

const LoginContent = lazy(() => import('../../components/Auth/Login/loginContent.component'));

export const authRoutes:IRoutes[] = [
    {
        path: ROUTES.AUTH,
        isIndexComponent: IS_INDEX_COMPONENT.REDIRECT,
        index: Nullish,
        pathIndexRedirect: PATHNAMES.AUTH_LOGIN,
        redirect: PATHNAMES.AUTH_LOGIN,
        indexHasLayout: false,
        isPrivate: false,
        layout: Nullish,
        routes: [
            {
                path: ROUTES.AUTH_LOGIN,
                isPrivate: false,
                component: LoginContent,
                layout: AuthPage,
                props: {
                    text: AUTHLOCALES['portal']['admin']
                }
            },
            {
                path: ROUTES.AUTH_CLIENTE_LOGIN,
                isPrivate: false,
                component: LoginContent,
                layout: AuthPage,
                props: {
                    text: AUTHLOCALES['portal']['client']
                }
            }
        ]
    }
]