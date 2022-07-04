import { Button, Col, Row, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PATH_USERS_TYPE, EUsuariosContent } from '../../../locales/portal/portalUsuario.locales'
import { Searcher } from '../../Common/Searcher.component'

export const UsuariosInfo = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(PATH_USERS_TYPE[EUsuariosContent.WRITE]);
    }

    return (
        <Row className='portal-usuarios__info' >

            <Col xs={24}>

                <Typography.Title className='portal-title-1' level={1}>Administración - Usuarios</Typography.Title>

            </Col>

            <div className='portal-usuarios__info-actions'>

                <Button className='custom-btn__green' onClick={handleNavigate}>Nuevo Usuario</Button>

                <Searcher/>

            </div>

        </Row>
    )
}
