export const AUTH_ENDPOINTS = {
    login: 'api/v1/auth/login',
    loginClient: 'api/v1/auth/client/login',
    refresh: 'api/v1/auth/refresh-token',
    refreshClient: 'api/v1/auth/refresh-token/clients'
}

export const PORTAL_ENDPOINTS = {
    // Common
    common: 'api/v1/common',
    //Users
    baseUsers: 'api/v1/users',
    searchUsers: 'api/v1/users/search',
    getPublicUrlUserDocument: 'api/v1/users/document',
    // Clients
    baseClients: 'api/v1/clients',
    searchClients: 'api/v1/clients/search',
    // Equipments
    baseEquipments: 'api/v1/equipments',
    searchEquipmentsClient: 'api/v1/equipments/clients/search',
    searchEquipmentsUsers: 'api/v1/equipments/search',
    getDocumentEquipmentTags: 'api/v1/common/equipments/tags',
    searchInstitutions: 'api/v1/institutions',
    searchIps: 'api/v1/ips/institution',
    searchLocations: 'api/v1/equipments-locations/ips',
}