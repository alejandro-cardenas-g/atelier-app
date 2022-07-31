export interface IUsers{
    name: string;
    lastname: string;
    email: string;
    type: number;
    id: number;
    slug: string;
}

export interface IUserDetail{
    id: number;
    name: string;
    lastname: string;
    type: number;
    job: string;
    email: string;
    phone: string | null;
    address: string | null;
    filename: string | null;
    fileUrl: string | null;
}

type IUserDetailSendBase = Omit<IUserDetail, "filename" | "fileUrl">;

export interface IUserDetailSend extends IUserDetailSendBase{
    password: string
};

export enum EUserDetailSection {
    BASIC = 1,
    CONTACT = 2,
    PRIVACY = 3,
    UPLOAD = 4
}