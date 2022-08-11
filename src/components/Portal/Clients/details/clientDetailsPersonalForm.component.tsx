import { Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EClientDetailSection, IClientDetail } from "../../../../interfaces/redux/clients/reduxClient.interface";
import { EUserDetailSection } from "../../../../interfaces/redux/usuarios/reduxUsers.interface";
import { clientDetailPersonalFormLayout } from "../../../../layouts/portal/clients/clientDetailPersonalForm.layout";
import { userDetailPersonalFormLayout } from "../../../../layouts/portal/users/userDetailPersonalForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { dispatchPatchSimpleUserDetail, setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { getClientDetailsSection } from "../../../../redux/selectors/clients.selector";
import { CustomForm } from "../../../Common/CustomForm.component";

export const ClientDetailsPersonalForm = ({clientDetail}: IProps) => {
    
    const { 
        detailSection,
        isLoading
    } = useSelector(getClientDetailsSection);
    const isSuperUser = useSelector(getIsSuperUser);

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);

    const initialValues: IInitialValues = {
        name: clientDetail.name || '',
        lastname: clientDetail.lastname || '',
        email: clientDetail.email || '',
        phone: clientDetail.phone || ''
    }

    //BUILDING NEW LAYOUT
    const newLayout = clientDetailPersonalFormLayout.map( (item) => {
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
                loading: isLoading && EClientDetailSection.BASIC === detailSection
            }
        }
        return item;
    })

    const handleSubmit = () => {
        if(!isSuperUser) return;
        dispatchPatchSimpleUserDetail({id: clientDetail.id, data: {
            ...form.getFieldsValue()
        }})
        setHasChanged(false);
        setUserDetailSection(null);
    }

    const handleChange = () => {
        setHasChanged(true);
        setUserDetailSection(EUserDetailSection.BASIC); 
    } 

    return (
        <div className='client-details-basic'>

            <CustomForm
                className="form-details"
                form={form}
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                LAYOUT={newLayout}
                onFieldsChange={handleChange}
                disabled={!isSuperUser}
            />

        </div>
    )
}

interface IProps{
    clientDetail: IClientDetail;
}

interface IInitialValues{
    name: string;
    lastname: string;
    email: string;
    phone: string;
}