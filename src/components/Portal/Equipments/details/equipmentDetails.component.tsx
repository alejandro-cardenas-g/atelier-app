import { Tabs } from "antd"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetSingleEquipment } from "../../../../redux/dispatchers/portal/equipments.dispatch";
import { CommonDetails } from "./commonDetails.component";
import { DocumentDetails } from "./documentDetails.component";
import { LocationDetails } from "./locationDetails.component";

export const EquipmentDetails = ({
    permission
}: IProps) => {

    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(!id) navigate('/equipos');
    }, [id])
    useEffect(() => {
        if(id){
            dispatchGetSingleEquipment(Number(id));
        }
    }, [dispatchGetSingleEquipment])

    return (
        <div className="portal-equipments__details ani-cont">
            <Tabs defaultActiveKey="1" onChange={console.log} className="equipments-details-tabs">
                <Tabs.TabPane tab="Detalles" key="1">
                    <CommonDetails/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ubicacion" key="2">
                    <LocationDetails/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Documentos" key="3">
                    <DocumentDetails/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

interface IProps{
    permission: number
}

export default EquipmentDetails;
