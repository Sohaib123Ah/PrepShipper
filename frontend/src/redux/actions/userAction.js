import axios from "axios";

const url = window.location.origin;

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${url}/api/v1/me`);

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    console.log(email, password);

    const { data } = await axios.post(
      `${url}/api/v1/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

export const otpSend = (email) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${url}/api/v1/auth/otp`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "optSendSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "optSendFail",
      payload: error.response.data.message,
    });
  }
};

export const registerUser =
  (
    otp,
    hash,
    name,
    email,
    password,
    confirmPassword,
    phoneNumber,
    country,
    address,
    city,
    state,
    zipCode
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });

      const { data } = await axios.post(
        `${url}/api/v1/auth/register`,
        {
          otp,
          hash,
          name,
          email,
          password,
          confirmPassword,
          phoneNumber,
          country,
          address,
          city,
          state,
          zipCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "registerFail",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(`${url}/api/v1/auth/logout`);

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};

export const changeName = (changeName) => async (dispatch) => {
  try {
    dispatch({ type: "changeNameRequest" });

    const { data } = await axios.put(
      `${url}/api/v1/change/name`,
      { changeName },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "changeNameSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "changeNameFail",
      payload: error.response.data.message,
    });
  }
};

export const changePassword =
  (currentPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });

      const { data } = await axios.put(
        `${url}/api/v1/change/password`,
        { currentPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: "changePasswordSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const changeAddress =
  (country, state, phoneNumber, city, zipCode, address) => async (dispatch) => {
    try {
      dispatch({ type: "changeAddressRequest" });

      const { data } = await axios.put(
        `${url}/api/v1/change/address`,
        { country, state, phoneNumber, city, zipCode, address },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: "changeAddressSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "changeAddressFail",
        payload: error.response.data.message,
      });
    }
  };
