import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { USUARIOS_CONTENT } from '../../../layouts/portal/usuarioContent.layout';
import { EUsuariosContent, PATH_USERS_TYPE } from '../../../locales/portal/portalUsuario.locales';
import { SET_USERS } from '../../../redux/slices/portal/usuarios.slice';
import { UsuariosInfo } from './usuariosInfo.component';
import { parse } from 'query-string'
import { IUsuarioContent } from '../../../interfaces/portal/usuarios/contentUsuarios.interface';
import { Empty } from 'antd';

import React from 'react';

export const Usuarios = () => {
        
    const location = useLocation();
    const navigate = useNavigate();

    const { type } = parse(location.search);

    const [content, setContent] = useState<IUsuarioContent | null>();
    
    useEffect(() => {
        if(!type) navigate(`/usuarios${PATH_USERS_TYPE[EUsuariosContent.READ]}`);
    })

    useEffect(() => {
        
        if(typeof(type) !== 'string') return;

        const contentObject = USUARIOS_CONTENT.find(cont => cont.action == (Number.parseInt(type) as EUsuariosContent));

        if(!contentObject) return;
        
        setContent(contentObject);

    }, [type])

    const dispatch = useDispatch();

    useEffect(() => {

        fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async(result) => {
            const users = await result.json();
            dispatch(SET_USERS(users));
        })

    });

    return (
        <div className='portal-usuarios portal-container'>
        
            <React.Fragment>
               {    content 
                    ? 
                        <React.Fragment>
                            <UsuariosInfo/>
                            <content.Component/> 
                        </React.Fragment>
                    : 
                        <Empty/>
                }
            </React.Fragment>

        </div>
    )
}

export default Usuarios;