export enum EUsuariosContent {
    READ = 0,
    WRITE = 1,
    UPDATE = 2
}

export const PATH_USERS_TYPE = {
    [EUsuariosContent.READ]: `?type=${EUsuariosContent.READ}`,
    [EUsuariosContent.WRITE]: `?type=${EUsuariosContent.WRITE}`,
    [EUsuariosContent.UPDATE]: `?type=${EUsuariosContent.UPDATE}`
}