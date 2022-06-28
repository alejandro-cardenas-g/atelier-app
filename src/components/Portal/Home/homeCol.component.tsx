import { Button, Col, Typography } from "antd"

export const HomeCol = ({
    Logo,
    title,
    text,
    buttonText,
    baseColor
}:IProps) => {
    return (
        <Col xs={24} md={24} lg={8}>
            <div className='home-grid__card'>
                <div className='card__image'>
                    <Logo/>
                </div>
                <div className='card__info'>
                    <Typography.Title level={3}>{title}</Typography.Title>
                    <Typography.Text className='card__text'>
                        {text}
                    </Typography.Text>
                </div>
                <Button block className='card__button'>{buttonText}</Button>
            </div>
        </Col>
    )
}

interface IProps{
    Logo: React.JSXElementConstructor<any>
    title: string;
    text: string;
    buttonText: string;
    baseColor?: string | null
}
