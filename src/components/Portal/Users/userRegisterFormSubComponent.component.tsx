import { EyeInvisibleOutlined, EyeOutlined, InboxOutlined } from "@ant-design/icons"
import { Typography } from "antd"

export const ComponentForPassword = (handleGeneratePassword: () => void) => {
    return () => 
        <Typography.Link onClick={handleGeneratePassword} className='generate-password-link'>
            Generar contraseña
        </Typography.Link>
}

export const PasswordVisibleComponent = (
    showPassword: boolean,
    setShowPassword: (value: React.SetStateAction<boolean>) => void,
    SetTypePassword: (value: React.SetStateAction<"text" | "password">) => void
) => {
    return (
        <button className='custom-btn__black custom-btn__black--r2'
            onClick={() => {
                setShowPassword(prev => !prev);
                SetTypePassword(prev => {
                    if(prev === 'text') return 'password';
                    return 'text';
                })
                }}
                type='button'
            >
            {   showPassword 
                ?
                    <EyeInvisibleOutlined />
                :
                    <EyeOutlined />
            }
        </button>
    )
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