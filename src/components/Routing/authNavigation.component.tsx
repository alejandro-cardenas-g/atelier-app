import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux"
import { dispatchRefreshToken } from "../../redux/dispatchers/auth/auth.dispatch";
import { getAuthVerify} from '../../redux/selectors/auth.selector';
import { Spinner } from "../Common/Spinner.component";
import { WaitingRedirect } from "./waitingRedirect.component";

export const AuthNavigation = ({children, isPrivate}:IProps) => {

    useEffect(() => {
        dispatchRefreshToken();
    }, [dispatchRefreshToken])

    const {isLogged, loading, checked} = useSelector(getAuthVerify);

    if(loading) return <Spinner/>;

    if(isPrivate){
        if(isLogged){
            if(checked === false) return <WaitingRedirect to='/auth/login'/>
            return (
                <>
                    {children}
                </>
            )
        }else{
            if(!localStorage.getItem('token')) return <WaitingRedirect to='/auth/login'/>
            return <Spinner/>;
        }
    }else{
        if(isLogged){
            if(checked === true) return <WaitingRedirect to='/'/>
            return <Spinner/>;
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
