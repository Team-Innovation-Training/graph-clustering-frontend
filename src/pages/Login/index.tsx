import {
  Form,
  Input,
  Checkbox,
  Card,
  Button,
  Col,
  Row,
  Flex,
  Typography,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.scss";
import { tokenAtom, getUserInfo } from "../../models/stores/modules/user";
import { useSetAtom } from "jotai";

const onFinish = async (loginForm: {
  username: string;
  password: string;
  rememberMe: boolean;
}) => {
  const res = await getUserInfo(loginForm);
  if (res.code === 1) {
    console.log("message:", res.message);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const { Title } = Typography;

const Login: React.FC = () => {
  return (
    <>
      <Flex className="authorization" justify="center" align="center">
        <Row justify="center" align="middle" style={{ width: "100%" }}>
          <Col xs={20} sm={16} md={12} lg={10} xl={8}>
            <Card className="authorization-container">
              <Flex vertical={true} justify="center" align="center">
                <Title
                  level={2}
                  style={{ marginTop: "15px", marginBottom: "30px" }}
                >
                  Welcome back
                </Title>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  style={{ width: "80%" }}
                >
                  <Form.Item<FieldType>
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="username"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    style={{ marginBottom: "10px" }}
                  >
                    <Input.Password
                      size="large"
                      placeholder="password"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    style={{ marginBottom: "20px" }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item<FieldType> style={{ marginBottom: "15px" }}>
                    <Button className="authorization-button" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default Login;
