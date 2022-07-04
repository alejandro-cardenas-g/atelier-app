import { EUsuariosContent } from "../../../locales/portal/portalUsuario.locales"
import { ICommonProps, JSXComponent } from "../../common/common.interface"

export interface IUsuarioContent{
    Component: JSXComponent
    action: EUsuariosContent,
    props: ICommonProps
}