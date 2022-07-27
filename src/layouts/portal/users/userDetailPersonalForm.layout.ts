import { ReconciliationOutlined, UserOutlined } from "@ant-design/icons";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];
const detailsLocals = PORTAL_LOCALS['users']['details'];

export const userDetailPersonalFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: detailsLocals['basic']['description'],
        props: {
            level: 4,
            className: 'separator-users__basic',
        },
    },
    {
        key: 'input-name',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-name',
            name:"name",
            rules:[{ required: true, message: formLocals['name']['validators']['required'] }],
        },
        propsInput: {
            placeholder: formLocals['name']['placeholder'],
            'aria-label': formLocals['name']['ariaLabel']
        },
        inputPrefix: UserOutlined
    },
    {
        key: 'input-lastname',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-lastname',
            name:"lastname",
            rules:[{ required: true, message: formLocals['lastname']['validators']['required'] }],
        },
        propsInput: {
            placeholder: formLocals['lastname']['placeholder'],
            'aria-label': formLocals['lastname']['ariaLabel']
        },
        inputPrefix: UserOutlined
    },
    {
        key: 'select-area',
        type: ETypeFormItem.SELECT,
        props: {
            className: 'form-details__item-area',
            name:"type",
            rules:[{ required: true, message: formLocals['area']['validators']['required'] }],
        },
        propsInput: {
            showSearch: true,
            placeholder: formLocals['area']['placeholder'],
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
        key: 'input-job',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-job',
            name:"job",
            rules:[{ required: true, message: formLocals['job']['validators']['required'] }],
        },
        propsInput: {
            placeholder: formLocals['job']['placeholder'],
            'aria-label': formLocals['job']['ariaLabel']
        },
        inputPrefix: ReconciliationOutlined
    },
    {
        key: 'button-save-basic',
        type: ETypeFormItem.SAVE_BUTTON,
        props: {
            className: 'form-details__item-saveButton',
        },
        propsInput: {
            'aria-label': detailsLocals['form']['saveButton'],
            htmlType: "submit",
            text: detailsLocals['form']['saveButton']
        }
    }
]