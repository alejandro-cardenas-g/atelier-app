import { useState } from "react"
import { FormInstance } from "antd"
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface"
import { generateRandomString } from "../../../../utils/stringTools/generateRandomString.util"
import { CustomForm } from "../../../Common/CustomForm.component"
import { userRegistryFormLayout } from "../../../../layouts/portal/users/usersRegistryForm.layout"
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals"
import { IRegisterForm } from "../../../../interfaces/portal/users/contentUsers.interface";
import { ComponentForPassword, PasswordVisibleComponent, UploadBody } from "../utils/usersFormUtils.component";
import { useSelector } from 'react-redux'
import { getUserTypes } from "../../../../redux/selectors/common.selector";

export const UserRegisterForm = ({
    form,
    handleSubmit
}: IProps) => {

    const types = useSelector(getUserTypes);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [typePassword, SetTypePassword] = useState<'password' | 'text'>('password');
  
    const [file, setFile] = useState<UploadFile | null>(null)

    //HANDLEGENERATEPASSWORD
    const handleGeneratePassword = () => {
        form.setFieldsValue({
            ...form.getFieldsValue(),
            password: generateRandomString()
        })
    }

    //BUILDING NEW LAYOUT
    const newLayout = userRegistryFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.INPUT || item.type ===  ETypeFormItem.DIVPASSWORD){
            if(item.inputPrefix){
                item.propsInput = {
                ...item.propsInput!,
                prefix: <item.inputPrefix/> 
                }
            }
        }
        if(item.key === 'divpassword'){
            item.Cop = ComponentForPassword(handleGeneratePassword);
            item.propsInput = {
                ...item.propsInput,
                addonAfter: PasswordVisibleComponent(showPassword, setShowPassword, SetTypePassword),
                type: typePassword
            }
        }
        if(item.key === 'dragger-file'){
        item.Cop = UploadBody;
        item.propsInput = {
                ...item.propsInput,
                onChange: (e:UploadChangeParam<UploadFile<any>>) => setFile(e.fileList[0])
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

    return (
        <div className='portal-usuarios__registry ani-cont'>
            <CustomForm
                form={form}
                LAYOUT={newLayout}
                className='form-users'
                handleSubmit={(values) => handleSubmit(values, file)}
                initialValues={{
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    job: '',
                    type: null,
                    address: '',
                    phone: ''
                }}
            />
        </div>
    )
}

interface IProps{
    form: FormInstance;
    handleSubmit: (values: IRegisterForm, file: UploadFile | null) => void;
    initialValues: IRegisterForm
}