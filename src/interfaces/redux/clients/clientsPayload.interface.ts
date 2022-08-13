import {  IClientDetailSend } from "./reduxClient.interface";

export interface IPatchRequest{
    id?: number;
    token?: boolean;
    data: Partial<IClientDetailSend>
}