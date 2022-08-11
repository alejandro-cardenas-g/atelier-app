import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom'

import { TYPE_SESSION, AUTHLOCALS } from "../../../locales/auth/auth.locals";
import { identifyTypeSession } from "../../../utils/auth/identifyTypeSession.util";
import { PATHNAMES } from '../../../routers/routes.enum';
import { ILoginForm } from "../../../interfaces/auth/authLogin.interface";
import { LoginForm } from "./";
import { Row, Typography } from "antd";
import { dispatchLogin, dispatchUserSession } from "../../../redux/dispatchers/auth/auth.dispatch";

export const LoginContent = () => {

    const { pathname } = useLocation();

    const typeSession: TYPE_SESSION = identifyTypeSession(pathname);

    const [routePortal, setRoutePortal] = useState<PATHNAMES>(PATHNAMES.AUTH_LOGIN);
    const [routePortalText, setRoutePortalText] = useState<string>('');
    const [enterAs, setEnterAs] = useState<string>('');

    useEffect(() => {
        if(typeSession === TYPE_SESSION.ADMIN){
            setRoutePortal(PATHNAMES.AUTH_CLIENTE_LOGIN);
            setRoutePortalText(AUTHLOCALS['portalLink']['admin']['link']);
            setEnterAs(AUTHLOCALS['portalLink']['admin']['role']);
        }
        else{
            setRoutePortal(PATHNAMES.AUTH_LOGIN);
            setRoutePortalText(AUTHLOCALS['portalLink']['client']['link']);
            setEnterAs(AUTHLOCALS['portalLink']['client']['role']);
        }
        dispatchUserSession(typeSession);
    }, [typeSession, dispatchUserSession]);

    const handleSubmit = ({email, password, remember}: ILoginForm) => {
        dispatchLogin({email, password});
    }

    return (
    <>

        <Row className='auth__link' align="middle" justify="center" gutter={[15,10]} style={{
            marginLeft: '0px',
            marginRight: '0px'
        }}>
            <Typography.Text className='auth__link--info'>Ingresando como: {enterAs}</Typography.Text>
            <Link to={routePortal}>{routePortalText}</Link>
        </Row>

        <LoginForm handleSubmit={handleSubmit}/>
        
    </>

    )
}

export default LoginContent;