export const AUTHLOCALS =  {
    portal: {
        admin: 'Admin',
        client: 'Clientes'
    },
    portalLink: {
        admin: {
            link: '¿Eres Cliente?',
            role: 'Administrador'
        },
        client: {
            link: '¿Eres Administrador?',
            role: 'Cliente'
        },
    }
}

export enum TYPE_SESSION{
    ADMIN = 0,
    CLIENT = 1
}

export enum TYPE_USER{
    SUPER = 0,
    ADMIN = 1,
    CLIENT = 2,
    MANTAINERS = 3,
}