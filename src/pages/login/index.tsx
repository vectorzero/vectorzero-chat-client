import React from 'react'
import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import { loginApp } from "../../services/login";

const LoginPage: React.FC = () => {
  const history = useHistory()

  function handleFinish(data: { [name: string]: any }) {
    const { user_check, user_info } = data
    loginApp({ userName: user_info, pwd: user_check }).then((res) => {
      if (res.code === 200) {
        sessionStorage.setItem("token", "我有权限了")
        history.push("/home")
      } else {
        message.error("用户名或密码错误！")
      }
    })
  }
  return (
    <>
      <div>
        <Form onFinish={handleFinish}>
          <Form.Item
            name="user_info"
            rules={[{ required: true, message: "用户名/手机号/邮箱不能为空" }]}
          >
            <Input placeholder={"用户名/手机号/邮箱"} maxLength={128} size="large"></Input>
          </Form.Item>
          <Form.Item
            name="user_check"
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input
              type="password"
              placeholder="密码"
              maxLength={128}
              size="large"
            />
          </Form.Item>
          <Button type="primary"
            htmlType="submit"
            size="large"
          >登录</Button>
        </Form>
      </div>
    </>
  )
}

export default LoginPage
