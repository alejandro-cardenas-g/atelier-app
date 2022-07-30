import {  IUserDetailSend } from "./reduxUsuarios.interface";

export interface IPatchRequest{
    id?: number;
    token?: boolean;
    data: Partial<IUserDetailSend>
}