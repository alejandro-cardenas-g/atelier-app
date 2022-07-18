import { IUsers } from "../../redux/usuarios/reduxUsuarios.interface";

export interface IUsersResponse{
    users: IUsers[],
    total: number
}