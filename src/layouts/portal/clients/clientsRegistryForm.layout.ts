import { GoldOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { validateEmail, validatePassword } from '../../../utils/portal/users/userRegistryForm.validator.util';
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];

export const clientsRegistryFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Información necesaria',
        props: {
            level: 4,
            className: 'separator-clients__required',
        },
    },
    {
        key: 'input-name',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-clients__item-name',
            name:"name",
            rules:[{ required: true, message: formLocals['name']['validators']['required'] }],
        },
        propsInput: {
            placeholder: `${formLocals['name']['placeholder']}`,
            'aria-label': formLocals['name']['ariaLabel']
        },
        inputPrefix: UserOutlined
    },
    {
        key: 'input-lastname',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-clients__item-lastname',
            name:"lastname",
            rules:[{ required: true, message: formLocals['lastname']['validators']['required'] }],
        },
        propsInput: {
            placeholder: `${formLocals['lastname']['placeholder']}`,
            'aria-label': formLocals['lastname']['ariaLabel']
        },
        inputPrefix: UserOutlined
    },
    {
        key: 'input-email',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-clients__item-email',
            name:"email",
            rules:[
                {
                    validator: validateEmail,
                    validateTrigger: 'OnSubmit'
                }
            ],
        },
        propsInput: {
            placeholder: `${formLocals['email']['placeholder']}`,
            'aria-label': formLocals['email']['ariaLabel']
        },
        inputPrefix: MailOutlined
    },
    {
        key: 'divpassword',
        type: ETypeFormItem.DIVPASSWORD,
        propsDiv:{
            className: 'form-clients__item-password'
        },
        props: {
            className: 'form-clients__item-password--item',
            name:"password",
            rules:[
                {
                    validator: validatePassword,
                    validateTrigger: 'OnSubmit'
                }
            ],
        },
        propsInput: {
            placeholder: `${formLocals['password']['placeholder']}`,
            'aria-label': formLocals['password']['ariaLabel']
        },
        inputPrefix: LockOutlined,
        needsPassword: true,
    },
    {
        key: 'input-company',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-clients__item-company',
            name:"company"
        },
        propsInput: {
            placeholder: 'Compañía*',
            'aria-label': 'Compañía'
        },
        inputPrefix: GoldOutlined,
    },
    {
        key: 'input-phone',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-clients__item-phone',
            name:"phone"
        },
        propsInput: {
            placeholder: formLocals['phone']['placeholder'],
            'aria-label': formLocals['phone']['ariaLabel'],
            type: 'number',
            min: 0
        },
        inputPrefix: PhoneOutlined,
    },
    {
        key: 'button-submit',
        type: ETypeFormItem.BUTTON,
        props: {
            className: 'form-clients__item-submit',
        },
        propsInput: {
            'aria-label': formLocals['button'],
            className: 'custom-btn__green',
            htmlType: "submit"
        },
        textTypegraphy: formLocals['button']
    }
]