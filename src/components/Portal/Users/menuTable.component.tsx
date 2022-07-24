import { Menu } from "antd"
import { dropDownMenuItems } from "../../../layouts/portal/users/userTable.layout"

export const MenuTable = ({handleClick, userId}: IProps) => {

    return (
        <Menu
            className='custom-table-menu'
            onClick={({ key }) =>handleClick(key, userId)}
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

interface IProps{
    handleClick: (key: string, id: number) => void;
    userId: number;
}
