import { UserDetailsPersonalForm } from "./userDetailsPersonalForm.component";


export const UserDetails = () => {
    return (
        <div className='portal-usuarios__details ani-cont'>
            <UserDetailsPersonalForm userDetail={{
                job: '',
                lastname: '',
                name: '',
                type: 0
            }}/>
        </div>
    )
}

export default UserDetails;