import { InboxOutlined } from "@ant-design/icons";
import { FormInstance } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { privateApi } from "../../../../api/config";
import { PORTAL_ENDPOINTS } from "../../../../api/endpoint";
import { ICommonProps, ICommonSelect, ICommonSimpleGet } from "../../../../interfaces/common/common.interface";
import { IDoc } from "../../../../interfaces/files/documentsObject.component";
import { IRegisterEquipment, IRegisterForm } from "../../../../interfaces/portal/equipments/contentEquipments.interface";
import { equipmentsRegistryFormLayout } from "../../../../layouts/portal/equipment/equipmentsRegistryForm.layout";
import { ETypeFormItem } from "../../../../locales/portal/portalUsers.locals";
import { getInstitutions } from "../../../../redux/selectors/common.selector";
import { verifyDocumentTypeImageAndSizeAction } from "../../../../utils/files/verifyMimeType.util";
import { CustomForm } from "../../../Common/CustomForm.component"

export const EquipmentRegisterForm = ({
    form,
    handleSubmit,
    initialValues,
    reset
}: IProps) => {

    const [files, setFiles] = useState<IDoc[]>([]);
    const [photo, setPhoto] = useState<UploadFile | null>(null);

    const institutions = useSelector(getInstitutions).map(item => ({
        children: item.name,
        label: item.name,
        value: item.id
    }));

    const [ipsResults, setIpsResults] = useState<ICommonSelect[]>([]);
    const [locationResults, setLocationResults] = useState<ICommonSelect[]>([]);
    const [fields, setFields] = useState<ICommonProps>(initialValues);
    const [changedFields, setChangedFields] = useState<ICommonProps>(initialValues);

    const handleChange = (e:UploadChangeParam<UploadFile<any>>) => {
        const result = verifyDocumentTypeImageAndSizeAction(e)
        setPhoto(result);
    }

    useEffect(() => {
        if(!changedFields?.institution) return;
        form.setFieldsValue({
            ...form.getFieldsValue(true),
            location: null,
            ips: null
        });
        setLocationResults([]);
        setIpsResults([]);
        privateApi<ICommonSimpleGet[]>({
            url: `${PORTAL_ENDPOINTS.searchIps}/${fields.institution}`,
            method: 'GET'
        }).then(result => {
            setIpsResults(result.data.map(item => ({
                children: item.name,
                label: item.name,
                value: item.id
            })));
        })
    }, [changedFields])

    useEffect(() => {
        if(!changedFields?.ips) return;
        setLocationResults([]);
        form.setFieldsValue({
            ...form.getFieldsValue(),
            location: null
        })
        privateApi<ICommonSimpleGet[]>({
            url: `${PORTAL_ENDPOINTS.searchLocations}/${fields.ips}`,
            method: 'GET'
        }).then(result => {
            setLocationResults(result.data.map(item => ({
                children: item.name,
                label: item.name,
                value: item.id
            })));
        })
    }, [changedFields])

    //BUILDING NEW LAYOUT
    const newLayout = equipmentsRegistryFormLayout.map( (item) => {
        if(item.type === ETypeFormItem.INPUT){
            if(item.inputPrefix){
                item.propsInput = {
                ...item.propsInput!,
                prefix: <item.inputPrefix/> 
                }
            }
        }
        if(item.type ===ETypeFormItem.UPLOAD){
            item.Cop = () => <>
                <p className="ant-upload-drag-icon" style={{margin: 0}}>
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Subir foto del equipo</p>
            </>
            item.propsInput = {
                ...item.propsInput,
                fileList: (photo) ? [photo] : [],
                onChange: (e:UploadChangeParam<UploadFile<any>>) => {
                    handleChange(e)
                }
            }
        }
        if(item.key === 'multiple-files'){
            item.props = {
                ...item.props,
                docs: files,
                setDocs: setFiles
            }
        }
        if(item.type === ETypeFormItem.SAVE_BUTTON){
            item.propsInput = {
                ...item.propsInput,
                visible: true,
                loading: false
            }
        }
        if(item.key === 'select-network'){
            item.props = {
                ...item.props,
                style: {
                    display: ''
                }
            }
            item.propsInput = {
                ...item.propsInput,
                options: institutions,
            }
        }
        if(item.key === 'select-ips'){
            item.props = {
                ...item.props,
                style: {
                }
            }
            item.propsInput = {
                ...item.propsInput,
                options: ipsResults,
                disabled: fields?.institution ? false : true
            }
        }
        if(item.key === 'select-location'){
            item.props = {
                ...item.props,
                style: {
                }
            }
            item.propsInput = {
                ...item.propsInput,
                options: locationResults,
                disabled: fields?.ips ? false : true
            }
        }
        return item;
    });

    const handleSubmitLocal = (values: IRegisterForm) => {
        handleSubmit({
            ...values,
            docs: files,
            photo
        })
    }

    useEffect(() => {
        if(reset) {
            setFiles([]);
            setPhoto(null);
        }
    }, [reset])

    return (
        <div className='portal-equipments__registry ani-cont'>
            <CustomForm
                form={form}
                LAYOUT={newLayout}
                className='form-equipments'
                handleSubmit={(values) => handleSubmitLocal(values)}
                initialValues={initialValues}
                onValuesChange={(changedValues, values) => {setChangedFields(changedValues);setFields(values)}}
            />
        </div>
    )
}

interface IProps{
    form: FormInstance;
    handleSubmit: (values: IRegisterEquipment) => void;
    initialValues: IRegisterForm;
    reset: boolean;
}
