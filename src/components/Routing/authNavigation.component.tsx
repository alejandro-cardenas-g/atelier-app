import { ReactElement } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLogged } from '../../redux/selectors/auth.selector';
import { PATHNAMES } from "../../routers/routes.enum";

export const AuthNavigation = ({children, isPrivate}:IProps) => {

    const isLogged = useSelector(getIsLogged);

    if(isPrivate){
        if(isLogged){ 
            return (
                <>
                    {children}
                </>
            )
        }else{
            return <Navigate to={PATHNAMES.AUTH_LOGIN}/>
        }
    }else{
        if(isLogged){
            return <Navigate to={PATHNAMES.PORTAL}/>
        }else{
            return <>
                {children}
            </>
        }
    }

}

interface IProps{
    children: ReactElement | ReactElement[];
    isPrivate: boolean;
}
