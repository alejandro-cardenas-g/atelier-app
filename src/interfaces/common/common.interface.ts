import { ReactElement } from "react";

export type JSXComponent = () => ReactElement;

export interface ICommonProps{
    [key: string]: any
}