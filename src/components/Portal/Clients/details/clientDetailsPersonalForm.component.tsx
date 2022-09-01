import { Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EClientDetailSection, IClientDetail } from "../../../../interfaces/redux/clients/reduxClient.interface";
import { EUserDetailSection } from "../../../../interfaces/redux/usuarios/reduxUsers.interface";
import { clientDetailPersonalFormLayout } from "../../../../layouts/portal/clients/clientDetailPersonalForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { dispatchPatchSimpleClientDetail } from "../../../../redux/dispatchers/portal/clients.dispatch";
import { setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { getClientDetailsSection } from "../../../../redux/selectors/clients.selector";
import { getInstitutions } from "../../../../redux/selectors/common.selector";
import { CustomForm } from "../../../Common/CustomForm.component";

export const ClientDetailsPersonalForm = ({clientDetail}: IProps) => {
    
    const { 
        detailSection,
        isLoading
    } = useSelector(getClientDetailsSection);
    const isSuperUser = useSelector(getIsSuperUser);
    const institutions = useSelector(getInstitutions).map(item => ({
        children: item.name,
        label: item.name,
        value: item.id
    }));

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);

    const initialValues: IInitialValues = {
        name: clientDetail.name || '',
        lastname: clientDetail.lastname || '',
        email: clientDetail.email || '',
        phone: clientDetail.phone || '',
        company: clientDetail.company || null
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
        if(item.type === ETypeFormItem.SELECT){
            item.propsInput = {
                ...item.propsInput,
                options: institutions,
            }
        }
        return item;
    })

    const handleSubmit = () => {
        if(!isSuperUser) return;
        dispatchPatchSimpleClientDetail({
            id: clientDetail.id,
            data: {
                ...form.getFieldsValue()
            },
            step: EUserDetailSection.BASIC
        }).then(result => {
            if(result.meta.requestStatus === 'fulfilled'){
                setHasChanged(false);
                setUserDetailSection(null);
            }
        })
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
    company: number | null;
}