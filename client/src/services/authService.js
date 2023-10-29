import { store } from "../redux/store";
import {
  signInStart,
  signInSuccess,
  signInFailure,
  registerStart,
} from "../redux/user/userSlice";

export const handleLogin = async (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please provide all field");
    }
    const formData = {
      email: email,
      password: password,
      role: role,
    };
    store.dispatch(signInStart());
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      store.dispatch(signInFailure(data.message));
      return;
    }
    store.dispatch(signInSuccess(data));
  } catch (error) {
    console.log(error);
    store.dispatch(signInFailure(error.message));
  }
};

export const handleRegister = async (
  e,
  email,
  password,
  role,
  name,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    const formData = {
      email: email,
      password: password,
      role: role,
      ...(role === "admin" || role === "donar" ? { name: name } : {}),
      ...(role === "hospital" ? { hospitalName: hospitalName } : {}),
      ...(role === "organisation"
        ? { organisationName: organisationName }
        : {}),
      website: website,
      address: address,
      phone: phone,
    };
    store.dispatch(registerStart());
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      store.dispatch(signInFailure(data.message));
      return;
    }
    store.dispatch(signInSuccess(data));
  } catch (error) {
    console.log(error);
    store.dispatch(signInFailure(error));
  }
};
