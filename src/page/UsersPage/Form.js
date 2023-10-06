import axios from "axios";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { SET_USER } from "../../redux/constant/user";
import { setUserAction } from "../../redux/action/user";

class Form extends Component {
  // chức năng thêm
  // 1. tạo state chứ input từ user
  // 2. gọi api với method POST, đưa data từ state lên server
  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.value = "defaultAccount";
    this.inputRef.current.style.color = "red";
  }
  inputRef = createRef();
  formRef = createRef();
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
        this.formRef.current.reset();
        this.props.handleSetUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form ref={this.formRef} className="form-inline">
          <input
            ref={this.inputRef}
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
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
  };
};
export default connect(null, mapDispatchToProps)(Form);
