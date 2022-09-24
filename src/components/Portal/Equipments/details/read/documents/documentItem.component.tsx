import { FilePdfOutlined } from "@ant-design/icons"
import { Button, Divider, Typography } from "antd"
import { Document } from "../../../../../../interfaces/responses/portal/equipmentsResponse.interface"

export const DocumentItem = ({doc}: {doc: Document}) => {
    const handleClick = () => {
        window.open(doc.filepath);
    }
    return (
        <div className="documents-details">
            <div className="content">
                <div>
                    <FilePdfOutlined className="icon"/>
                    <Typography.Text className="title" italic>{doc.name}</Typography.Text>
                </div>
                <Button className="custom-btn__blue" onClick={handleClick}>Ver</Button>
            </div>
            <Divider className="divider"/>
        </div>
    )
}
