import { Button, Form, FormInstance, Input, Select, SelectProps, Typography } from 'antd'
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react';
import { IFormLayout } from '../../interfaces/layouts/formLayout.interface';
import { ETypeFormItem } from '../../locales/portal/portalUsers.locals';
import { SaveButton } from './saveButton.component';

export const CustomForm = ({
    initialValues,
    handleSubmit,
    LAYOUT,
    form,
    className = '',
    onFieldsChange = () => {},
    disabled,
    onValuesChange = (_:any) => {}
}:IProps) => {

    return (
        
        <Form
            className={`custom-form ${className}`}
            initialValues={initialValues}
            autoComplete="off"
            onFinish={handleSubmit}
            form={form}
            onFieldsChange={onFieldsChange}
            onChange={onFieldsChange}
            disabled = {disabled ? disabled : false}
            onValuesChange={onValuesChange}
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
                                        <Input.Password {...item.propsInput}/>
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

                        case ETypeFormItem.SAVE_BUTTON:

                            const visible = item.propsInput?.visible ? 'block' : 'none';

                            return <React.Fragment key={item.key}>
                            <Form.Item {...item.props} style={{display: visible}}>
                                <SaveButton {...item.propsInput}/>
                            </Form.Item>
                        </React.Fragment>

                        case ETypeFormItem.DESCRIPTION:
                            return <React.Fragment key={item.key}>
                                <Form.Item {...item.props}>
                                    <Input.TextArea {...item.propsInput}/>
                                </Form.Item>
                            </React.Fragment>

                        case  ETypeFormItem.CUSTOM:
                            return <React.Fragment key={item.key}>
                            {item.Cop && <item.Cop {...item.props}/>}
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
    form: FormInstance;
    className: string;
    onFieldsChange?: (...args:any) => void;
    disabled?: boolean;
    onValuesChange?: (valuesChange: any, values: any) => void;
}