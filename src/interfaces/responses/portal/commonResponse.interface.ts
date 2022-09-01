import { IInstitution } from "../../redux/clients/reduxClient.interface";

export interface ICommonResponse {
    userTypes: IUserTypesResponse[],
    institutions: IInstitution[]
}

interface IUserTypesResponse{
    id: number;
    value: string;
}