export interface ICommonResponse {
    userTypes: IUserTypesResponse[]
}

interface IUserTypesResponse{
    id: number;
    value: string;
}