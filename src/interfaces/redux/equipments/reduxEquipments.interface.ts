import { ICommonProps } from "../../common/common.interface";
import { IIps, ILocation } from "../../responses/portal/equipmentsResponse.interface";

export interface IEquipments{
    name: string;
    serial: string;
    fixedActiveNumber: string;
    description: string;
    id: number;
    photoUrl: string;
}

export interface IDocTags{
    value: string,
    id: number
}

export interface IDrawer{
    loading: boolean;
    filters: ICommonProps,
    ips: Omit<IIps, "institution">[],
    location: ILocation[]
}