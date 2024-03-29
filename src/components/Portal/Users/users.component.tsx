import React from 'react';
import { useEffect, useState } from 'react';
import { USUARIOS_CONTENT } from '../../../layouts/portal/users/userContent.layout';
import { EUsersContent } from '../../../locales/portal/portalUsers.locals';
import { UsuariosInfo } from './utils/usersInfo.component';
import { IUsersContent } from '../../../interfaces/portal/users/contentUsers.interface';
import { Nullish } from '../../Common/Nullish.component';
import { USERS_MODULE_PERMISSIONS } from '../../../constants/permissions/permissions.constants';
import { UseVerifyModulePermission } from '../../../hooks/useVerifyModulePermission.hook';

export const Users = ({type}:IProps) => {

    const [content, setContent] = useState<IUsersContent | null>(null);
    const [actionType, setActionType] = useState<EUsersContent>(EUsersContent.READ);

    UseVerifyModulePermission(
        USERS_MODULE_PERMISSIONS,
        '/'
    );

    useEffect(() => {

        const contentObject = USUARIOS_CONTENT.find(cont => cont.action == (type));

        if(!contentObject) return;
        
        setActionType(type);
        setContent(contentObject);

    }, [type])

    return (
        <div className='portal-usuarios portal-container'>
        
            <React.Fragment>
               {    content 
                    ? 
                        <React.Fragment>
                            <UsuariosInfo type={actionType}/>
                            <content.Component/> 
                        </React.Fragment>
                    : 
                        <Nullish/>
                }
            </React.Fragment>

        </div>
    )
}

interface IProps{
    type: EUsersContent;
}

export default Users;