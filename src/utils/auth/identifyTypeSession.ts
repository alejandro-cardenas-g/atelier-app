import { PATHNAMES } from '../../routers/routes.enum';
import { TYPE_SESSION } from '../../locales/auth/auth.locales';

export const identifyTypeSession = (pathname: string): number => {

    if(pathname === PATHNAMES.AUTH_LOGIN) return TYPE_SESSION.ADMIN

    return TYPE_SESSION.CLIENT

}