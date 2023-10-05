import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };
  componentDidMount() {
    // tự động được gọi khi load trang
    // focus vào thẻ input username
    console.log("ok DID Mount");
  }
  handleOnchangeForm = (event) => {
    console.log("event", event.target);
    let { value, name } = event.target;
    console.log(value, name);
    this.setState({ [name]: value });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.username,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk",
      },
    })
      .then((res) => {
        message.success("Đăng nhập thành công");
        console.log(res);
        // chuyển hướng user về trang chủ sau khi đăng nhập thành công
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
    console.log("in");
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              onChange={this.handleOnchangeForm}
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleOnchangeForm}
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
          </div>
          <button
            type="button"
            onClick={this.handleLogin}
            className="btn btn-danger"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
