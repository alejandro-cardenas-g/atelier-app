import { Col, Row, Typography } from 'antd'
import { UsersInfoContentLayout } from '../../../layouts/portal/users/userInfoContent.layout'
import { EUsersContent } from '../../../locales/portal/portalUsers.locals'
import { useEffect, useState } from 'react';
import { PORTAL_LOCALS } from '../../../locales/portal/portal.locals';

const OPTION_LOCALES = PORTAL_LOCALS['users']['info'];

export const UsuariosInfo = ({type}: IProps) => {

    const [content, setContent] = useState(UsersInfoContentLayout[0]);

    useEffect(() => {
        const layout = UsersInfoContentLayout.find(layout => layout.type === type);
        if(!layout) return;
        setContent(layout);   
    })

    return (
        <Row className='portal-usuarios__info' >

            <Col xs={24}>

                <Typography.Title className='portal-title-1' level={1}>{OPTION_LOCALES['title']}</Typography.Title>

            </Col>

            {
                <content.Component/>
            }

        </Row>
    )
}

interface IProps{
    type: EUsersContent
}