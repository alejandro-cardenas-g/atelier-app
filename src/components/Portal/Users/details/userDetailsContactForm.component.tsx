import { Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EUserDetailSection, IUserDetail } from "../../../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { userDetailContactFormLayout } from "../../../../layouts/portal/users/userDetailContactForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getUserDetailsSection } from "../../../../redux/selectors/users.selector";
import { CustomForm } from "../../../Common/CustomForm.component";

export const UserDetailsContactForm = ({userDetail}: IProps) => {
    
    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);

    const initialValues: IInitialValues = {
        email: userDetail.email || '',
        address: userDetail.address || '',
        phone: userDetail.phone || ''
    }

    //BUILDING NEW LAYOUT
    const newLayout = userDetailContactFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.INPUT){
            if(item.inputPrefix){
                item.propsInput = {
                ...item.propsInput!,
                prefix: <item.inputPrefix/> 
                }
            }
        }
        if(item.type === ETypeFormItem.SAVE_BUTTON){
            item.propsInput = {
                ...item.propsInput,
                visible: hasChanged,
                loading: isLoading && EUserDetailSection.CONTACT === detailSection
            }
        }
        return item;
    })

    const handleSubmit = () => {
        setHasChanged(false);
        setUserDetailSection(null);
    }

    const handleChange = () => {
        setHasChanged(true);
        setUserDetailSection(EUserDetailSection.CONTACT); 
    } 

    return (
        <div className='user-details-contact'>

            <CustomForm
                className="form-details"
                form={form}
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                LAYOUT={newLayout}
                onFieldsChange={handleChange}
            />

        </div>
    )
}

interface IProps{
    userDetail: IUserDetail;
}

interface IInitialValues{
    email: string;
    phone: string;
    address: string;
}