import { Form, Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EClientDetailSection, IClientDetail } from "../../../../interfaces/redux/clients/reduxClient.interface";
import { EUserDetailSection } from "../../../../interfaces/redux/usuarios/reduxUsers.interface";
import { clientDetailSecurityFormLayout } from "../../../../layouts/portal/clients/clientDetailSecurityForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { dispatchPatchSimpleClientDetail } from "../../../../redux/dispatchers/portal/clients.dispatch";
import { setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { getClientDetailsSection } from "../../../../redux/selectors/clients.selector";
import { generateRandomString } from "../../../../utils/stringTools/generateRandomString.util";
import { CustomForm } from "../../../Common/CustomForm.component";
import { ComponentForPassword, UserInfoConfirmation } from "../../Users/utils/usersFormUtils.component";

export const ClientDetailsSecurityForm = ({clientDetail}: IProps) => {

    const { 
        detailSection,
        isLoading
    } = useSelector(getClientDetailsSection);
    const isSuperUser = useSelector(getIsSuperUser);

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
    const newLayout = clientDetailSecurityFormLayout.map( (item) => {
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
                loading: isLoading && EClientDetailSection.PRIVACY === detailSection
            }
        }
        return item;
    })

    const handleSubmit = () => {
        if(!isSuperUser) return;
        dispatchPatchSimpleClientDetail({id: clientDetail.id, data: {
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

    if(!isSuperUser) return null;

    return (
        <div className='client-details-security'>
            <CustomForm
                className="form-details"
                form={form}
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                LAYOUT={newLayout}
                onFieldsChange={handleChange}
            />
            <Modal 
                confirmLoading={isLoading && EClientDetailSection.PRIVACY === detailSection}
                visible={showModal}
                closable={false}
                destroyOnClose
                maskClosable={false}
                className='portal-usuarios__registry-modal'
                footer={null}
                children={
                <UserInfoConfirmation
                    textToShow="Detalles del cliente"
                    password={password}
                    email={clientDetail.email}
                    name={`${clientDetail.name} ${clientDetail.lastname}`}
                    onClose={handleReset}
                />
                }
            />
        </div>
    )
}

interface IProps{
    clientDetail: IClientDetail;
}

interface IInitialValues{
    password: string;
}