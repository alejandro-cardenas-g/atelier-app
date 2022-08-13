export interface ILoginForm{
    email: string;
    password: string;
    remember: boolean;
}

export interface ILogin{
    email: string;
    password: string;
}

export interface IAuthDetails{
    type: number;
    id: number;
    name: string;
    lastname: string;
    iat: number;
    exp: number;
    isSuperUser: boolean;
    company: null | string;
}
