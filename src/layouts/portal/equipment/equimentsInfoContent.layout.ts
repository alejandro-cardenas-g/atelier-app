import { Nullish } from "../../../components/Common/Nullish.component";
import { EditListOptions, ReadListOptionInfo, ReadOptionInfo, WritOptionInfo } from "../../../components/Portal/Equipments/utils/equipmentsInfoOption.component";
import { JSXComponent } from '../../../interfaces/common/common.interface';
import { EEquipmentsContent } from "../../../locales/portal/portalEquipment.locals";

export const EquipmentInfoContentLayout:IEquipmentInfoContentLayout[] = [
    {
        type: EEquipmentsContent.READ,
        Component: ReadOptionInfo
    },
    {
        type: EEquipmentsContent.WRITE,
        Component: WritOptionInfo
    },
    {
        type: EEquipmentsContent.UPDATE,
        Component: EditListOptions
    },
    {
        type: EEquipmentsContent.READ_LIST,
        Component: ReadListOptionInfo
    },
]

interface IEquipmentInfoContentLayout{
    type: EEquipmentsContent;
    Component: JSXComponent
}
