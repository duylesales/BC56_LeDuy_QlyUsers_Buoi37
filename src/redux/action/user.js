import axios from "axios";
import { SET_USER } from "../constant/user";

export let setUserAction = () => {
  return (dispatch) => {
    axios({
      url: "https://651e9c4c44a3a8aa4768abf3.mockapi.io/users",
      method: "GET",
    })
      .then((res) => {
        let action = {
          type: SET_USER,
          payload: res.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
