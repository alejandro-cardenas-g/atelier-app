import React from 'react';
import { useEffect, useState } from 'react';
import { Nullish } from '../../Common/Nullish.component';
import { ClientsInfo } from './utils/clientsInfo.component';
import { EClientsContent } from '../../../locales/portal/portalClients.locals';
import { CLIENTS_CONTENT } from '../../../layouts/portal/clients/clientsContent.layout';
import { IClientsContent } from '../../../interfaces/portal/clients/contentUsers.interface';
import { CLIENTS_MODULE_PERMISSIONS } from '../../../constants/permissions/permissions.constants';
import { UseVerifyModulePermission } from '../../../hooks/useVerifyModulePermission.hook';

export const Clients = ({type}:IProps) => {

    const [content, setContent] = useState<IClientsContent | null>(null);
    const [actionType, setActionType] = useState<EClientsContent>(EClientsContent.READ);

    UseVerifyModulePermission(
        CLIENTS_MODULE_PERMISSIONS,
        '/'
    );
    

    useEffect(() => {

        const contentObject = CLIENTS_CONTENT.find(cont => cont.action == (type));

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
                            <ClientsInfo type={actionType}/>
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
    type: EClientsContent;
}

export default Clients;