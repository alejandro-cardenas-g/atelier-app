import { EUsersContent } from "../../../locales/portal/portalUsers.locals"
import { ReactElement } from 'react';
import { ReadOptionInfo, WritOptionInfo } from "../../../components/Portal/Users/utils/userInfoOption.component";
import { JSXComponent } from '../../../interfaces/common/common.interface';

export const UsersInfoContentLayout:IUsersInfoContentLayout[] = [
    {
        type: EUsersContent.READ,
        Component: ReadOptionInfo
    },
    {
        type: EUsersContent.WRITE,
        Component: WritOptionInfo
    },
    {
        type: EUsersContent.UPDATE,
        Component: WritOptionInfo
    }
]

interface IUsersInfoContentLayout{
    type: EUsersContent;
    Component: JSXComponent
}
