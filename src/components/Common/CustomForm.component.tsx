import { Button, Form, FormInstance, Select, SelectProps, Typography } from 'antd'
import Input from 'antd/lib/input/Input';
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react';
import { IFormLayout } from '../../interfaces/layouts/formLayout.interface';
import { ETypeFormItem } from '../../locales/portal/portalUsers.locals';

export const CustomForm = ({
    initialValues,
    handleSubmit,
    LAYOUT,
    form
}:IProps) => {

    return (
        
        <Form
            className='form-users'
            name="basic"
            initialValues={initialValues}
            autoComplete="off"
            onFinish={handleSubmit}
            form={form}
        >
            {
                LAYOUT.map((item, index) => {
                    switch (item.type) {
                        case ETypeFormItem.TYPOGRAPHY_TITLE:
                            return <React.Fragment key={item.key}>
                                <Typography.Title {...item.props}>{item.textTypegraphy}</Typography.Title>
                            </React.Fragment>
                    
                        case ETypeFormItem.INPUT:
                            return <React.Fragment key={item.key}>
                                <Form.Item {...item.props}>
                                    <Input
                                        {...item.propsInput}
                                    />
                                </Form.Item>
                            </React.Fragment>



                        case ETypeFormItem.SELECT:
                            return <React.Fragment key={item.key}>
                                <Form.Item {...item.props}>
                                    <Select
                                        {...item.propsInput as SelectProps}
                                    ></Select>
                                </Form.Item>
                            </React.Fragment>

                        case ETypeFormItem.DIVPASSWORD:
                            return <React.Fragment key={item.key}>
                                <div {...item.propsDiv}>
                                    <Form.Item {...item.props}>
                                        <Input {...item.propsInput}/>
                                    </Form.Item>
                                    {
                                        item.Cop && <item.Cop/>
                                    }
                                </div>
                            </React.Fragment>

                        case ETypeFormItem.BUTTON:
                            return <React.Fragment key={item.key}>
                                <Form.Item {...item.props}>
                                    <Button
                                        {...item.propsInput}
                                    >{item.textTypegraphy}</Button>
                                </Form.Item>
                            </React.Fragment>

                        case ETypeFormItem.UPLOAD:
                            return <React.Fragment key={item.key}>
                                <Form.Item {...item.props}>
                                    <Dragger
                                        {...item.propsInput}
                                    >{
                                        item.Cop && <item.Cop/>
                                    }</Dragger>
                                </Form.Item>
                            </React.Fragment>

                        default:
                            return null;
                    }

                })
            }
            
        </Form>

    )
}

interface IProps{
    initialValues: Object;
    handleSubmit: (values: any) => void;
    LAYOUT: IFormLayout[];
    form: FormInstance
}