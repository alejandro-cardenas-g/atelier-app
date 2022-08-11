import { Menu } from "antd"
import { dropDownMenuItems, IDropDownMenuItems } from "../../../../layouts/portal/clients/clientsTable.layout"

export const MenuTable = ({handleClick, userId, slug, isSuper}: IProps) => {

    const menuFiltered = dropDownMenuItems.map(item => {
        if(!item.isSuper) return item;
        if(isSuper === true) return item;
        return null;
    }).filter(item => item !== null);

    return (
        <Menu
            className='custom-table-menu'
            onClick={({ key }) =>handleClick(key, userId, slug)}
            items={(menuFiltered as IDropDownMenuItems[]).map(({danger, icon:Icon, key, label}) => {
                
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
    isSuper: boolean;
}
