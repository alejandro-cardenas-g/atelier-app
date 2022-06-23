import { Button, Checkbox, Form, Input } from 'antd'

import { ILoginForm } from '../../../interfaces/auth/authLogin.interface'
import { validateEmail } from '../../../utils/auth/loginForm.validator'

export const LoginForm = ({handleSubmit}:IProps) => {

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true,  email: '', password: ''}}
            autoComplete="off"
            onFinish={handleSubmit}
        >
            <Form.Item
                label="Correo electrónico"
                name="email"
                rules={[
                    { required: true, message: 'Por favor ingrese su correo electrónico.'},
                    {
                        validator: validateEmail,
                        validateTrigger: 'OnSubmit'
                    }                   
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Por favor ingrese su contraseña.' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }} className='auth__content--block'>
                <Checkbox>Guardar sesión</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className='auth__content--block'>
                <Button htmlType="submit">
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    )
}

interface IProps{
    handleSubmit: ({ email, password, remember }: ILoginForm) => void;
}