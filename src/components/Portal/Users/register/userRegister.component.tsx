import { Form, Modal, Spin } from "antd"
import { IRegisterForm } from "../../../../interfaces/portal/users/contentUsers.interface";
import { UserRegisterForm } from "./userRegisterForm.component";
import { usePostAxios } from '../../../../hooks/usePostAxios.hook';
import { UserInfoConfirmation } from "../utils/usersFormUtils.component";
import { useState } from "react";
import { PORTAL_ENDPOINTS } from "../../../../api/endpoint";
import { UseVerifyModulePermission } from "../../../../hooks/useVerifyModulePermission.hook";

export const UserRegister = () => {
  window.scrollTo(0,0);

  UseVerifyModulePermission(
    [],
    '/'
  );

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
    type: null,
    phone: '',
    job: '',
    address: ''
  }

  const handleSubmit = async(values: IRegisterForm) => {

    const {
      address,
      phone,
      ...mandatoryFields
    } = values;

    const data: {[key:string]: any} = {
      ...mandatoryFields,
    };

    if(address) data.address = address;
    if(phone) data.phone = phone;
    // if(file){
    //   const base64File = await converToBase64(file?.originFileObj as RcFile);
    //   data.file = {
    //     buffer: base64File.split(';base64,')[1],
    //     size: file.size,
    //     type: file.type,
    //     name: file.name
    //   };
    // }

    execute(
      {
        url: PORTAL_ENDPOINTS.baseUsers,
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
            textToShow="Detalles del Usuario"
            name={modalInfo.name}
            email={modalInfo.email}
            password={modalInfo.password}
            onClose={handleReset}
          />
        }
      />
      <Spin spinning={loading}/>
      <UserRegisterForm 
        form={form}
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        canReset={!!result}
      />
    </>
  )
}

export default UserRegister;