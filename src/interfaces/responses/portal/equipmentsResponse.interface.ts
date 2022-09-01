import { ICommonSimpleGet } from "../../common/common.interface";
import { IEquipments } from "../../redux/equipments/reduxEquipments.interface";

export interface IEquipmentsResponse{
    equipments: IEquipments[],
    total: number
}

export interface IDocumentEquipmentsResponse{
    tags: {
        id: number;
        value: string;
    }[]
}

export interface ISingleEquipmentResponse {
    id:                number;
    name:              string;
    serial:            string;
    fixedActiveNumber: string;
    description:       string;
    filename:          string | null;
    location:          ILocation;
    ips:               IIps;
    photoUrl:          string | null;
    documents:         Document[];
}

export interface Document {
    id:          number;
    name:        string;
    filepath:    string;
    filename:    string;
    tagId:       number;
    equipmentId: number;
}

export interface IIps {
    id:          number;
    name:        string;
    institution: IInstitution;
}

export interface ILocation {
    id:   number;
    name: string;
}
export interface IInstitution {
    id:   number;
    name: string;
}
