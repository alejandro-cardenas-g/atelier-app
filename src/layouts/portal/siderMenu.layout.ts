import { 
    UserOutlined, 
    DeploymentUnitOutlined, 
    IdcardOutlined, 
    SettingOutlined, 
    ScheduleOutlined, 
    HomeOutlined
} from "@ant-design/icons";

import { PORTAL_SIDER_LOCALES } from "../../locales/portal/portalSider.locales";
import { PATHNAMES } from "../../routers/routes.enum";

export const sideMenuLayout: IItems[] = [
    {
        key: PATHNAMES.PORTAL,
        label: PORTAL_SIDER_LOCALES['menuItem']['home'],
        component: HomeOutlined,
        route: PATHNAMES.PORTAL
    },
    {
        key: PATHNAMES.PORTAL_USERS,
        label: PORTAL_SIDER_LOCALES['menuItem']['users'],
        component: IdcardOutlined,
        route: PATHNAMES.PORTAL_USERS
    },
    {
        key: PATHNAMES.PORTAL_CLIENTS,
        label: PORTAL_SIDER_LOCALES['menuItem']['clients'],
        component: UserOutlined,
        route: PATHNAMES.PORTAL_CLIENTS,
    },
    {
        key: PATHNAMES.PORTAL_EQUIPOS,
        label: PORTAL_SIDER_LOCALES['menuItem']['equipments'],
        component: DeploymentUnitOutlined,
        route: PATHNAMES.PORTAL_EQUIPOS 
    },
    {
        key: PATHNAMES.PORTAL_EVENTOS,
        label: PORTAL_SIDER_LOCALES['menuItem']['events'],
        component: ScheduleOutlined,
        route: PATHNAMES.PORTAL_EVENTOS 
    },
    {
        key: PATHNAMES.PORTAL_SETTINGS,
        label: PORTAL_SIDER_LOCALES['menuItem']['settings'],
        component: SettingOutlined,
        route: PATHNAMES.PORTAL_SETTINGS,
    },
    // {
    //     key: ROUTES.PORTAL_USERS,
    //     label: 'cinco',
    //     component: MenuFoldOutlined,
    //     route: ROUTES.PORTAL_SETTINGS,
    //     children: [
    //         {
    //             key: '6',
    //             label: 'cuatro',
    //             component: MenuFoldOutlined,
    //             route: ROUTES.PORTAL_EVENTOS 
    //         },
    //     ]
    // },

]

interface IItems{
    key: string;
    label: string;
    component: React.JSXElementConstructor<any>;
    route: PATHNAMES;
    children?: IItems[]
}