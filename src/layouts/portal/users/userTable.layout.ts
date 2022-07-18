import { DeleteOutlined, MenuOutlined, ScheduleOutlined } from "@ant-design/icons";
import { JSXElementConstructor } from "react";

export const dropDownMenuItems: IDropDownMenuItems[] = [
    {
        label: 'Detalles',
        key: '1',
        icon: MenuOutlined,
        danger: false
    },
    {
        label: 'Eventos',
        key: '2',
        icon: ScheduleOutlined,
        danger: false
    },
    {
        label: 'Eliminar',
        key: '3',
        icon: DeleteOutlined,
        danger: true
    },
]

interface IDropDownMenuItems{
    label: string;
    key: string;
    icon: JSXElementConstructor<any>,
    danger: boolean;
}