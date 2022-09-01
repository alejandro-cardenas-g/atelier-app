import { DeleteFilled, EditFilled, FilePdfFilled } from "@ant-design/icons";
import { Typography } from "antd"

export const DocumentItem = ({
    text,
    handleEdit,
    handleDelete
}: IProps) => {
    return (
        <div className='document-item' style={{marginBottom: '1rem'}}>
            <Typography.Text className='document-title'><FilePdfFilled className='document-title-icon'/> {text}</Typography.Text>
            <div className='document-actions'>
                <EditFilled onClick={handleEdit} className='document-icon-edit'/>
                <DeleteFilled onClick={handleDelete} className='document-icon-delete'/>
            </div>
        </div>
    )
}

interface IProps{
    text: string;
    handleDelete: (_:any) => void;
    handleEdit: (_:any) => void;
}
