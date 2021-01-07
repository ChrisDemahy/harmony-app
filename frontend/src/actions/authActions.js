
export const userSignup = (user) => {
  return (dispatch) => {
    let options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    };
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, options)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.hasOwnProperty("auth_key")) {
          localStorage.setItem("token", data.auth_key);
          dispatch(loginUser(data.user));
          console.log(data);
        } else {
          alert(data.error);
        }
      });
  };
};

export const userLogin = (user) => {
  return (dispatch) => {
    let options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    };
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, options)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.hasOwnProperty("auth_key")) {
          localStorage.setItem("token", data.auth_key);
          dispatch(loginUser(data.user));
          // console.log(data);
        } else {
          alert(data.error);
        }
      });
  };
};

const loginUser = (user) => ({
  type: "CHANGE_CURRENT_USER",
  user: user,
});
