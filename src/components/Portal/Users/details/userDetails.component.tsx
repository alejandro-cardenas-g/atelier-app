import { Divider } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetUserDetail } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { getUserDetails } from "../../../../redux/selectors/users.selector";
import { Spinner } from "../../../Common/Spinner.component";
import { UserDetailsContactForm } from "./userDetailsContactForm.component";
import { UserDetailsSecurityForm } from "./userDetailSecurityForm.component";
import { UserDetailsPersonalForm } from "./userDetailsPersonalForm.component";
import { UserDetailsUploadForm } from "./userDetailsUploadForm.component";

export const UserDetails = () => {

    const {slug} = useParams();
    const {userDetail, active} = useSelector(getUserDetails);
    const isSuperUser = useSelector(getIsSuperUser);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [userDetail])

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
            <Divider style={{display: `${!isSuperUser ? 'none' : 'block'}`}}/>
            <UserDetailsUploadForm userDetail={userDetail!}/>
        </div>
    )
}

export default UserDetails;