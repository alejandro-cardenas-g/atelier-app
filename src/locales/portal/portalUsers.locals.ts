export enum EUsersContent {
    READ = 0,
    WRITE = 1,
    UPDATE = 2
}

export const PATH_USERS_TYPE = {
    [EUsersContent.READ]: `?type=${EUsersContent.READ}`,
    [EUsersContent.WRITE]: `?type=${EUsersContent.WRITE}`,
    [EUsersContent.UPDATE]: `?type=${EUsersContent.UPDATE}`
}

export enum ETypeFormItem{
    TYPOGRAPHY_TITLE = 1,
    DIVPASSWORD = 2,
    INPUT = 3,
    SELECT = 4,
    UPLOAD = 5,
    BUTTON = 6,
    NONE = 7
}