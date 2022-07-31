import { Divider } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetUserDetail } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getUserDetails } from "../../../../redux/selectors/users.selector";
import { Spinner } from "../../../Common/Spinner.component";
import { UserDetailsContactForm } from "./userDetailsContactForm.component";
import { UserDetailsSecurityForm } from "./userDetailSecurityForm.component";
import { UserDetailsPersonalForm } from "./userDetailsPersonalForm.component";
import { UserDetailsUploadForm } from "./userDetailsUploadForm.component";

export const UserDetails = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    const {slug} = useParams();
    const {userDetail, active} = useSelector(getUserDetails);
    const navigate = useNavigate();

    useEffect(() => {
        if(!active && !slug) navigate('/usuarios');
        if(active){
            dispatchGetUserDetail(active);
            return;
        }
        if(slug){
            dispatchGetUserDetail(slug);
            return;
        }
    }, [])
    

    if(userDetail === null) return <Spinner/>;
    return (
        <div className='portal-usuarios__details ani-cont'>
            <UserDetailsPersonalForm userDetail={userDetail!}/>
            <Divider/>
            <UserDetailsContactForm userDetail={userDetail!}/>
            <Divider/>
            <UserDetailsSecurityForm userDetail={userDetail!}/>
            <Divider/>
            <UserDetailsUploadForm userDetail={userDetail!}/>
        </div>
    )
}

export default UserDetails;