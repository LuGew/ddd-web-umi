import React from 'react';
import styles from './LoginForm.css';
import { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { formatMessage } from 'umi-plugin-locale';


class AbstractLoginForm extends Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginForm}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: formatMessage({ id: 'please.input.username' }) }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                placeholder={formatMessage({ id: 'username' })}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: formatMessage({ id: 'please.input.password' }) }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder={formatMessage({ id: 'password' })}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox> {formatMessage({ id: 'remember.me' })}</Checkbox>)}
            <a className={styles.loginFormForgot} href="">

              {formatMessage({ id: 'forgot.password' })}
            </a>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>

              {formatMessage({ id: 'log.in' })}
            </Button>
            {formatMessage({ id: 'or' })}
            <a href="">
              {formatMessage({ id: 'register.now' })}
            </a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'login' })(AbstractLoginForm);
export default LoginForm;
