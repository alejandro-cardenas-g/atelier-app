import { Typography } from "antd";
import { ReactElement } from "react";
import { UserOutlined } from "@ant-design/icons";

export const PortalSiderInfo = () => {
    return (

        <div className='portal__sider-info'>

            <UserOutlined className="portal__sider-auth-logo"/>
            <Typography.Text className='portal__sider-title'>Alexander Carbonerillejo</Typography.Text>

        </div>

    )
}

interface IProps{
    selected: boolean;
    icon: ReactElement;
    text: string;
}
