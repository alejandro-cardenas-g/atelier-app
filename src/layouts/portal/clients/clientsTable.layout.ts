import { DeleteOutlined, MenuOutlined } from "@ant-design/icons";
import { JSXElementConstructor } from "react";
import { EDropDownMenuItemsTable } from "../../../interfaces/portal/users/users.interface";

export const dropDownMenuItems: IDropDownMenuItems[] = [
    {
        label: 'Detalles',
        key: EDropDownMenuItemsTable.DETAIL,
        icon: MenuOutlined,
        danger: false
    },
    {
        label: 'Eliminar',
        key: EDropDownMenuItemsTable.DELETE,
        icon: DeleteOutlined,
        danger: true,
        isSuper: true
    },
]

export interface IDropDownMenuItems{
    label: string;
    key: string | number;
    icon: JSXElementConstructor<any>,
    danger: boolean;
    isSuper?: boolean;
}