import { CalendarOutlined, DeploymentUnitOutlined, ScheduleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"

export const HomeGrid = () => {
    return (
        <div className='home-grid'>
            <Row gutter={[20,20]} align='middle' justify="center">
                <Col xs={24} md={24} lg={8}>
                    <div className='home-grid__card'>
                        <div className='card__image'>
                            <DeploymentUnitOutlined/>
                        </div>
                        <div className='card__info'>
                            <Typography.Title level={3}>Nuevo Equipo</Typography.Title>
                            <Typography.Text className='card__text'>
                                Registra un nuevo equipo, completa su información y anexa todos sus documentos.
                            </Typography.Text>
                        </div>
                        <Button block className='card__button'>Nuevo Equipo</Button>
                    </div>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <div className='home-grid__card'>
                        <div className='card__image'>
                            <CalendarOutlined />
                        </div>
                        <div className='card__info'>
                            <Typography.Title level={3}>Últimos eventos</Typography.Title>
                            <Typography.Text className='card__text'>
                                Visualizar los últimos eventos, sus detalles y equipos asociados.
                            </Typography.Text>
                        </div>
                        <Button block className='card__button'>Últimos Eventos</Button>
                    </div>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <div className='home-grid__card'>
                        <div className='card__image'>
                            <ScheduleOutlined/>
                        </div>
                        <div className='card__info'>
                            <Typography.Title level={3}>Nuevo Evento</Typography.Title>
                            <Typography.Text className='card__text'>
                                Crea un nuevo evento y asigna al usuario responsable de realizarlo.
                            </Typography.Text>
                        </div>
                        <Button block className='card__button'>Nuevo Evento</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
