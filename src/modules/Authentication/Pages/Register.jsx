import authAPI from "apis/authAPI";
import { Form } from "antd";

import useRequest from "hooks/useRequest";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Components/Register/css/styleRegister.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { Container, Text, PasswordInput, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import Swal from "sweetalert2";

const Register = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    // Chế độ kích hoạt validation, mặc định là onSubmit
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    try {
      await handleRegister(values);
      // Sau khi đăng ký thành công, ta cần chuyển user về trang login
      navigate("/login");
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công tài khoản " + values.taiKhoan,
        buttons: "Ok",
      });
    } catch (error) {
      // Đăng ký thất bại show error ra cho user thấy
      Swal.fire({
        icon: "error",
        title: "Đăng ký thất bại",
        text: error,
        buttons: "Ok",
      });
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="register">
      <Container size="xs" className="registerContainer">
        <Form className="form-register" onFinish={handleSubmit(onSubmit)}>
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
            Đăng Ký
          </Text>

          <div className="w-100">
            <Input
              type="text"
              placeholder="Tài Khoản"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
                minLength: {
                  value: 5,
                  message: "Tài khoản phải từ 5 đến 20 ký tự",
                },
                maxLength: {
                  value: 20,
                  message: "Tài khoản phải từ 5 đến 20 ký tự",
                },
              })}
            />
            {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
          </div>
          <Controller
            name="matKhau"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              minLength: {
                value: 5,
                message: "Mật Khẩu phải từ 5 đến 20 ký tự",
              },
              maxLength: {
                value: 20,
                message: "Mật Khẩu phải từ 5 đến 20 ký tự",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                validateStatus={error ? "error" : ""}
                help={error?.message}
              >
                <Input.Wrapper id="input-demo" withAsterisk>
                  <PasswordInput
                    placeholder="Password"
                    withAsterisk
                    {...field}
                  />
                </Input.Wrapper>
              </Form.Item>
            )}
          />

          <div className="w-100">
            <Input
              icon={<IconAt />}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email không được để trống" },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email không đúng định dạng",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="w-100">
            <Input
              type="text"
              placeholder="Họ Tên"
              {...register("hoTen", {
                required: {
                  value: true,
                  message: "Họ tên không được để trống",
                },
              })}
            />
            {errors.hoTen && <p>{errors.hoTen.message}</p>}
          </div>

          <div className="w-100">
            <Input
              type="text"
              placeholder="Số Điện Thoại"
              {...register("soDt", {
                required: {
                  value: true,
                  message: "Số Điện Thoại không được để trống",
                },
                maxLength: {
                  value: 11,
                  message: "Số Điện Thoại tối đa 11 ký tự",
                },
              })}
            />
            {errors.soDt && <p>{errors.soDt.message}</p>}
          </div>

          <button className="btn btn-success w-100">Đăng Ký</button>
          <Text
            href="/login"
            component="a"
            align="right"
            size="md"
            weight={400}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Bạn đã có tài khoản? Đăng nhập
          </Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
