import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
const App = () => {
  const onFinish = (values) => {

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        username: '陈盼'
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input readOnly/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Link to={`/`}>
          {/* <Button type="primary" htmlType="submit"> */}
            Submit
          {/* </Button> */}
        </Link>
      </Form.Item>
    </Form>
  );
};

export default App;