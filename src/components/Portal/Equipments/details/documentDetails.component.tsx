import { Form } from 'antd'
import { equipmentsDocumentsDetailsLayout } from '../../../../layouts/portal/equipment/equipmentsDocumentsDetails.layout'
import { CustomForm } from '../../../Common/CustomForm.component'

export const DocumentDetails = () => {
    const [form] = Form.useForm()
    const layout = equipmentsDocumentsDetailsLayout;
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
