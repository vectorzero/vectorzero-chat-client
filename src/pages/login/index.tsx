import React from 'react'
import Background from 'smart-background'
import styles from "./index.module.less"
import { Form, Input, Button, Select, message } from "antd"
import { useHistory } from "react-router-dom"
import { loginApp } from "../../services/login"
const { Option } = Select

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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className={styles.container}>
        <Background
          symbolsStyle={{ opacity: 1 }}
          exact={true}
          symbols={[
            ...dots.map((dot, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  width: dot.size,
                  height: dot.size,
                  borderRadius: dot.borderRadius,
                  background: dot.background,
                  top: dot.y,
                  left: dot.x,
                }}
              />
            )),
          ]}
        >
          <div className={styles.formWrap}>
            <Form onFinish={handleFinish} style={{ width: '300px' }}>
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
              <Form.Item>
                <Select defaultValue="screen" onChange={handleChange} size="large">
                  <Option value="screen">主屏幕</Option>
                  <Option value="operate">后台操作员</Option>
                  <Option value="database">数据管理员</Option>
                </Select>
              </Form.Item>
              <Button type="primary"
                htmlType="submit"
                size="large"
                block
              >登录</Button>
            </Form>
          </div>
        </Background>
      </div>
    </>
  )
}

const dots = [
  {
    x: '-20px',
    y: '-100px',
    size: 300,
    background: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
    borderRadius: '50%',
  },
  {
    x: '60%',
    y: '40%',
    size: 500,
    background:
      'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
    borderRadius: '50%',
  },
  {
    x: '-150px',
    y: '50%',
    size: 250,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
  },
];

export default LoginPage
