import { ReadOptionInfo, WritOptionInfo } from "../../../components/Portal/Clients/utils/clientsInfoOption.component";
import { JSXComponent } from '../../../interfaces/common/common.interface';
import { EClientsContent } from "../../../locales/portal/portalClients.locals";

export const ClientsInfoContentLayout:IUsersInfoContentLayout[] = [
    {
        type: EClientsContent.READ,
        Component: ReadOptionInfo
    },
    {
        type: EClientsContent.WRITE,
        Component: WritOptionInfo
    },
    {
        type: EClientsContent.UPDATE,
        Component: WritOptionInfo
    }
]

interface IUsersInfoContentLayout{
    type: EClientsContent;
    Component: JSXComponent
}
