import { lazy } from "react";
import { Nullish } from "../../components/Common/Nullish.component";
import { IRoutes, IS_INDEX_COMPONENT } from "./interfaces";
import { ROUTES, PATHNAMES } from '../routes.enum';
import { PortalPage } from "../../pages/portal/portalPage.page";

export const portalRoutes:IRoutes[] = [
    {
        path: ROUTES.PORTAL,
        isIndexComponent: IS_INDEX_COMPONENT.COMPONENT,
        index: lazy(() => import('../../components/Portal/Home/home.component')),
        indexHasLayout: true,
        layout: PortalPage,
        isPrivate: true,
        redirect: PATHNAMES.PORTAL,
        routes: [
            {
                path: ROUTES.PORTAL_USERS,
                isPrivate: true,
                component: lazy(() => import('../../components/Portal/Usuarios/usuarios.component')),
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_CLIENTS,
                isPrivate: true,
                component: Nullish,
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_EQUIPOS,
                isPrivate: true,
                component: Nullish,
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_EVENTOS,
                isPrivate: true,
                component: Nullish,
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_SETTINGS,
                isPrivate: true,
                component: Nullish,
                layout: PortalPage,
                props: {

                }
            }
        ]
    }
]