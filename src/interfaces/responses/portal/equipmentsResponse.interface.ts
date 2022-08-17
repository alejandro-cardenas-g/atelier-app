import { IEquipments } from "../../redux/equipments/reduxEquipments.interface";

export interface IEquipmentsResponse{
    equipments: IEquipments[],
    total: number
}