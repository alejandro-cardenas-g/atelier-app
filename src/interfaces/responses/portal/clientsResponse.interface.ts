import { IClients, IInstitution } from "../../redux/clients/reduxClient.interface";

export interface IClientsResponse{
    clients: IClients[],
    total: number
}

export interface IClientDetailResponse{
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string | null;
    company: string;
    institution: IInstitution;
}