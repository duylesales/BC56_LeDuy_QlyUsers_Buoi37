import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class UsersPage extends Component {
  /**
   *
   * 5 api : LẤY ds , THÊM , XOÁ, CẬP NHẬT, lấy CHI TIẾT
   */
  render() {
    return (
      <div className="container">
        <Form />
        <List />
      </div>
    );
  }
}
