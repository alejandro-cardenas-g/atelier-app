import { ReactElement } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLogged } from '../../redux/selectors/auth.selector';
import { ROUTES } from "../../router/routes.enum";

export const AuthNavigation = ({children, isPrivate}:IProps) => {

    const isLogged = useSelector(getIsLogged);
    if(isLogged && isPrivate){ 
        return (
            <>
                {children}
            </>
        )
    }else if(!isLogged && isPrivate){
        return <Navigate to={ROUTES.AUTH_LOGIN}/>
    }else{
        return <>
            {children}
        </>
    }

}

interface IProps{
    children: ReactElement | ReactElement[];
    isPrivate: boolean;
}
