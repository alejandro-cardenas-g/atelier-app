export interface IClients{
    name: string;
    lastname: string;
    email: string;
    type: number;
    id: number;
    slug: string;
    company: number;
    institution: IInstitution;
}

export interface IInstitution{
    name: string;
    id: number;
}

export interface IClientDetail{
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string | null;
    company: number;
    institution: IInstitution;
}

export enum EClientDetailSection {
    BASIC = 1,
    PRIVACY = 2
}

export interface IClientDetailSend extends IClientDetail{
    password: string
};