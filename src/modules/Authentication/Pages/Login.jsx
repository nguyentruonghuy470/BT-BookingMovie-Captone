import { Form } from "antd";
import {
  Container,
  Text,
  Button,
  Checkbox,
  Input,
  PasswordInput,
} from "@mantine/core";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

import "../Components/Login/css/styleLogin.css";

import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const {
    handleSubmit,
    // Sử dụng kết hợp với Controller thay thế cho register đối với các trường hợp component không hỗ trợ ref
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (values) => {
    try {
      // chờ cho action login thành công
      await dispatch(login(values)).unwrap();
      // Chuyển user về trang home
      navigate("/");
      Swal.fire({
        text: "Xin chào " + values.taiKhoan,
        icon: "success",
        title: "Đăng nhập thành công",
        buttons: "Ok",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng ký thất bại",
        text: error,
        buttons: "Ok",
      });
    }
  };

  return (
    <div className="login">
      <Container size="xs" className="loginContainer">
        <Form
          onFinish={handleSubmit(onSubmit)}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 8 }}
          className="formContainer"
        >
          <FontAwesomeIcon
            className="iconUserLogin"
            icon={faCircleUser}
            color="#fb4226"
          />
          <Text
            component="h3"
            align="center"
            size="xl"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Đăng nhập
          </Text>
          <Controller
            name="taiKhoan"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                validateStatus={error ? "error" : ""}
                help={error?.message}
              >
                <Input.Wrapper
                  id="input-demo"
                  withAsterisk
                  type="text"
                  label="UserName"
                  size="16px"
                >
                  <Input id="input-demo" placeholder="UserName" {...field} />
                </Input.Wrapper>
              </Form.Item>
            )}
          />
          <Controller
            name="matKhau"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                validateStatus={error ? "error" : ""}
                help={error?.message}
              >
                <Input.Wrapper
                  id="input-demo"
                  withAsterisk
                  label="Password"
                  size="16px"
                >
                  <PasswordInput
                    placeholder="Password"
                    withAsterisk
                    {...field}
                  />
                </Input.Wrapper>
              </Form.Item>
            )}
          />
          <div className="chkSavePass">
            <Checkbox label="Nhớ tài khoản" className />
          </div>

          <Button
            color="red"
            uppercase
            type="primary"
            disabled={isLoading}
            loading={isLoading}
            className="btnLogin"
          >
            Đăng Nhập
          </Button>
          <Text
            href="/register"
            component="a"
            align="right"
            size="md"
            weight={400}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Bạn chưa có tài khoản?
          </Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
