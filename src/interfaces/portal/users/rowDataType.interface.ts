export interface IRowUsuarioDataType {
    key: React.Key;
    name: string;
    type: string;
    email: string;
    dropdown: {
        id: number,
        slug: string
    };
}