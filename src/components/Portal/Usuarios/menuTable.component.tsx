import { Menu } from "antd"
import { dropDownMenuItems } from "../../../layouts/portal/usuarioTable.layout"

export const MenuTable = () => {

    return (
        <Menu
            className='custom-table-menu'
            onClick={() => {}}
            items={dropDownMenuItems.map(({danger, icon:Icon, key, label}) => {
                return {
                    label,
                    key,
                    danger,
                    icon: <Icon/>
                }
            })}
        />
    )
}
