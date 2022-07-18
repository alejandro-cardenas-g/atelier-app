import { useState } from "react"
import axios from 'axios';
import { EyeInvisibleOutlined, EyeOutlined, InboxOutlined } from "@ant-design/icons"
import { Form, Typography } from "antd"
import { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload/interface"
import { generateRandomString } from "../../../utils/stringTools/generateRandomString.util"
import { CustomForm } from "../../Common/CustomForm.component"
import { userRegistryFormLayout } from "../../../layouts/portal/users/usersRegistryForm.layout"
import { ETypeFormItem } from "../../../locales/portal/portalUsers.locals"

export const UserRegister = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [typePassword, SetTypePassword] = useState<'password' | 'text'>('password');

  interface a{
    name: string,
    lastname: string,
    email: string,
    password: string,
    job: string,
    type: number,
    address: string | null,
    phone: number | null,
  }

  const [file, setFile] = useState<UploadFile | null>(null)

  const [form] = Form.useForm();

  const handleGeneratePassword = () => {
    form.setFieldsValue({
      ...form.getFieldsValue(),
      password: generateRandomString()
    })
  }

  const handleSubmit = (values: a) => {

    const {
      address,
      type,
      email,
      job,
      lastname,
      name,
      password,
      phone
    } = values;

    console.log(values);

    const data = new FormData();
    (address) && data.append('address',address);
    (phone) &&  data.append('phone',`${phone}`);
    data.append('type', `${type}`);
    data.append('email',email);
    data.append('job',job);
    data.append('lastname',lastname);
    data.append('name',name);
    data.append('password',password);
    data.append('file', file?.originFileObj as RcFile)

    axios.post('http://localhost:3000/data', data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

  }

  const ComponentForPassword = () => 
    <Typography.Link onClick={handleGeneratePassword} className='generate-password-link'>
      Generar contraseña
    </Typography.Link>

  const Comp = <button className='custom-btn__black custom-btn__black--r2'
    onClick={() => {
      setShowPassword(prev => !prev);
      SetTypePassword(prev => {
        if(prev === 'text') return 'password';
        return 'text';
      })
    }}
    type='button'
    >
    { showPassword 
      ?
      <EyeInvisibleOutlined />
      :
      <EyeOutlined />
    }
  </button>

  const UploadBody = () => {return(
    <>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Subir documento de identidad</p>
    </>
  )}

  const newLayout = userRegistryFormLayout.map( (item) => {
    if(item.type === ETypeFormItem.INPUT || item.type ===  ETypeFormItem.DIVPASSWORD){
      if(item.inputPrefix){
        item.propsInput = {
          ...item.propsInput!,
          prefix: <item.inputPrefix/> 
        }
      }
    }
    if(item.key === 'divpassword'){
      item.Cop = ComponentForPassword;
      item.propsInput = {
        ...item.propsInput,
        addonAfter: Comp,
        type: typePassword
      }
    }
    if(item.key === 'dragger-file'){
      item.Cop = UploadBody;
      item.propsInput = {
        ...item.propsInput,
        onChange: (e:UploadChangeParam<UploadFile<any>>) => setFile(e.fileList[0])
      }
    }
    return item;
  })

  return (
    <div className='portal-usuarios__registry'>
      <CustomForm
        form={form}
        LAYOUT={newLayout}
        handleSubmit={handleSubmit}
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          job: '',
          type: null,
          address: '',
          phone: ''
        }}
      />
      {/* <Form 
        className='form-users'
        name="basic"
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          job: '',
          type: null,
          address: '',
          phone: ''
        }}
        autoComplete="off"
        onFinish={handleSubmit}
        form={form}
      >

        <Typography.Title level={4} className='separator-users__required'>Información requerida</Typography.Title>
        
        <Form.Item
          className='form-users__item-name'
          name="name"
          rules={[{ required: true, message: 'El nombre es obligatorio' }]}
        >

          <Input
            placeholder="Nombre(s)"
            aria-label="Nombres"
            prefix={<UserOutlined />}
          />

        </Form.Item>

        <Form.Item 
          className='form-users__item-lastname'
          name='lastname'
          rules={[{ required: true, message: 'Los apellidos son obligatorios' }]}
        >

          <Input
            placeholder="Apellido(s)"
            aria-label='Apellidos'
            prefix={<UserOutlined />}
          />

        </Form.Item>

        <Form.Item 
          className='form-users__item-area'
          rules={[{ required: true, message: 'El area es obligatoria' }]}
          name='type'
        >

          <Select
              showSearch
              placeholder='Seleccione el Área'
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  label: 'Administración',
                  value: 1,
                  children: 'Administración'
                },
                {
                  label: 'Mantenimiento',
                  value: 2,
                  children: 'Mantenimiento'
                }
              ]}
            >
          </Select>

        </Form.Item>

        <Form.Item 
          className='form-users__item-job'
          name='job'
          rules={[{ required: true, message: 'El Cargo es obligatorio' }]}
        >

          <Input 
            placeholder="Cargo"
            aria-label='Cargo'
            prefix={<ReconciliationOutlined />}
          />

        </Form.Item>

        <Form.Item
            className='form-users__item-email'
            name='email'
            rules={[{ required: true, message: 'El correo es obligatorio' }]}
        >

          <Input 
            placeholder="Email"
            aria-label='Email'
            prefix={<MailOutlined />}
          />

        </Form.Item>
            
        <div className='form-users__item-password'>

          <Form.Item 
            className='form-users__item-password--item'
            name='password'
            rules={[{ required: true, message: 'La contraseña es obligatoria' }]}
          >

            <Input 
              placeholder="Contraseña"
              aria-label='Contraseña'
              prefix={<LockOutlined />}
              type={typePassword}
              addonAfter={Comp}
            />

          </Form.Item>
          <Typography.Link onClick={handleGeneratePassword} className='generate-password-link'>Generar contraseña</Typography.Link>

        </div>


        <Typography.Title level={4} className='separator-users__additional'>Información Adicional</Typography.Title>

        <Form.Item 
          className='form-users__item-address'
          name='address'
        >

          <Input 
            placeholder="Dirección"
            aria-label='Dirección'
            prefix={<HomeOutlined />}
          />

        </Form.Item>

        <Form.Item 
          className='form-users__item-phone'
          name='phone'
        >

          <Input 
            placeholder="Teléfono"
            aria-label='Teléfono'
            prefix={<PhoneOutlined />}
            type='number'
          />

        </Form.Item>

        <Form.Item 
          className='form-users__item-file'
        >

            <Dragger
              multiple={false}
              maxCount={1}
              beforeUpload={
                () => {return false}
              }
              name="file"
              defaultFileList={[]}
              onChange={(e) => setFile(e.fileList[0])}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Subir documento de identidad</p>
            </Dragger>

        </Form.Item>

        <Form.Item className='form-users__item-submit'>

          <Button className='custom-btn__green' htmlType="submit">Crear Usuario</Button>

        </Form.Item>

      </Form> */}
    </div>
  )
}
