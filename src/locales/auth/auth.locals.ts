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
    ADMIN = 0,
    CLIENT = 1,
    MANTAINERS = 2,
    SUPER = 3
}