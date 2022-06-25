import { authRoutes } from "./auth.routes";
import { IRoutes } from "./interfaces";
import { portalRoutes } from "./portal.routes";

export const routes:IRoutes[] = [
    ...authRoutes,
    ...portalRoutes
]