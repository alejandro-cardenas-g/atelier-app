import { Divider } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../../../redux/selectors/users.selector";
import { Spinner } from "../../../Common/Spinner.component";
import { UserDetailsContactForm } from "./userDetailsContactForm.component";
import { UserDetailsSecurityForm } from "./userDetailSecurityForm.component";
import { UserDetailsPersonalForm } from "./userDetailsPersonalForm.component";
import { UserDetailsUploadForm } from "./userDetailsUploadForm.component";

export const UserDetails = () => {

    window.scrollTo({top: 0, behavior: 'smooth'});
    const details = useSelector(getUserDetails);
    const navigate = useNavigate();
    useEffect(() => {
        if(details === null){
            navigate('/usuarios');
        }
    }, [details])
    

    if(details === null) return <Spinner/>;
    return (
        <div className='portal-usuarios__details ani-cont'>
            <UserDetailsPersonalForm userDetail={details!}/>
            <Divider/>
            <UserDetailsContactForm userDetail={details!}/>
            <Divider/>
            <UserDetailsSecurityForm userDetail={details!}/>
            <Divider/>
            <UserDetailsUploadForm userDetail={details!}/>
        </div>
    )
}

export default UserDetails;