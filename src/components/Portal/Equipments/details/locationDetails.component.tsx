import { Form } from 'antd'
import { equipmentsLocationDetailsLayout } from '../../../../layouts/portal/equipment/equipmentsLocationDetails.layout'
import { CustomForm } from '../../../Common/CustomForm.component'

export const LocationDetails = () => {
    const [form] = Form.useForm()
    const layout = equipmentsLocationDetailsLayout;
    return (
    <CustomForm
        LAYOUT={layout}
        className=''
        form={form}
        initialValues={{}}
        handleSubmit={console.log}
    />
  )
}
