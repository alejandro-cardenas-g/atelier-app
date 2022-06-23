import { AuthPage } from "../../pages/auth/AuthPage";
import { ROUTES } from "../routes.enum";
import { AUTHLOCALES } from '../../locales/auth/auth.locales';
import { lazy, ReactElement } from "react";

const LoginContent = lazy(() => import('../../components/Auth/Login/loginContent.component'));

export const routes:IRoutes[] = [
    {
        path: ROUTES.AUTH_LOGIN,
        isPrivate: false,
        component: LoginContent,
        layout: AuthPage,
        text: AUTHLOCALES['portal']['admin']
    },
    {
        path: ROUTES.AUTH_CLIENTE_LOGIN,
        isPrivate: false,
        component: LoginContent,
        layout: AuthPage,
        text: AUTHLOCALES['portal']['client']
    }
]

type JSXComponent = () => ReactElement;

interface IRoutes{
    path: string;
    isPrivate: boolean;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    layout: ({ children, text }:ILayout) => ReactElement;
    text: string;
}

interface ILayout{
    children: ReactElement | ReactElement[];
    text: string;
}