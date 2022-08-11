import { authReducer } from "./slices/auth/auth.slice"
import { commonReducer } from "./slices/common/common.slice"
import { clientsReducer } from "./slices/portal/clients.slice"
import { usersReducer } from "./slices/portal/users.slice"

export const rootReducer = {
    auth: authReducer,
    users: usersReducer,
    clients: clientsReducer,
    common: commonReducer
}