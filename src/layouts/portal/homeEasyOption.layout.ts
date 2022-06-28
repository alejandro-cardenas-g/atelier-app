import { DeploymentUnitOutlined, CalendarOutlined, ScheduleOutlined } from '@ant-design/icons';
import { TYPE_USER } from '../../locales/auth/auth.locales';
import { PORTAL_LOCALES } from '../../locales/portal/portal.locales';

const OPTIONS = PORTAL_LOCALES['home']['options'];

type UserTypes = {
    [key in TYPE_USER]: [IhomeEasyOptionLayout,IhomeEasyOptionLayout,IhomeEasyOptionLayout];
}

type MenuOption = {
    [key: string]: IhomeEasyOptionLayout
}

interface IhomeEasyOptionLayout{
    logo: React.JSXElementConstructor<any>;
    title: string;
    text: string;
    buttonText: string;
    baseColor?: string
}

const homeEasyOptions:MenuOption = {
    [OPTIONS['newEquipment']['name']]:{
        logo: DeploymentUnitOutlined,
        title: OPTIONS['newEquipment']['title'],
        text: OPTIONS['newEquipment']['text'],
        buttonText: OPTIONS['newEquipment']['buttonText']
    },
    [OPTIONS['recentEvents']['name']]:{
        logo: CalendarOutlined,
        title: OPTIONS['recentEvents']['title'],
        text: OPTIONS['recentEvents']['text'],
        buttonText: OPTIONS['recentEvents']['buttonText']
    },
    [OPTIONS['newEvent']['name']]:{
        logo: ScheduleOutlined,
        title: OPTIONS['newEvent']['title'],
        text: OPTIONS['newEvent']['text'],
        buttonText: OPTIONS['newEvent']['buttonText']
    },
}

export const homeEasyOptionLayouts:UserTypes = {
    [TYPE_USER.ADMIN]: [
        homeEasyOptions[OPTIONS['newEquipment']['name']], 
        homeEasyOptions[OPTIONS['recentEvents']['name']], 
        homeEasyOptions[OPTIONS['newEvent']['name']], 
    ],
    [TYPE_USER.CLIENT]: [
        homeEasyOptions[OPTIONS['newEquipment']['name']], 
        homeEasyOptions[OPTIONS['recentEvents']['name']], 
        homeEasyOptions[OPTIONS['newEvent']['name']], 
    ],
    [TYPE_USER.MANTAINERS]: [
        homeEasyOptions[OPTIONS['newEquipment']['name']], 
        homeEasyOptions[OPTIONS['recentEvents']['name']], 
        homeEasyOptions[OPTIONS['newEvent']['name']], 
    ],
    [TYPE_USER.SUPER]: [
        homeEasyOptions[OPTIONS['newEquipment']['name']], 
        homeEasyOptions[OPTIONS['recentEvents']['name']], 
        homeEasyOptions[OPTIONS['newEvent']['name']], 
    ]
} 