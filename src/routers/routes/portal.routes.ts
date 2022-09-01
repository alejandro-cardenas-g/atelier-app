import { lazy } from "react";
import { Nullish } from "../../components/Common/Nullish.component";
import { IRoutes, IS_INDEX_COMPONENT } from "./interfaces";
import { ROUTES, PATHNAMES } from '../routes.enum';
import { PortalPage } from "../../pages/portal/portalPage.page";

const UserComponentLazy = lazy(() => import('../../components/Portal/Users/users.component'));
const ClientsComponentLazy = lazy(() => import('../../components/Portal/Clients/clients.component'));
const EquipmentsComponentLazy = lazy(() => import('../../components/Portal/Equipments/equipments.component'));
const EquipmentsRegisterComponentLazy = lazy(() => import('../../components/Portal/Equipments/register/equipmentsRegisterMain.component'));

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
                component: UserComponentLazy,
                layout: PortalPage,
                props: {

                },
                componentProps: {
                    type: 0
                }
            },
            {
                path: ROUTES.PORTAL_USER_DETAIL,
                isPrivate: true,
                component: UserComponentLazy,
                layout: PortalPage,
                props: {
                    
                },
                componentProps: {
                    type: 2
                }
            },
            {
                path: ROUTES.PORTAL_USER_REGISTER,
                isPrivate: true,
                component: UserComponentLazy,
                layout: PortalPage,
                props: {
                    
                },
                componentProps: {
                    type: 1
                }
            },
            {
                path: ROUTES.PORTAL_CLIENTS,
                isPrivate: true,
                component: ClientsComponentLazy,
                layout: PortalPage,
                props: {

                },
                componentProps: {
                    type: 0
                }
            },
            {
                path: ROUTES.PORTAL_CLIENTS_DETAIL,
                isPrivate: true,
                component: ClientsComponentLazy,
                layout: PortalPage,
                props: {
                    
                },
                componentProps: {
                    type: 2
                }
            },
            {
                path: ROUTES.PORTAL_CLIENTS_REGISTER,
                isPrivate: true,
                component: ClientsComponentLazy,
                layout: PortalPage,
                props: {
                    
                },
                componentProps: {
                    type: 1
                }
            },
            {
                path: ROUTES.PORTAL_EQUIPOS,
                isPrivate: true,
                component: EquipmentsComponentLazy,
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_EQUIPOS_REGISTER,
                isPrivate: true,
                component: EquipmentsRegisterComponentLazy,
                layout: PortalPage,
                props: {

                }
            },
            {
                path: ROUTES.PORTAL_EQUIPOS_DETAILS_READ,
                isPrivate: true,
                component: lazy(() => import('../../components/Portal/Equipments/details/equipmentDetails.component')),
                layout: PortalPage,
                props: {
                    permission: 0
                }
            },
            {
                path: ROUTES.PORTAL_EQUIPOS_DETAILS_EDIT,
                isPrivate: true,
                component: lazy(() => import('../../components/Portal/Equipments/details/equipmentDetails.component')),
                layout: PortalPage,
                props: {
                    permission: 1
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