import { IUsers } from "../../redux/usuarios/reduxUsers.interface";

export interface IUsersResponse{
    users: IUsers[],
    total: number
}

export interface IUserDetailResponse{
    id: number;
    name: string;
    lastname: string;
    type: number;
    job: string;
    email: string;
    address: string | null;
    phone: string | null;
    filename: string | null;
    fileUrl: string | null;
}

export interface IGetDocumentFile{
    publicUrl: string
};