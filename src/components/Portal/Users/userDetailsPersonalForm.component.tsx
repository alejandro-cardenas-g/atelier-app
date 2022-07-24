import { Form, Typography } from "antd";
import { CustomForm } from "../../Common/CustomForm.component";

export const UserDetailsPersonalForm = ({userDetail}: IProps) => {
    
    const [form] = Form.useForm();

    const initialValues: IInitialValues = {
        name: userDetail.name || '',
        lastname: userDetail.lastname || '',
        type: userDetail.type || 0,
        job: userDetail.job || ''
    }

    return (
        <div className=''>
            
            <Typography.Title level={2}>Información básica</Typography.Title>

            <CustomForm
                className=""
                form={form}
                initialValues={{}}
                handleSubmit={console.log}
                LAYOUT={{} as any}
            />

        </div>
    )
}

interface IProps{
    userDetail: IInitialValues;
}

interface IInitialValues{
    name: string;
    lastname: string;
    job: string;
    type: number;
}