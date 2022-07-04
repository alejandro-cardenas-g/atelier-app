import { RegistroUsuario } from "../../components/Portal/Usuarios/registroUsuario.component";
import { UsuariosTable } from "../../components/Portal/Usuarios/usuariosTable.component"
import { IUsuarioContent } from "../../interfaces/portal/usuarios/contentUsuarios.interface";
import { EUsuariosContent } from "../../locales/portal/portalUsuario.locales";

export const USUARIOS_CONTENT:IUsuarioContent[] = [
    {
        Component: UsuariosTable,
        action: EUsuariosContent.READ,
        props: {}
    },
    {
        Component: RegistroUsuario,
        action: EUsuariosContent.WRITE,
        props: {} 
    },
    {
        Component: RegistroUsuario,
        action: EUsuariosContent.UPDATE,
        props: {} 
    }
]