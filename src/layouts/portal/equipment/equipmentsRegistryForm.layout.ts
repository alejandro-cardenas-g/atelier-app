import { BarcodeOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { MultipleFilesManager } from "../../../components/Portal/Equipments/utils/multipleFilesEquipment/multipleFilesManager.component";

const formLocals = PORTAL_LOCALS['equipments']['registry']['form'];

export const equipmentsRegistryFormLayout:IFormLayout[] = [
    {
        key: 'separator-required',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: formLocals['infoRequired'],
        props: {
            level: 4,
            className: 'separator-equipments__required',
        },
    },
    {
        key: 'input-name',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-equipments__item-name',
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
        key: 'input-serial',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-equipments__item-serial',
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
        key: 'input-activeFixedNumber',
        type: ETypeFormItem.INPUT,
        props: {
            className: 'form-equipments__item-fixednumber',
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
        key: 'input-description',
        type: ETypeFormItem.DESCRIPTION,
        props: {
            className: 'form-equipments__item-description',
            name:"description",
            rules:[{ required: true, message: 'La descripción es obligatoria' }],
        },
        propsInput: {
            placeholder: `${formLocals['description']['placeholder']}`,
            'aria-label': formLocals['description']['ariaLabel']
        }
    },
    {
        key: 'dragger-photo',
        type: ETypeFormItem.UPLOAD,
        props: {
            className: 'form-equipments__item-photo',
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
        key: 'separator-documents',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: formLocals['infoDocumentos'],
        props: {
            level: 4,
            className: 'separator-equipments__documents',
        },
    },
    {
        key: 'multiple-files',
        type: ETypeFormItem.CUSTOM,
        props: {
            className: 'form-equipments__item-multiple-files'
        },
        Cop: MultipleFilesManager
    },
    {
        key: 'button-save-basic',
        type: ETypeFormItem.SAVE_BUTTON,
        props: {
            className: 'form-equipments__item-saveButton'
        },
        propsInput: {
            'aria-label': formLocals['save'],
            htmlType: "submit",
            text: formLocals['save']
        }
    }
]