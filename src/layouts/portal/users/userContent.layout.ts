import { lazy } from "react";
import { IUsersContent } from "../../../interfaces/portal/users/contentUsers.interface";
import { EUsersContent } from "../../../locales/portal/portalUsers.locals";

const UsersRegister = lazy(() => import('../../../components/Portal/Users/register/userRegister.component'));
const UsersDetails = lazy(() => import('../../../components/Portal/Users/details/userDetails.component'));

export const USUARIOS_CONTENT:IUsersContent[] = [
    {
        Component: lazy(() => import('../../../components/Portal/Users/home-table/usersTable.component')),
        action: EUsersContent.READ,
        props: {}
    },
    {
        Component: UsersRegister,
        action: EUsersContent.WRITE,
        props: {} 
    },
    {
        Component: UsersDetails,
        action: EUsersContent.UPDATE,
        props: {} 
    }
]