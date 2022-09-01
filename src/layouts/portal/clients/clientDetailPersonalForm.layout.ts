import { GoldOutlined, MailOutlined, PhoneOutlined, ReconciliationOutlined, UserOutlined } from "@ant-design/icons";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { validateEmail } from "../../../utils/portal/users/userRegistryForm.validator.util";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];
const detailsLocals = PORTAL_LOCALS['users']['details'];

export const clientDetailPersonalFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: detailsLocals['basic']['description'],
        props: {
            level: 4,
            className: 'separator-clients__basic',
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
        key: 'input-email',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-email',
            name:"email",
            rules:[
                {
                    validator: validateEmail,
                    validateTrigger: 'OnSubmit'
                }
            ],
        },
        propsInput: {
            placeholder: formLocals['email']['placeholder'],
            'aria-label': formLocals['email']['ariaLabel']
        },
        inputPrefix: MailOutlined
    },
    // {
    //     key: 'input-company',
    //     type: ETypeFormItem.INPUT,
    //     props: {
    //         className: 'form-details__item-company',
    //         name:"company",
    //         rules:[{ required: true, message: 'La compañia es obligatoria' }],
    //     },
    //     propsInput: {
    //         placeholder: 'Companía*',
    //         'aria-label': 'Compañía'
    //     },
    //     inputPrefix: GoldOutlined
    // },
    {
        //SELECT RED, SELECT IPS, SELECT LOCATION
        key: 'input-company',
        type: ETypeFormItem.SELECT,
        props: {
            className: 'form-details__item-company',
            name:"company",
            rules:[{ required: true, message: 'La compañia es obligatoria' }],
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
        key: 'input-phone',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-phone',
            name:"phone"
        },
        propsInput: {
            placeholder: formLocals['phone']['placeholder'],
            'aria-label': formLocals['phone']['ariaLabel'],
            type: 'number',
            min: 0
        },
        inputPrefix: PhoneOutlined
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
    },
]