import { useState } from "react";
import { Form } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { userDetailUploadFormLayout } from "../../../../layouts/portal/users/userDetailUploadForm.layout";
import { CustomForm } from "../../../Common/CustomForm.component"
import { UploadBody } from "../utils/usersFormUtils.component";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { useSelector } from "react-redux";
import { getUserDetailsSection } from "../../../../redux/selectors/users.selector";
import { setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { EUserDetailSection, IUserDetail } from "../../../../interfaces/redux/usuarios/reduxUsuarios.interface";

export const UserDetailsUploadForm = ({userDetail}: IProps) => {

    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);

    const [file, setFile] = useState<UploadFile | null>(null)
    const [ hasChanged, setHasChanged ] = useState<boolean>(false);
    const [form] = Form.useForm();

    const handleChange = (e:UploadChangeParam<UploadFile<any>>) => {
        setFile(e.fileList[0]);
        setHasChanged(true);
        setUserDetailSection(EUserDetailSection.UPLOAD); 
    } 

    //BUILDING NEW LAYOUT
    const newLayout = userDetailUploadFormLayout.map( (item) => {

        if(item.type === ETypeFormItem.UPLOAD){
        item.Cop = UploadBody;
        item.propsInput = {
                ...item.propsInput,
                onChange: (e:UploadChangeParam<UploadFile<any>>) => handleChange(e)
            }
        }
        if(item.type === ETypeFormItem.SAVE_BUTTON){
            item.propsInput = {
                ...item.propsInput,
                visible: hasChanged,
                loading: isLoading && EUserDetailSection.UPLOAD === detailSection
            }
        }
        if(item.key === 'actual-file'){
            item.textTypegraphy = `Archivo actual: ${userDetail.filename}`
            item.props = {
                ...item.props,
                style: {
                    display: userDetail.filename ? 'block' : 'none'
                },
                editable: {
                    icon: <CloudDownloadOutlined />,
                    tooltip: 'Descargar',
                    onStart: () => console.log("aasdas"),
                    editing: false
                }
            }
        }
        return item;
    });

    const handleSubmit = () => {
        console.log(file)
        setHasChanged(false);
        setUserDetailSection(null);
    }

    return (
        <div className='user-details-upload'>

            <CustomForm
                className="form-details"
                form={form}
                initialValues={{}}
                handleSubmit={handleSubmit}
                LAYOUT={newLayout}
            />

        </div>
    )
}

interface IProps{
    userDetail: IUserDetail;
}
