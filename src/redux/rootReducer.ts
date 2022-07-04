import { authReducer } from "./slices/auth/auth.slice"
import { usuariosReducer } from "./slices/portal/usuarios.slice"

export const rootReducer = {
    auth: authReducer,
    users: usuariosReducer
}