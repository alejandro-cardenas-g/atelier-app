import {  IUserDetailSend } from "./reduxUsers.interface";

export interface IPatchRequest{
    id?: number;
    token?: boolean;
    data: Partial<IUserDetailSend>
}