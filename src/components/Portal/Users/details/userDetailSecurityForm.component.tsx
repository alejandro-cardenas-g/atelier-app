import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EUserDetailSection, IUserDetail } from "../../../../interfaces/redux/usuarios/reduxUsuarios.interface";
import { userDetailSecurityFormLayout } from "../../../../layouts/portal/users/userDetailSecurityForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { dispatchPatchSimpleUserDetail, setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getUserDetailsSection } from "../../../../redux/selectors/users.selector";
import { generateRandomString } from "../../../../utils/stringTools/generateRandomString.util";
import { CustomForm } from "../../../Common/CustomForm.component";
import { ComponentForPassword, UserInfoConfirmation } from "../utils/usersFormUtils.component";

export const UserDetailsSecurityForm = ({userDetail}: IProps) => {

    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [password, setPassword] = useState<string | null>(null);

    //HANDLEGENERATEPASSWORD
    const handleGeneratePassword = () => {
        form.setFieldsValue({
            ...form.getFieldsValue(),
            password: generateRandomString()
        });
        setHasChanged(true);
    }

    const initialValues: IInitialValues = {
        password: ''
    }

    //BUILDING NEW LAYOUT
    const newLayout = userDetailSecurityFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.DIVPASSWORD){
            item.Cop = ComponentForPassword({handleGeneratePassword});
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
                loading: isLoading && EUserDetailSection.PRIVACY === detailSection
            }
        }
        return item;
    })

    const handleSubmit = () => {
        dispatchPatchSimpleUserDetail({id: 1, data: {
            password: form.getFieldValue('password')
        }}).then(result => {
            if(result.meta.requestStatus === "fulfilled"){
                setPassword(form.getFieldValue('password'));
                setShowModal(true);
                setHasChanged(false);
                setUserDetailSection(null);
            }
        });
    }

    const handleChange = () => {
        setHasChanged(true);
        setUserDetailSection(EUserDetailSection.PRIVACY); 
    }

    const handleReset = () => {
        setShowModal(false);
        form.resetFields();
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
            <Modal 
                confirmLoading={isLoading && EUserDetailSection.PRIVACY === detailSection}
                visible={showModal}
                closable={false}
                destroyOnClose
                maskClosable={false}
                className='portal-usuarios__registry-modal'
                footer={null}
                children={
                <UserInfoConfirmation 
                    password={password}
                    email={userDetail.email}
                    name={`${userDetail.name} ${userDetail.lastname}`}
                    onClose={handleReset}
                />
                }
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