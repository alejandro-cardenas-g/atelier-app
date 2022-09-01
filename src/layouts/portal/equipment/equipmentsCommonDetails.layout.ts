import { BarcodeOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";

const formLocals = PORTAL_LOCALS['equipments']['registry']['form'];

export const equipmentsCommonDetailsFormLayout:IFormLayout[] = [
    {
        key: 'label-equipo',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Nombre del equipo',
        props: {
            level: 5,
            className: 'form-common__item-name-label',
        },
    },
    {
        key: 'input-name',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-common__item-name',
            name:"name",
            rules:[{ required: true, message: formLocals['name']['validators']['required'] }],
        },
        propsInput: {
            placeholder: 'Nombre del equipo*',
            'aria-label': 'Nombre del equipo'
        },
        inputPrefix: DeploymentUnitOutlined
    },
    {
        key: 'labe-serie',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Número de serie',
        props: {
            level: 5,
            className: 'form-common__item-serial-label',
        },
    },
    {
        key: 'input-serial',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-common__item-serial',
            name:"serial",
            rules:[{ required: true, message: formLocals['serial']['validators']['required'] }],
        },
        propsInput: {
            placeholder: `${formLocals['serial']['placeholder']}`,
            'aria-label': formLocals['serial']['ariaLabel']
        },
        inputPrefix: BarcodeOutlined
    },
    {
        key: 'label-fixed',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Número activo fijo',
        props: {
            level: 5,
            className: 'form-common__item-fixednumber-label',
        },
    },
    {
        key: 'input-activeFixedNumber',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-common__item-fixednumber',
            name:"activeFixedNumber",
            rules:[{ required: true, message: formLocals['activeFixedNumber']['validators']['required'] }],
        },
        propsInput: {
            placeholder: `${formLocals['activeFixedNumber']['placeholder']}`,
            'aria-label': formLocals['activeFixedNumber']['ariaLabel']
        },
        inputPrefix: BarcodeOutlined
    },
    {
        key: 'label-description',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: 'Descripción',
        props: {
            level: 5,
            className: 'form-common__item-description-label',
        },
    },
    {
        key: 'input-description',
        type: ETypeFormItem.DESCRIPTION,
        props: {
            className: 'form-common__item-description',
            name:"description",
            rules:[{ required: true, message: 'La descripción es obligatoria' }],
        },
        propsInput: {
            placeholder: `${formLocals['description']['placeholder']}`,
            'aria-label': formLocals['description']['ariaLabel']
        }
    },
    {
        key: 'actual-image',
        type: ETypeFormItem.CUSTOM,
        props: {
            className: 'form-common__item-image',
        }
    },
    {
        key: 'dragger-photo',
        type: ETypeFormItem.UPLOAD,
        props: {
            className: 'form-common__item-photo',
        },
        propsInput: {
            multiple: false,
            maxCount: 1,
            beforeUpload: () => {return false},
            defaultFileList: [],
            name:"photo",
        },
        needsDragger: true
    },
    {
        key: 'button-save-basic',
        type: ETypeFormItem.SAVE_BUTTON,
        props: {
            className: 'form-common__item-saveButton',
        },
        propsInput: {
            'aria-label': formLocals['save'],
            htmlType: "submit",
            text: formLocals['save']
        }
    }
]