import { LockOutlined } from "@ant-design/icons";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { validatePassword } from "../../../utils/portal/users/userRegistryForm.validator.util";

const formLocals = PORTAL_LOCALS['users']['registry']['form'];
const detailsLocals = PORTAL_LOCALS['users']['details'];

export const clientDetailSecurityFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: detailsLocals['security']['description'],
        props: {
            level: 4,
            className: 'separator-clients__security',
        },
    },
    {
        key: 'divpassword',
        type: ETypeFormItem.DIVPASSWORD,
        propsDiv:{
            className: 'form-details__item-password'
        },
        props: {
            className: 'form-details-password--item',
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