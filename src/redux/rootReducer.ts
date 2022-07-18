import { authReducer } from "./slices/auth/auth.slice"
import { commonReducer } from "./slices/common/common.slice"
import { usuariosReducer } from "./slices/portal/usuarios.slice"

export const rootReducer = {
    auth: authReducer,
    users: usuariosReducer,
    common: commonReducer
}