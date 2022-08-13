export interface IRowClientDataType {
    key: React.Key;
    name: string;
    email: string;
    company: string;
    dropdown: {
        id: number,
        slug: string
    };
}