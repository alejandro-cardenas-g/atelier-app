import { Nullish } from "../../../components/Common/Nullish.component";
import { ReadOptionInfo, WritOptionInfo } from "../../../components/Portal/Equipments/utils/equipmentsInfoOption.component";
import { JSXComponent } from '../../../interfaces/common/common.interface';
import { EClientsContent } from "../../../locales/portal/portalClients.locals";

export const EquipmentInfoContentLayout:IEquipmentInfoContentLayout[] = [
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
        Component: Nullish
    }
]

interface IEquipmentInfoContentLayout{
    type: EClientsContent;
    Component: JSXComponent
}
