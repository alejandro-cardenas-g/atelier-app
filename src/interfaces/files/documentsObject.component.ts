import { UploadFile } from "antd/lib/upload/interface";

export interface IDoc{
    name: string;
    tag: number;
    file: UploadFile;
    id: string;
}

export interface IBase64Doc{
    buffer: string;
    name: string;
    size: number;
    type: string;
    [key: string]: any;
}