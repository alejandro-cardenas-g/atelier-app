import { lazy } from "react";
import { IClientsContent } from "../../../interfaces/portal/clients/contentUsers.interface";
import { EClientsContent } from "../../../locales/portal/portalClients.locals";



export const CLIENTS_CONTENT:IClientsContent[] = [
    {
        Component: lazy(() => import('../../../components/Portal/Clients/home-table/clientsTable.component')),
        action: EClientsContent.READ,
        props: {}
    },
    {
        Component: lazy(() => import('../../../components/Portal/Clients/register/clientRegister.component')),
        action: EClientsContent.WRITE,
        props: {} 
    },
    {
        Component: lazy(() => import('../../../components/Portal/Clients/details/clientDetails.component')),
        action: EClientsContent.UPDATE,
        props: {} 
    }
]