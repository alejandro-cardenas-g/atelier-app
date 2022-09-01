import { EClientsContent } from "../../../locales/portal/portalClients.locals"
import { EUsersContent } from "../../../locales/portal/portalUsers.locals"
import { ICommonProps, JSXComponent } from "../../common/common.interface"

export interface IClientsContent{
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent>
    action: EClientsContent,
    props: ICommonProps
}

export interface IRegisterForm{
    name: string,
    lastname: string,
    email: string,
    password: string,
    phone: string | null,
    company: string | null
}