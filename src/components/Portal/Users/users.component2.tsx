import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USUARIOS_CONTENT } from '../../../layouts/portal/users/userContent.layout';
import { EUsersContent, PATH_USERS_TYPE } from '../../../locales/portal/portalUsers.locals';
import { UsuariosInfo } from './utils/usersInfo.component';
import { parse } from 'query-string'
import { IUsersContent } from '../../../interfaces/portal/users/contentUsers.interface';
import { Nullish } from '../../Common/Nullish.component';

export const Users = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { type } = parse(location.search);

    const [content, setContent] = useState<IUsersContent | null>(null);
    const [actionType, setActionType] = useState<EUsersContent>(EUsersContent.READ);
    
    useEffect(() => {
        if(!type) navigate(`/usuarios${PATH_USERS_TYPE[EUsersContent.READ]}`);
    })

    useEffect(() => {
        
        if(typeof(type) !== 'string') return;

        const contentObject = USUARIOS_CONTENT.find(cont => cont.action == (Number.parseInt(type) as EUsersContent));

        if(!contentObject) return;
        
        setActionType(Number.parseInt(type) as EUsersContent);
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

export default Users;