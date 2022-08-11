import { Typography } from "antd";
import { ReactElement } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getUserName } from "../../../redux/selectors/auth.selector";

export const PortalSiderInfo = () => {
    const { name, lastname } = useSelector(getUserName); 
    return (

        <div className='portal__sider-info'>

            <UserOutlined className="portal__sider-auth-logo"/>
            <Typography.Text className='portal__sider-title'>{`${name} ${lastname}`}</Typography.Text>

        </div>

    )
}

interface IProps{
    selected: boolean;
    icon: ReactElement;
    text: string;
}
