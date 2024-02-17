import axios from "axios";
import { LoginModel, RegisterModel } from "../models/RequestModels";

axios.defaults.withCredentials = true;

const baseURL =
  "https://authentication-and-authorization-kappa.vercel.app/";

export const LogIn = async (data) => {
  const body: LoginModel = {
    username: data.username,
    password: data.password,
  };

  try {
     const response = await axios.post(`${baseURL}login/`, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://umtloginfrontend.netlify.app',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (data) => {
  const body: RegisterModel = {
    username: data.username,
    email: data.email,
    password: data.password,
  };

  try {
    const response = await axios.post(`${baseURL}signup/`, body, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LogOut = async () => {
  return "Succesfully LogOut !";
};
