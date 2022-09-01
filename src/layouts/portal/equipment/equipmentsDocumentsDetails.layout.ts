import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { IFormLayout } from "../../../interfaces/layouts/formLayout.interface";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";

const formLocals = PORTAL_LOCALS['equipments']['registry']['form'];

export const equipmentsDocumentsDetailsLayout:IFormLayout[] = [
    {
        key: 'separator-documents',
        type: ETypeFormItem.TYPOGRAPHY_TITLE,
        textTypegraphy: formLocals['infoDocumentos'],
        props: {
            level: 4,
            className: 'separator-equipments__documents',
        },
    }
]