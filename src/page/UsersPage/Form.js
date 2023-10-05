import axios from "axios";
import React, { Component } from "react";

export default class Form extends Component {
  // chức năng thêm
  // 1. tạo state chứ input từ user
  // 2. gọi api với method POST, đưa data từ state lên server

  state = {
    user: {
      name: "",
      account: "",
      password: "",
    },
  };
  handleChangeForm = (event) => {
    let { value, name } = event.target;
    let user = { ...this.state.user, [name]: value };
    this.setState({
      user: user,
    });
  };
  handleAddUser = () => {
    axios({
      url: "https://651e9c4c44a3a8aa4768abf3.mockapi.io/users",
      method: "POST",
      data: this.state.user,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form className="form-inline">
          <input
            onChange={this.handleChangeForm}
            value={this.state.name}
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.state.account}
            type="text"
            class="form-control"
            name="account"
            placeholder="Account"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.state.password}
            type="text"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <button
            onClick={this.handleAddUser}
            type="button"
            className="btn btn-dark"
          >
            Thêm
          </button>
        </form>
      </div>
    );
  }
}
