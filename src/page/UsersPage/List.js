import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_USER } from "../../redux/constant/user";
import { setUserAction } from "../../redux/action/user";
import { message } from "antd";

class List extends Component {
  // lấy tất cả, xoá, lấy chi tiết theo ID

  // renderUserList
  //1. Tạo 1 state chứa users
  //2. gọi api get all, rồi setState sau khi gọi thành công
  //3.Render hàm table user

  componentDidMount() {
    this.props.handleSetUser();
  }
  handleRenderTable = () => {
    return this.props.users.reverse().map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <td>
            <button
              onClick={() => {
                this.handleDelete(user.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button className="btn btn-warning">Edit</button>
          </td>
        </tr>
      );
    });
  };
  handleDelete = (id) => {
    axios
      .delete(`https://651e9c4c44a3a8aa4768abf3.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res);
        message.success("Xóa thành công");
        this.props.handleSetUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Account</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.handleRenderTable()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
