import { FormInstance } from "antd"
import { generateRandomString } from "../../../../utils/stringTools/generateRandomString.util"
import { CustomForm } from "../../../Common/CustomForm.component"
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals"
import { useSelector } from 'react-redux'
import { getInstitutions, getUserTypes } from "../../../../redux/selectors/common.selector";
import { ComponentForPassword } from "../../Users/utils/usersFormUtils.component"
import { IRegisterForm } from "../../../../interfaces/portal/clients/contentUsers.interface"
import { clientsRegistryFormLayout } from "../../../../layouts/portal/clients/clientsRegistryForm.layout"

export const ClientRegisterForm = ({
    form,
    handleSubmit,
    canReset,
    initialValues
}: IProps) => {

    const types = useSelector(getUserTypes);
    const institutions = useSelector(getInstitutions).map(item => ({
        children: item.name,
        label: item.name,
        value: item.id
    }));

    //HANDLEGENERATEPASSWORD
    const handleGeneratePassword = () => {
        form.setFieldsValue({
            ...form.getFieldsValue(),
            password: generateRandomString()
        })
    }

    //BUILDING NEW LAYOUT
    const newLayout = clientsRegistryFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.INPUT || item.type ===  ETypeFormItem.DIVPASSWORD){
            if(item.inputPrefix){
                item.propsInput = {
                ...item.propsInput!,
                prefix: <item.inputPrefix/> 
                }
            }
        }
        if(item.key === 'divpassword'){
            item.Cop = ComponentForPassword({handleGeneratePassword});
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
        if(item.type === ETypeFormItem.SELECT){
            item.propsInput = {
                ...item.propsInput,
                options: institutions,
            }
        }
        return item;
    })

    return (
        <div className='portal-usuarios__registry ani-cont'>
            <CustomForm
                form={form}
                LAYOUT={newLayout}
                className='form-clients'
                handleSubmit={(values) => handleSubmit(values)}
                initialValues={initialValues}
            />
        </div>
    )
}

interface IProps{
    form: FormInstance;
    handleSubmit: (values: IRegisterForm) => void;
    initialValues: IRegisterForm;
    canReset: boolean;
}