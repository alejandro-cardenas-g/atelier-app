import { ReactElement } from "react";
import { ETypeFormItem } from "../../locales/portal/portalUsers.locals";
import { ICommonProps, JSXComponent } from "../common/common.interface";

export interface IFormLayout{
    key: number | string;
    type: ETypeFormItem;
    //Typography
    textTypegraphy?: string;
    //Components
    divComponentChild?: ReactElement;
    propsDiv?: ICommonProps;
    propsInput?: ICommonProps;
    inputPrefix?: React.ForwardRefExoticComponent<any>
    props?: ICommonProps;
    needsPassword?: boolean;
    needsDragger?: boolean;
    Cop?: JSXComponent
}