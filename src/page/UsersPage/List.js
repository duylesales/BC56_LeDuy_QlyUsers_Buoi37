import axios from "axios";
import React, { Component } from "react";

export default class List extends Component {
  // lấy tất cả, xoá, lấy chi tiết theo ID

  // renderUserList
  //1. Tạo 1 state chứa users
  //2. gọi api get all, rồi setState sau khi gọi thành công
  //3.Render hàm table user
  state = {
    users: [],
  };
  componentDidMount() {
    axios({
      url: "https://651e9c4c44a3a8aa4768abf3.mockapi.io/users",
      method: "GET",
    })
      .then((res) => {
        this.setState({ users: res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleRenderTable = () => {
    return this.state.users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <td>{user.name}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead></thead>
          <tbody>{this.handleRenderTable()}</tbody>
        </table>
      </div>
    );
  }
}
