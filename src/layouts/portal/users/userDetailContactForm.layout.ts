import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { validateEmail } from "../../../utils/portal/users/userRegistryForm.validator.util";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];
const detailsLocals = PORTAL_LOCALS['users']['details'];

export const userDetailContactFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: detailsLocals['contact']['description'],
        props: {
            level: 4,
            className: 'separator-users__contact',
        },
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
    {
        key: 'input-address',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-details__item-address',
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
            className: 'form-details__item-phone',
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