import React, { useState, useEffect } from "react";
import { Form, notification } from "antd";
import useRequest from "hooks/useRequest";
import authAPI from "apis/authAPI";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Collapse, Space, Input, PasswordInput } from "@mantine/core";
import Swal from "sweetalert2";

const EditInformation = ({ infoUser }) => {
  const info = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const {
    reset,
    control,
    formState,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
    // Chế độ kích hoạt validation, mặc định là onSubmit
    mode: "onTouched",
  });
  // useEffect(() => {
  //   setValue("taiKhoan", infoUser?.taiKhoan);
  //   setValue("matKhau", infoUser?.matKhau);
  //   setValue("email", infoUser?.email);
  //   setValue("hoTen", infoUser?.hoTen);
  // }, [reset]);
  useEffect(() => {
    if (infoUser) {
      Object.entries(infoUser).forEach(([name, value]) =>
        setValue(name, value)
      );
    }
  }, [setValue, infoUser]);

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.updateInfoUser(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    try {
      // chờ cho action login thành công
      await handleRegister(values);
      // Chuyển user về trang home
      Swal.fire({
        icon: "success",
        title: "Cập nhật thành công",
        buttons: "Ok",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      notification.error({
        message: "Cập nhật thất bại",
        description: error,
      });
    }
  };

  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
          <Button onClick={() => setOpened((o) => !o)}>
            Chỉnh sửa thông tin cá nhân
          </Button>
        </h2>
      </div>
      <Collapse in={opened}>
        <div className="card-body">
          <Form
            onFinish={handleSubmit(onSubmit)}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 8 }}
            className="formRegister"
          >
            <Controller
              name="taiKhoan"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Tài khoan không được để trống",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <input
                    {...field}
                    className="form-control mb-3"
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
                    disabled
                    style={{ cursor: "not-allowed" , opacity:"0.75"}}
                  />
                  {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
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
                minLength: {
                  value: 5,
                  message: "Tài khoản phải từ 5 đến 20 ký tự",
                },
                maxLength: {
                  value: 20,
                  message: "Tài khoản phải từ 5 đến 20 ký tự",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <Input.Wrapper id="input-demo" withAsterisk size="16px">
                    <PasswordInput
                      className="mb-3"
                      placeholder="Password"
                      withAsterisk
                      {...field}
                    />
                  </Input.Wrapper>
                </Form.Item>
              )}
            />
            <Controller
              name="email"
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
                  <input
                    {...field}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email không được để trống",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email không đúng định dạng",
                      },
                    })}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </Form.Item>
              )}
            />
            <Controller
              name="hoTen"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <input
                    {...field}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Họ Tên"
                    {...register("hoTen", {
                      required: true,
                    })}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </Form.Item>
              )}
            />

            <Controller
              name="soDT"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <input
                    {...field}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Số Điện Thoại"
                    {...register("soDT", {
                      required: true,
                    })}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </Form.Item>
              )}
            />

            <Controller
              name="maNhom"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <input
                    {...field}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Số Điện Thoại"
                    {...register("maNhom", {
                      required: true,
                    })}
                    disabled
                    style={{ cursor: "not-allowed", opacity:"0.75" }}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </Form.Item>
              )}
            />

            <Controller
              name="maLoaiNguoiDung"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <input
                    {...field}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Số Điện Thoại"
                    {...register("maLoaiNguoiDung", {
                      required: true,
                    })}
                    disabled
                    style={{ cursor: "not-allowed", opacity:"0.75"}}
                  />
                  {/* <span className="text-danger">{state.errors.matKhau}</span> */}
                </Form.Item>
              )}
            />

            <div className="form-group">
              <button
                className="btnChange"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#60c5ef",
                  borderRadius: "5px",
                  padding: "15px",
                }}
              >
                Thay đổi thông tin
              </button>
            </div>
          </Form>
        </div>
      </Collapse>
    </div>
  );
};

export default EditInformation;
