import { useEffect, useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

import { PortalSiderInfo } from "./portalSiderInfo.component";
import { sideMenuLayout } from "../../../layouts/portal/siderMenu.layout";
import { PATHNAMES } from "../../../routers/routes.enum";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

export const PortalSider = () => {

    const { pathname } = useLocation();
    console.log(pathname)
    console.log(PATHNAMES)
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleToRoute = (route: PATHNAMES) => {
        navigate(route);
    }

    const items: MenuItem[] = sideMenuLayout.map(({component:Component,key,label,route, ...rest}) => ({
        key,
        label,
        icon: <Component/>,
        onClick: () => handleToRoute(route),
        ...rest
    }));

    useEffect(() => {
        setShow(prev => false);
    }, [pathname])

    return (
        <>
            <div className={`portal__sider ${show ? '' : 'portal__sider--hide'}`}>
                <div className={'portal__sider-content'}>
                    <PortalSiderInfo/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} selectedKeys={[pathname]}/>
                </div>
            </div>

            {
                <button className={`toggle__sider ${show ? '' : 'toggle__sider--hide'}`} onClick={() => setShow(!show)}>
                    {
                        show ? <MenuFoldOutlined/> : <MenuUnfoldOutlined/>
                    }
                </button>
            }
            
        </>

    )
}
