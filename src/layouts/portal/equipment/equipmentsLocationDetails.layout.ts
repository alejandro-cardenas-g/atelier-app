import { BarcodeOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";

const formLocals = PORTAL_LOCALS['equipments']['registry']['form'];

export const equipmentsLocationDetailsLayout:IFormLayout[] = [
    {
        key: 'separator-location',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Ubicación',
        props: {
            level: 4,
            className: 'separator-equipments__location',
        },
    },
    {
        //SELECT RED, SELECT IPS, SELECT LOCATION
        key: 'select-network',
        type: ETypeFormItem.SELECT,
        props: {
            className: 'form-equipments__item-network',
            name:"institution",
            rules:[{ required: true, message: 'La institución es obligatoria' }],
        },
        propsInput: {
            showSearch: true,
            placeholder: 'Institución',
            optionFilterProp: "children",
            filterOption: (input: string, option: {
                label: string;
                value: number;
                children: string;
            } | undefined) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase()),
            options: []
        },
    },
    {
        //SELECT RED, SELECT IPS, SELECT LOCATION
        key: 'select-ips',
        type: ETypeFormItem.SELECT,
        props: {
            className: 'form-equipments__item-ips',
            name:"ips",
            rules:[{ required: true, message: 'La ips es obligatoria' }],
        },
        propsInput: {
            showSearch: true,
            placeholder: 'Ips',
            optionFilterProp: "children",
            filterOption: (input: string, option: {
                label: string;
                value: number;
                children: string;
            } | undefined) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase()),
            options: []
        },
    },
    {
        //SELECT RED, SELECT IPS, SELECT LOCATION
        key: 'select-location',
        type: ETypeFormItem.SELECT,
        props: {
            className: 'form-equipments__item-location',
            name:"location",
            rules:[{ required: true, message: 'La ubicación es obligatoria' }],
        },
        propsInput: {
            showSearch: true,
            placeholder: 'Ubicación',
            optionFilterProp: "children",
            filterOption: (input: string, option: {
                label: string;
                value: number;
                children: string;
            } | undefined) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase()),
            options: []
        },
    },
    {
        key: 'button-save-basic',
        type: ETypeFormItem.SAVE_BUTTON,
        props: {
            className: 'form-equipments__item-saveButton',
        },
        propsInput: {
            'aria-label': formLocals['save'],
            htmlType: "submit",
            text: formLocals['save']
        }
    }
]