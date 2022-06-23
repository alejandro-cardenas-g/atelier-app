import { ROUTES } from '../../router/routes.enum';
import { TYPE_SESSION } from '../../locales/auth/auth.locales';

export const identifyTypeSession = (pathname: string): number => {

    if(pathname === ROUTES.AUTH_LOGIN) return TYPE_SESSION.ADMIN

    return TYPE_SESSION.CLIENT

}