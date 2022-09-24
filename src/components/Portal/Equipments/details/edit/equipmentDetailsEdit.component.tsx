import { Tabs } from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dispatchGetDocTagsEquipment, dispatchGetSingleEquipment } from "../../../../../redux/dispatchers/portal/equipments.dispatch";
import { isLoadingEquipments } from "../../../../../redux/selectors/equipments.selector";
import { SpinnerScreen } from "../../../../Common/Spinner.component";
import { EquipmentInfo } from "../../utils/EquipmentInfo.component";
import { CommonDetailsEdit } from "./commonDetails.component";

export const EquipmentDetailsEdit = ({
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
            <EquipmentInfo type={2}/>
            <Tabs defaultActiveKey="1" className="equipments-details-tabs">
                <Tabs.TabPane tab="Detalles" key="1">
                    <CommonDetailsEdit/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ubicación" key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab="Documentos" key="3">
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

interface IProps{
    permission: number
}

export default EquipmentDetailsEdit;
