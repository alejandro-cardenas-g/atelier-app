import { Navigate } from 'react-router-dom';
import { Spinner } from '../Common/Spinner.component';

export const WaitingRedirect = ({to}:IProps) => {

    return <>
        <Spinner/>
        <Navigate to={to}/>
    </>


}

interface IProps{ 
    to: string;
}
