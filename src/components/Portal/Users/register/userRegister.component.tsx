import { Form, Modal, Spin } from "antd"
import { RcFile, UploadFile } from "antd/lib/upload/interface"
import { IRegisterForm } from "../../../../interfaces/portal/users/contentUsers.interface";
import { UserRegisterForm } from "./userRegisterForm.component";
import { usePostAxios } from '../../../../hooks/usePostAxios.hook';
import { privateApi } from '../../../../api/config';
import { UserInfoConfirmation } from "../utils/usersFormUtils.component";
import { useEffect, useState } from "react";

window.scrollTo({top: 0, behavior: 'smooth'});

export const UserRegister = () => {

  const {execute, loading, result, reset} = usePostAxios<FormData, any>(privateApi, {
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

  const handleSubmit = async(values: IRegisterForm, file: UploadFile | null) => {

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

    const data = new FormData();
    (address) && data.append('address',address);
    (phone) &&  data.append('phone',`${phone}`);
    data.append('type', `${type}`);
    data.append('email',email);
    data.append('job',job);
    data.append('lastname',lastname);
    data.append('name',name);
    data.append('password',password);
    (file) && data.append('file', file?.originFileObj as RcFile);

    execute('/data', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    setModalInfo(prev => ({
      ...prev,
      name: `${name} ${lastname}`,
      email,
      password
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
      />
    </>
  )
}

export default UserRegister;