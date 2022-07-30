import { EUsersContent } from "../../../locales/portal/portalUsers.locals"
import { ICommonProps, JSXComponent } from "../../common/common.interface"

export interface IUsersContent{
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent>
    action: EUsersContent,
    props: ICommonProps
}

export interface IRegisterForm{
    name: string,
    lastname: string,
    email: string,
    password: string,
    job: string,
    type: number | null,
    address: string | null,
    phone: string | null
}