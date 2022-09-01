import { useState } from "react";
import { Form, message } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { CloudDownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import { userDetailUploadFormLayout } from "../../../../layouts/portal/users/userDetailUploadForm.layout";
import { CustomForm } from "../../../Common/CustomForm.component"
import { UploadBody } from "../utils/usersFormUtils.component";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { useSelector } from "react-redux";
import { getUserDetailsSection } from "../../../../redux/selectors/users.selector";
import { dispatchRemoveFile, dispatchUploadDocument, setUserDetailSection } from "../../../../redux/dispatchers/portal/users.dispatch";
import { EUserDetailSection, IUserDetail } from "../../../../interfaces/redux/usuarios/reduxUsers.interface";
import { converToBase64 } from "../../../../utils/files/convertToBase64.util";
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector";
import { privateApi } from "../../../../api/config";
import { PORTAL_ENDPOINTS } from "../../../../api/endpoint";
import { IGetDocumentFile } from "../../../../interfaces/responses/portal/usersResponse.interface";
import { reduxRejectedHandler } from "../../../../utils/redux/reduxRejected.util";
import { dispatchForbidden } from "../../../../redux/dispatchers/auth/auth.dispatch";
import { verifyDocumentTypeAndSizeAction } from "../../../../utils/files/verifyMimeType.util";

export const UserDetailsUploadForm = ({userDetail}: IProps) => {

    const { 
        detailSection,
        isLoading
    } = useSelector(getUserDetailsSection);
    const isSuperUser = useSelector(getIsSuperUser);

    const [file, setFile] = useState<UploadFile | null>(null)
    const [ hasChanged, setHasChanged ] = useState<boolean>(false);
    const [form] = Form.useForm();

    const handleChange = (e:UploadChangeParam<UploadFile<any>>) => {
        const result = verifyDocumentTypeAndSizeAction(e)
        setFile(result);
        if(result){
            setHasChanged(true);
            setUserDetailSection(EUserDetailSection.UPLOAD); 
        }
    }

    const handleDownloadFile = async() => {
        try{
            const response = await privateApi<IGetDocumentFile>({
                url: `${PORTAL_ENDPOINTS.getPublicUrlUserDocument}/${userDetail.id}`
            });
            const {publicUrl} = response.data;
            if(publicUrl) window.open(publicUrl);
        }catch(e){
            const result = reduxRejectedHandler(e);
            if(result.code === 401) dispatchForbidden();
            message.error(result.message);
        }
    }
    const handleDeleteFile = async() => {
        try{
            const response = await privateApi<IGetDocumentFile>({
                url: `${PORTAL_ENDPOINTS.getPublicUrlUserDocument}/${userDetail.id}`,
                method: 'DELETE'
            });
            if(response.status === 200){
                message.success('El usuario ha sido actualizado');
                dispatchRemoveFile();
                setFile(null);
            }
        }catch(e){
            const result = reduxRejectedHandler(e);
            if(result.code === 401) dispatchForbidden();
            message.error(result.message);
        }
    }

    //BUILDING NEW LAYOUT
    const newLayout = userDetailUploadFormLayout.map( (item) => {

        if(item.type === ETypeFormItem.UPLOAD){
        item.Cop = UploadBody;
        item.propsInput = {
                ...item.propsInput,
                fileList: (file) ? [file] : [],
                onChange: (e:UploadChangeParam<UploadFile<any>>) => {
                    handleChange(e)
                },
                style: {
                    display: `${isSuperUser ? 'block' :  'none'}`
                }
            }
        }
        if(item.type === ETypeFormItem.SAVE_BUTTON){
            item.propsInput = {
                ...item.propsInput,
                visible: hasChanged && file,
                loading: isLoading && EUserDetailSection.UPLOAD === detailSection
            }
        }
        if(item.key === 'actual-file'){
            item.textTypegraphy = `Documento actual: ${userDetail.filename}`
            item.props = {
                ...item.props,
                style: {
                    display: userDetail.filename ? 'flex' : 'none',
                    cursor: 'pointer'
                }
            }
        }
        if(item.key === 'actual-file-actions'){
            item.Cop = () => <div className='form-details__item-actualfile-actions' style={{display: userDetail.filename ? 'flex' : 'none'}}>
                    <CloudDownloadOutlined className='icon-download' onClick={handleDownloadFile}/>
                    <DeleteOutlined className='icon-delete' onClick={handleDeleteFile}/>
                </div>
        }
        return item;
    });

    const handleSubmit = async() => {
        if(!isSuperUser) return;
        const data:{[key:string]: any} = {};
        console.log(file)
        setHasChanged(false);
        setUserDetailSection(null);
        if(file){
            const base64File = await converToBase64(file?.originFileObj as RcFile);
            data.file = {
              buffer: base64File.split(';base64,')[1],
              size: file.size,
              type: file.type,
              name: file.name
            };
        }
        dispatchUploadDocument({id: userDetail.id, data}).then(result => {
            if(result.meta.requestStatus === 'fulfilled'){
                setFile(null);
            }
        });
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
