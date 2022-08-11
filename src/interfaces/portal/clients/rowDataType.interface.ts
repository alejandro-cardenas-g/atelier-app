export interface IRowClientDataType {
    key: React.Key;
    name: string;
    email: string;
    dropdown: {
        id: number,
        slug: string
    };
}