export enum PATHNAMES {
        //AUTH_ROUTES
        AUTH_LOGIN = '/auth/login',
        AUTH_CLIENTE_LOGIN = '/auth/clients/login',
        //PORTAL_ROUTES
        PORTAL = '/',
        PORTAL_SETTINGS = '/settings',
        PORTAL_USERS = '/usuarios',
        PORTAL_USERS_REGISTER = '/usuarios/register',
        PORTAL_CLIENTS = '/clientes',
        PORTAL_CLIENTS_REGISTER = '/clientes/register',
        PORTAL_EQUIPOS = '/equipos',
        PORTAL_EQUIPOS_REGISTER = '/equipos/register',
        PORTAL_EVENTOS = '/eventos',
}

export enum ROUTES{
        //COMMON ROUTES
        ID = ':id',
        //AUTH_ROUTES
        AUTH = 'auth',
        AUTH_LOGIN = 'login',
        AUTH_CLIENTE_LOGIN = 'clients/login',
        //PORTAL_ROUTES
        PORTAL = '/',
        PORTAL_SETTINGS = 'settings',
        // PORTAL USER ROUTES
        PORTAL_USERS = 'usuarios',
        PORTAL_USER_DETAIL = 'usuarios/:slug',
        PORTAL_USER_REGISTER = 'usuarios/register',
        // PORTAL CLIENT ROUTES
        PORTAL_CLIENTS = 'clientes',
        PORTAL_CLIENTS_DETAIL = 'clientes/:slug',
        PORTAL_CLIENTS_REGISTER = 'clientes/register',
        // PORTAL EQUIPMENTS ROUTES
        PORTAL_EQUIPOS = 'equipos',
        PORTAL_EQUIPOS_REGISTER = 'equipos/register',
        PORTAL_EQUIPOS_DETAILS_READ = 'equipos/:id/read',
        PORTAL_EQUIPOS_DETAILS_EDIT = 'equipos/:id/edit',
        PORTAL_EVENTOS = 'eventos'
        
}