import { lazy } from "react";
import { IUsersContent } from "../../../interfaces/portal/usuarios/contentUsers.interface";
import { EUsersContent } from "../../../locales/portal/portalUsers.locals";

const UsersRegister = lazy(() => import('../../../components/Portal/Users/userRegister.component'));

export const USUARIOS_CONTENT:IUsersContent[] = [
    {
        Component: lazy(() => import('../../../components/Portal/Users/usersTable.component')),
        action: EUsersContent.READ,
        props: {}
    },
    {
        Component: UsersRegister,
        action: EUsersContent.WRITE,
        props: {} 
    },
    {
        Component: UsersRegister,
        action: EUsersContent.UPDATE,
        props: {} 
    }
]