import { Tabs } from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetDocTagsEquipment, dispatchGetSingleEquipment } from "../../../../../redux/dispatchers/portal/equipments.dispatch";
import { isLoadingEquipments } from "../../../../../redux/selectors/equipments.selector";
import { SpinnerScreen } from "../../../../Common/Spinner.component";
import { EquipmentInfo } from "../../utils/EquipmentInfo.component";
import { CommonDetails } from "./commonDetails.component";
import { DocumentDetails } from "./documentDetails.component";
import { LocationDetails } from "./locationDetails.component";

export const EquipmentDetails = ({
    permission
}: IProps) => {
    useEffect(() => {
        dispatchGetDocTagsEquipment()
      }, [dispatchGetDocTagsEquipment])
    const { id } = useParams();
    const isLoading = useSelector(isLoadingEquipments);
    const navigate = useNavigate();
    useEffect(() => {
        if(!id) navigate('/equipos');
    }, [id])
    useEffect(() => {
        if(id){
            dispatchGetSingleEquipment(Number(id));
        }
    }, [dispatchGetSingleEquipment, id])

    if(isLoading) return <><SpinnerScreen/></>

    return (
        <div className="portal-equipments__details ani-cont">
            <EquipmentInfo type={3}/>
            <Tabs defaultActiveKey="1" className="equipments-details-tabs">
                <Tabs.TabPane tab="Detalles" key="1">
                    <CommonDetails/>
                    <LocationDetails/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Documentos" key="2">
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
