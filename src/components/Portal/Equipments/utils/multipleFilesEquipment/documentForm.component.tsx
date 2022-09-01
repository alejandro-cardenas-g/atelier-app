import { FilePdfFilled, InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Typography } from "antd"
import Dragger from "antd/lib/upload/Dragger";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { useState } from "react"
import { useSelector } from "react-redux";
import { IDoc } from "../../../../../interfaces/files/documentsObject.component";
import { getDocTagsSelector } from "../../../../../redux/selectors/equipments.selector";
import { verifyDocumentTypePdfAndSizeAction } from "../../../../../utils/files/verifyMimeType.util";

export const DocumentForm = ({
    file,
    id,
    tag,
    name,
    addDoc
}:IProps) => {
    
    const [docName, setDocName] = useState<string>(name || '');
    const [docfile, setDocFile] = useState<null | UploadFile>(file || null);
    const [keyname, setKeyname] = useState<number | null>(null);

    const tags = useSelector(getDocTagsSelector).map(tag => ({
        label: tag.value,
        value: tag.id,
        children: tag.value
    }))

    const handleChange = (e:UploadChangeParam<UploadFile<any>>) => {
        const result = verifyDocumentTypePdfAndSizeAction(e);
        setDocFile(result);
    }

    const handleSubmit = () => {
        if(docName && docfile){
            addDoc({
                id: id || docfile.uid,
                name: docName,
                file: docfile,
                tag: keyname || 0
            });
        }
    }

    return (
        <div className='custom-form document-form'>
            <Form className='custom-form' onFinish={handleSubmit}>
                <Typography.Title level={5} className="document-form-title">Nuevo Documento</Typography.Title>
                <Form.Item
                    required
                >
                    <Input
                        name='name'
                        value={docName}
                        onChange={(e) =>setDocName(e.target.value)}
                        prefix={<FilePdfFilled style={{color: "#ff5c5c"}}/>}
                        placeholder='Nombre del documento*'
                    />
                </Form.Item>
                <Form.Item
                    required
                >
                    <Select
                        onChange={(value) => setKeyname(value)}
                        options={[...tags]}
                        defaultValue={tag || null}
                        showSearch={true}
                        placeholder='Etiquetas'
                        optionFilterProp="children"
                        filterOption={ (input: string, option: {
                                label: string;
                                value: number;
                                children: string;
                            } | undefined) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                        }
                    >

                    </Select>
                </Form.Item>
                <Form.Item>
                    <Dragger
                        multiple={false}
                        maxCount={1}
                        beforeUpload={ () => {return false}}
                        defaultFileList={[]}
                        fileList={ (docfile) ? [docfile] : []}
                        onChange={handleChange}
                        children={
                            <>
                                <p className="ant-upload-drag-icon" style={{margin: 0}}>
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Subir documento</p>
                            </>
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        className='custom-btn__white custom-btn__white--border'
                        htmlType='submit'
                    >Añadir</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

type IBaseDoc = Partial<IDoc>

interface IProps extends IBaseDoc{
    addDoc: (docRef: Required<IDoc>) => void;
}
