import { HomeOutlined, LockOutlined, MailOutlined, PhoneOutlined, ReconciliationOutlined, UserOutlined } from "@ant-design/icons";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { validateEmail, validatePassword } from '../../../utils/portal/users/userRegistryForm.validator.util';
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];

export const userRegistryFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: formLocals['infoRequired'],
        props: {
            level: 4,
            className: 'separator-users__required',
        },
    },
    {
        key: 'input-name',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-users__item-name',
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
            className: 'form-users__item-lastname',
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
            className: 'form-users__item-area',
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
            className: 'form-users__item-job',
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
        key: 'input-email',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-users__item-email',
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
    {
        key: 'divpassword',
        type: ETypeFormItem.DIVPASSWORD,
        propsDiv:{
            className: 'form-users__item-password'
        },
        props: {
            className: 'form-users__item-password--item',
            name:"password",
            rules:[
                {
                    validator: validatePassword,
                    validateTrigger: 'OnSubmit'
                }
            ],
        },
        propsInput: {
            placeholder: formLocals['password']['placeholder'],
            'aria-label': formLocals['password']['ariaLabel']
        },
        inputPrefix: LockOutlined,
        needsPassword: true,
    },
    {
        key: 'separator-additional',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Información Adicional',
        props: {
            level: 4,
            className: 'separator-users__additional',
        },
    },
    {
        key: 'input-address',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-users__item-address',
            name:"address"
        },
        propsInput: {
            placeholder: formLocals['address']['placeholder'],
            'aria-label': formLocals['address']['ariaLabel']
        },
        inputPrefix: HomeOutlined
    },
    {
        key: 'input-phone',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-users__item-phone',
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
        key: 'dragger-file',
        type: ETypeFormItem.UPLOAD,
        props: {
            className: 'form-users__item-file'
        },
        propsInput: {
            multiple: false,
            maxCount: 1,
            beforeUpload: () => {return false},
            defaultFileList: [],
            name:"file",
        },
        needsDragger: true
    },
    {
        key: 'button-submit',
        type: ETypeFormItem.BUTTON,
        props: {
            className: 'form-users__item-submit',
        },
        propsInput: {
            'aria-label': formLocals['button'],
            className: 'custom-btn__green',
            htmlType: "submit"
        },
        textTypegraphy: formLocals['button']
    }
]