import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import React, { Fragment, useState } from "react";
import { Grid } from "@mantine/core";

import "../Header/css/Headerstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { logout } from "modules/Authentication/slices/authSlice";

import { Menu, Burger, Collapse } from "@mantine/core";
import { Popover, Text } from "@mantine/core";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movePath = (path) => {
    navigate(`${path}`);
    console.log("login");
  };

  const { user, isLoading } = useSelector((state) => state.auth);

  const renderLogin = () => {
    if (user) {
      return (
        <Fragment>
          <Popover
            width="target"
            position="bottom"
            withArrow
            shadow="md"
            open={open}
            role={undefined}
          >
            <Popover.Target>
              <div
                onClick={open}
                className="login_link"
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                style={{ cursor: "pointer" }}
              >
                <a className="navLinkLogin justify-content-end">
                  <FontAwesomeIcon
                    className="iconUser"
                    icon={faCircleUser}
                    color="#9e9e9e"
                  />
                  <h3 className="login__text">{user.taiKhoan}</h3>
                </a>
              </div>
            </Popover.Target>
            <Popover.Dropdown>
              <Menu>
                <Menu.Item onClick={() => movePath("profile")}>
                  <FontAwesomeIcon
                    className="iconUser"
                    icon={faCircleUser}
                    color="#9e9e9e"
                  />
                  <p>Profile</p>
                </Menu.Item>
                <Menu.Item onClick={() => dispatch(logout())}>
                  <FontAwesomeIcon
                    className="iconUser"
                    icon={faArrowRightFromBracket}
                    color="#9e9e9e"
                  />
                  <p>Logout</p>
                </Menu.Item>
              </Menu>
            </Popover.Dropdown>
          </Popover>
        </Fragment>
      );
    }
    return (
      <>
        <a onClick={() => movePath("login")} className="navLinkLogin">
          <FontAwesomeIcon
            className="iconUser"
            icon={faCircleUser}
            color="#9e9e9e"
          />
          <h3>Login</h3>
        </a>
        <hr className="" />
        <a onClick={() => movePath("register")} className="navLinkRegister">
          <FontAwesomeIcon
            className="iconUser"
            icon={faCircleUser}
            color="#9e9e9e"
          />

          <h3>Register</h3>
        </a>
      </>
    );
  };
  return (
    <div>
      <div className="divHeaderContainer">
        <Grid className="gridHeader">
          <Grid.Col span={4}>
            <img
              onClick={() => movePath("/")}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=="
              className="iconLogo"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <div className="divHeader">
              <a href={"#bookMovie"}>
                <h4>Lịch Chiếu</h4>
              </a>
              <a href={"#MovieShow"}>
                <h4>Cụm Rạp</h4>
              </a>
              <a href={"#New"}>
                <h4>Tin Tức</h4>
              </a>
              <a href={"#Footer"}>
                <h4>Ứng Dụng</h4>
              </a>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div className="divHeaderButton justify-content-end">
              {renderLogin()}
              <Burger
                className="navTab"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
              />
            </div>
          </Grid.Col>
        </Grid>
        <Collapse in={opened}>
          <div className="collapseMenu">
            <a href={"#bookMovie"}>
              <h4>Lịch Chiếu</h4>
            </a>
            <a href={"#MovieShow"}>
              <h4>Cụm Rạp</h4>
            </a>
            <a href={"#New"}>
              <h4>Tin Tức</h4>
            </a>
            <a href={"#Footer"}>
              <h4>Ứng Dụng</h4>
            </a>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Header;
{
}
