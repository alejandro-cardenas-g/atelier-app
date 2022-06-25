import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom'

import { TYPE_SESSION, AUTHLOCALES } from "../../../locales/auth/auth.locales";
import { identifyTypeSession } from "../../../utils/auth/identifyTypeSession";
import { PATHNAMES } from '../../../routers/routes.enum';
import { ILoginForm } from "../../../interfaces/auth/authLogin.interface";
import { LoginForm } from "./";
import { Col, Row, Typography } from "antd";

export const LoginContent = () => {

    const { pathname } = useLocation();

    const typeSession: TYPE_SESSION = identifyTypeSession(pathname);

    const [routePortal, setRoutePortal] = useState<PATHNAMES>(PATHNAMES.AUTH_LOGIN);
    const [routePortalText, setRoutePortalText] = useState<string>('');
    const [enterAs, setEnterAs] = useState<string>('');

    useEffect(() => {
        console.log(typeSession);
        if(typeSession === TYPE_SESSION.ADMIN){
            setRoutePortal(PATHNAMES.AUTH_CLIENTE_LOGIN);
            setRoutePortalText(AUTHLOCALES['portalLink']['admin']['link']);
            setEnterAs(AUTHLOCALES['portalLink']['admin']['role']);
        } 
        else{
            setRoutePortal(PATHNAMES.AUTH_LOGIN);
            setRoutePortalText(AUTHLOCALES['portalLink']['client']['link']);
            setEnterAs(AUTHLOCALES['portalLink']['client']['role']);
        } 
    }, [typeSession]);

    console.log(routePortal);

    const handleSubmit = ({email, password, remember}: ILoginForm) => {
        console.log(email, password, remember);
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