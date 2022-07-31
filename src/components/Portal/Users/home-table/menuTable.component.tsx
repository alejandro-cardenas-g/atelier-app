import { Menu } from "antd"
import { dropDownMenuItems } from "../../../../layouts/portal/users/userTable.layout"

export const MenuTable = ({handleClick, userId, slug}: IProps) => {

    return (
        <Menu
            className='custom-table-menu'
            onClick={({ key }) =>handleClick(key, userId, slug)}
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
    handleClick: (key: string, id: number, slug: string) => void;
    userId: number;
    slug: string;
}
