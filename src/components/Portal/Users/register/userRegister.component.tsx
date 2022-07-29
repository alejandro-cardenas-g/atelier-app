import axios from 'axios';
import { Form } from "antd"
import { RcFile, UploadFile } from "antd/lib/upload/interface"
import { IRegisterForm } from "../../../../interfaces/portal/users/contentUsers.interface";
import { UserRegisterForm } from "./userRegisterForm.component";

window.scrollTo({top: 0, behavior: 'smooth'});

export const UserRegister = () => {

  const [form] = Form.useForm();

  const initialValues:IRegisterForm = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    type: 0,
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

    const a = await axios.post('http://localhost:3000/data', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(a)

  }

  return (

    <UserRegisterForm 
      form={form}
      handleSubmit={handleSubmit}
      initialValues={initialValues}
    />
  
  )
}

export default UserRegister;