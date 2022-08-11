import { useEffect, useState } from "react"
import { FormInstance } from "antd"
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface"
import { generateRandomString } from "../../../../utils/stringTools/generateRandomString.util"
import { CustomForm } from "../../../Common/CustomForm.component"
import { userRegistryFormLayout } from "../../../../layouts/portal/users/usersRegistryForm.layout"
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals"
import { IRegisterForm } from "../../../../interfaces/portal/users/contentUsers.interface";
import { ComponentForPassword, UploadBody } from "../utils/usersFormUtils.component";
import { useSelector } from 'react-redux'
import { getUserTypes } from "../../../../redux/selectors/common.selector";
import { verifyDocumentTypeAndSizeAction } from "../../../../utils/files/verifyMimeType.util"

export const UserRegisterForm = ({
    form,
    handleSubmit,
    canReset,
    initialValues
}: IProps) => {

    const types = useSelector(getUserTypes);

    // const [file, setFile] = useState<UploadFile | null>(null)

    // useEffect(() => {
    //     if(canReset){
    //         setFile(null);
    //     }
    // }, [canReset])

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
            item.Cop = ComponentForPassword({handleGeneratePassword});
        }
        // if(item.key === 'dragger-file'){
        // item.Cop = UploadBody;
        // item.propsInput = {
        //         ...item.propsInput,
        //         fileList: (file) ? [file] : [],
        //         onChange: (e:UploadChangeParam<UploadFile<any>>) => {
        //             const result = verifyDocumentTypeAndSizeAction(e);
        //             setFile(result);
        //         }
        //     }
        // }
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