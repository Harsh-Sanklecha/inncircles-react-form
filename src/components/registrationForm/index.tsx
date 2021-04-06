import React, { useState, useEffect } from 'react';
import {Form, Input, Button, Radio, DatePicker, Card, Avatar} from 'antd';
import { MailOutlined , UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${placeholder} is required!',
  types: {
    email: '${placeholder} is not a valid email!',
    number: '${placeholder} is not a valid number!',
  },
};
    
const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
      forceUpdate({});
    }, []);

     const onFinish = (values: any) => {
        console.log(values);
    };
   
    return (
         <Card className="formCard py-3">
            <Avatar size={54} className="userAvatar mb-4 d-flex justify-content-center align-items-center" icon={<UserOutlined />} />
            <Form name="nest-messages" form={form} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} rules={[{ required: true, message: 'Full Name is required' }]}>
                <Input placeholder="Full Name *" className="py-2" prefix={<UserOutlined className="site-form-item-icon pr-2" />} />
            </Form.Item>
            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                <Input placeholder="Email" className="py-2" prefix={<MailOutlined className="site-form-item-icon pr-2"/>} />
            </Form.Item>
            <Form.Item name={['user', 'birthDay']}>
                <DatePicker className="py-2" placeholder="Date of Birth" />
            </Form.Item>
            <Form.Item name={['user', 'gender']} >
                <Radio.Group>
                  <Radio value="Male" className="border rounded p-2">Male</Radio>
                  <Radio value="Female" className="border rounded p-2 m-0">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                >
                  Submit
                </Button>
              )}
            </Form.Item>
            </Form>
        </Card>
    );
}

export default RegistrationForm
