import { SET_USER } from "../constant/user";

const initialState = {
  users: [],
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      state.users = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
