const UserAuth = (state = [], action) => {
  if (action.type === "GET_USER_AUTH") {
    state = action.data;
  }

  return state;
};

export default UserAuth;
