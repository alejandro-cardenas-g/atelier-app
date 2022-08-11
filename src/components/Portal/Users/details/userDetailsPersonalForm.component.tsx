import { Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EUserDetailSection, IUserDetail } from "../../../../interfaces/redux/usuarios/reduxUsers.interface";
import { userDetailPersonalFormLayout } from "../../../../layouts/portal/users/userDetailPersonalForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { dispatchPatchSimpleUserDetail, setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { getUserTypes } from "../../../../redux/selectors/common.selector";
import { getUserDetailsSection } from "../../../../redux/selectors/users.selector";
import { CustomForm } from "../../../Common/CustomForm.component";

export const UserDetailsPersonalForm = ({userDetail}: IProps) => {
    
    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);
    const types = useSelector(getUserTypes);
    const isSuperUser = useSelector(getIsSuperUser);

    const [form] = Form.useForm();

    const [ hasChanged, setHasChanged ] = useState<boolean>(false);

    const initialValues: IInitialValues = {
        name: userDetail.name || '',
        lastname: userDetail.lastname || '',
        type: userDetail.type || 0,
        job: userDetail.job || ''
    }

    //BUILDING NEW LAYOUT
    const newLayout = userDetailPersonalFormLayout.map( (item) => {
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
                loading: isLoading && EUserDetailSection.BASIC === detailSection
            }
        }
        if(item.key === 'select-area'){
            item.propsInput = {
                ...item.propsInput,
                options: types.map((item) => {
                    return {
                        label: item.value,
                        value: item.id,
                        children: item.value
                    }
                })
            }
        }
        return item;
    })

    const handleSubmit = () => {
        if(!isSuperUser) return;
        dispatchPatchSimpleUserDetail({id: userDetail.id, data: {
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
        <div className='user-details-basic'>

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
    userDetail: IUserDetail;
}

interface IInitialValues{
    name: string;
    lastname: string;
    job: string;
    type: number;
}