import { CopyOutlined, EyeInvisibleOutlined, EyeOutlined, InboxOutlined } from "@ant-design/icons"
import { Button, message, Typography } from "antd"
import { PORTAL_LOCALS } from "../../../../locales/portal/portal.locals"

const modalLocals = PORTAL_LOCALS['users']['registry']['modal'];

export const ComponentForPassword = ({handleGeneratePassword}: {handleGeneratePassword:() => void}) => {
    return () => 
        <Typography.Link onClick={handleGeneratePassword} className='generate-password-link'>
            Generar contraseña
        </Typography.Link>
}

export const UploadBody = () => {
    return(
        <>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Subir documento de identidad</p>
        </>
    )
}

export const UserInfoConfirmation = ({
    textToShow = '',
    name = null,
    email = null,
    password = null,
    onClose = () => {}
  }: {
    name?: string | null;
    email?: string | null;
    password: string | null;
    onClose: () => void;
    textToShow: string;
  }) => {

    const handleCopy = () => {
        let text = `${textToShow}\n`;
        if(name) text = text.concat(`\nNombre: ${name}`);
        if(email) text = text.concat(`\nEmail: ${email}`);
        if(password) text = text.concat(`\nContraseña: ${password}`);

        navigator.clipboard.writeText(text.trim());
        message.success(modalLocals['copied']);
    }

    const handleClose = () => {
        handleCopy();
        onClose();
    }

    return (
      <div className="user-info-conf">
        <Typography.Title level={3} className='user-info-conf__title'>{modalLocals['title']}</Typography.Title>
        <div className="user-info-conf__details">
            <div>
                {
                    name && 
                    <div>
                        <span className="details-key">{modalLocals['name']} </span><Typography.Text className="details-value">{name}</Typography.Text>
                    </div>
                }
                {
                    email &&
                    <div>
                        <span className="details-key">{modalLocals['email']}</span><Typography.Text className="details-value">{email}</Typography.Text>
                    </div>
                }
                {
                    password &&
                    <div>
                        <span className="details-key">{modalLocals['password']} </span><Typography.Text className="details-value">{password}</Typography.Text>
                    </div>
                }
            </div>
            <div>
                <CopyOutlined className="copyble" onClick={handleCopy}/>
            </div>
        </div>
        <Typography.Paragraph className="user-info-conf__text">{modalLocals['text']}</Typography.Paragraph>
        <Button className="custom-btn__black" onClick={handleClose}>{modalLocals['button']}</Button>
      </div>
    )
}