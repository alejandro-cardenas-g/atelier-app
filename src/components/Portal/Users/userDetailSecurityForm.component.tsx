import { Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EUserDetailSection, IUserDetail } from "../../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { userDetailSecurityFormLayout } from "../../../layouts/portal/users/userDetailSecurityForm.layout";
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals";
import { setUserDetailSection } from "../../../redux/dispatchers/portal/users.dispatch";
import { getUserDetailsSection } from "../../../redux/selectors/users.selector";
import { generateRandomString } from "../../../utils/stringTools/generateRandomString.util";
import { CustomForm } from "../../Common/CustomForm.component";
import { ComponentForPassword, PasswordVisibleComponent } from "./userRegisterFormSubComponent.component";

export const UserDetailsSecurityForm = ({userDetail}: IProps) => {
    
    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [typePassword, SetTypePassword] = useState<'password' | 'text'>('password');

    //HANDLEGENERATEPASSWORD
    const handleGeneratePassword = () => {
        form.setFieldsValue({
            ...form.getFieldsValue(),
            password: generateRandomString()
        })
    }

    const initialValues: IInitialValues = {
        password: ''
    }

    //BUILDING NEW LAYOUT
    const newLayout = userDetailSecurityFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.DIVPASSWORD){
            item.Cop = ComponentForPassword(handleGeneratePassword);
            item.propsInput = {
                ...item.propsInput,
                addonAfter: PasswordVisibleComponent(showPassword, setShowPassword, SetTypePassword),
                type: typePassword
            }
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
        <div className='user-details-security'>

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
    password: string;
}