import { Col, Row, Typography } from 'antd'
import { EClientsContent } from '../../../../locales/portal/portalClients.locals'
import { useEffect, useState } from 'react';
import { PORTAL_LOCALS } from '../../../../locales/portal/portal.locals';
import { ClientsInfoContentLayout } from '../../../../layouts/portal/clients/clientsInfoContent.layout';

const OPTION_LOCALES = PORTAL_LOCALS['clients']['info'];

export const ClientsInfo = ({type}: IProps) => {

    const [content, setContent] = useState(ClientsInfoContentLayout[0]);

    useEffect(() => {
        const layout = ClientsInfoContentLayout.find(layout => layout.type === type);
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
    type: EClientsContent
}