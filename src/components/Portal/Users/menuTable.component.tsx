import { Menu } from "antd"
import { dropDownMenuItems } from "../../../layouts/portal/users/userTable.layout"

export const MenuTable = () => {
    
    return (
        <Menu
            className='custom-table-menu'
            
            onClick={({ key, keyPath, domEvent }) => console.log(key)}
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
