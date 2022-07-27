export interface IUsers{
    name: string;
    lastname: string;
    email: string;
    type: number;
    id: number;
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
}

export enum EUserDetailSection {
    BASIC = 1,
    CONTACT = 2
} 