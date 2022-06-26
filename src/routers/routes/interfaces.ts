import { ReactElement } from "react";
import { ROUTES, PATHNAMES } from '../routes.enum';

type JSXComponent = () => ReactElement;

export enum IS_INDEX_COMPONENT {
    COMPONENT,
    REDIRECT
}

export interface IRoutes{
    path: ROUTES;
    isIndexComponent: IS_INDEX_COMPONENT;
    pathIndexRedirect?: PATHNAMES;
    indexHasLayout: boolean;
    layout: (props:any) => ReactElement;
    isPrivate: boolean;
    index:  React.LazyExoticComponent<JSXComponent> | JSXComponent;
    redirect: PATHNAMES;
    routes: IRoute[];
}

interface IRoute{
    path: ROUTES,
    isPrivate: boolean,
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    layout:  (props:any) => ReactElement;
    props: {
        [key: string]: any
    }
}