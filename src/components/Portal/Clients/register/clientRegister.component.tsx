import { useState } from "react";
import { Form, Modal, Spin } from "antd"
import { ClientRegisterForm } from "./clientRegisterForm.component";
import { usePostAxios } from '../../../../hooks/usePostAxios.hook';
import { UserInfoConfirmation } from "../../Users/utils/usersFormUtils.component";
import { PORTAL_ENDPOINTS } from "../../../../api/endpoint";
import { IRegisterForm } from "../../../../interfaces/portal/clients/contentUsers.interface";

export const ClientRegister = () => {
  window.scrollTo(0,0);
  const {execute, loading, result, reset} = usePostAxios<any>({
    messageOnError: true
  });

  const [modalInfo, setModalInfo] = useState<Record<string, string | null>>({
    name: null,
    email: null,
    password: null
  })

  const [form] = Form.useForm();

  const initialValues:IRegisterForm = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: ''
  }

  const handleSubmit = async(values: IRegisterForm) => {

    const {
      phone,
      ...mandatoryFields
    } = values;

    const data: {[key:string]: any} = {
      ...mandatoryFields,
    };

    if(phone) data.phone = phone;

    execute(
      {
        url: PORTAL_ENDPOINTS.baseClients,
        data
      },
      {
          'Content-Type': 'application/json'
      }
    )
    
    setModalInfo(prev => ({
      ...prev,
      name: `${mandatoryFields.name} ${mandatoryFields.lastname}`,
      email: mandatoryFields.email,
      password: mandatoryFields.password
    }))

  }

  const handleReset = () => {
    reset();
    form.setFieldsValue(initialValues);
  }

  return (
    <>
      <Modal 
        confirmLoading={loading}
        visible={!!result}
        closable={false}
        destroyOnClose
        maskClosable={false}
        className='portal-usuarios__registry-modal'
        footer={null}
        children={
          <UserInfoConfirmation
            textToShow="Detalles del Cliente"
            name={modalInfo.name}
            email={modalInfo.email}
            password={modalInfo.password}
            onClose={handleReset}
          />
        }
      />
      <Spin spinning={loading}/>
      <ClientRegisterForm 
        form={form}
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        canReset={!!result}
      />
    </>
  )
}

export default ClientRegister;