import { TeamOutlined } from "@ant-design/icons";
import { Typography } from "antd";


export const SiderAuth = ({text}: IProps) => {
    return (

        <div className='auth__sider'>
            
            <TeamOutlined className='auth__sider--icon'/>
            <Typography.Title level={1} >Portal</Typography.Title>
            <Typography.Title level={3}>{text}</Typography.Title>

        </div>

    )
}

interface IProps{
    text: string;
}
