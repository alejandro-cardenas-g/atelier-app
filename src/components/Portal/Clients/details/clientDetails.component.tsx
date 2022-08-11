import { Divider } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetClientDetail } from "../../../../redux/dispatchers/portal/clients.dispatch";
import { getClientDetails } from "../../../../redux/selectors/clients.selector";
import { Spinner } from "../../../Common/Spinner.component";
import { ClientDetailsSecurityForm } from "./clientDetailSecurityForm.component";
import { ClientDetailsPersonalForm } from "./clientDetailsPersonalForm.component";

export const ClientDetails = () => {

    const {slug} = useParams();
    const {clientDetail, active} = useSelector(getClientDetails);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [clientDetail])

    useEffect(() => {
        if(!active && !slug) navigate('/usuarios');
        if(active){
            dispatchGetClientDetail(active);
            return;
        }
        if(slug){
            dispatchGetClientDetail(slug);
            return;
        }
    }, [])
    

    if(clientDetail === null) return <Spinner/>;
    return (
        <div className='portal-clients__details ani-cont'>
            <ClientDetailsPersonalForm clientDetail={clientDetail!}/>
            <Divider/>
            <ClientDetailsSecurityForm clientDetail={clientDetail!}/>
        </div>
    )
}

export default ClientDetails;