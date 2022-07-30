import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USUARIOS_CONTENT } from '../../../layouts/portal/users/userContent.layout';
import { EUsersContent, PATH_USERS_TYPE } from '../../../locales/portal/portalUsers.locals';
import { UsuariosInfo } from './utils/usersInfo.component';
import { parse } from 'query-string'
import { IUsersContent } from '../../../interfaces/portal/users/contentUsers.interface';
import { Nullish } from '../../Common/Nullish.component';

export const Users = ({type}:IProps) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [content, setContent] = useState<IUsersContent | null>(null);
    const [actionType, setActionType] = useState<EUsersContent>(EUsersContent.READ);
    
    // useEffect(() => {
    //     if(!type) navigate(`/usuarios${PATH_USERS_TYPE[EUsersContent.READ]}`);
    // })

    useEffect(() => {
        
        // if(typeof(type) !== 'string') return;

        const contentObject = USUARIOS_CONTENT.find(cont => cont.action == (type));

        if(!contentObject) return;
        
        setActionType(type);
        setContent(contentObject);

    }, [])

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