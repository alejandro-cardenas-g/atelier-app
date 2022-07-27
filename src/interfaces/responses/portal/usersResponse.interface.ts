import { IUsers } from "../../redux/usuarios/reduxUsuarios.interface";

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
}