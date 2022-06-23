export const AUTHLOCALES =  {
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