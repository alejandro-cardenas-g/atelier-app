import { ReactElement } from "react";

export type JSXComponent = (_:any) => ReactElement;

export interface ICommonProps{
    [key: string]: any
}

export interface ICommonSimpleGet{
    name: string;
    id: number;
}

export interface ICommonSelect{
    label: string,
    value: number,
    children: string
}