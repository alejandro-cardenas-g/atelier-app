import { CloudDownloadOutlined } from "@ant-design/icons";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";

const detailsLocals = PORTAL_LOCALS['users']['details'];

export const userDetailUploadFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: detailsLocals['contact']['description'],
        props: {
            level: 4,
            className: 'separator-users__upload',
        },
    },
    {
        key: 'actual-file',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        props: {
            level: 5,
            className: 'form-details__item-actualfile',
        }
    },
    {
        key: 'dragger-file',
        type: ETypeFormItem.UPLOAD,
        props: {
            className: 'form-details__item-file'
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