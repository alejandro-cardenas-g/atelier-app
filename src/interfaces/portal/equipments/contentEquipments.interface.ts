import { UploadFile } from "antd/lib/upload/interface";
import { IDoc } from "../../files/documentsObject.component";

export interface IRegisterForm{
    name: string,
    serial: string;
    activeFixedNumber: string;
    description: string;
    institution: number | null;
    ips: number | null;
    location: number | null;
}

export interface IRegisterEquipment extends IRegisterForm{
    photo: UploadFile | null,
    docs: IDoc[]
}