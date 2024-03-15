import api from "../../config/axiosConfig";
import { UserRegisterRequest } from "../../@types/requests/UserRegisterRequest";
import { HttpStatusCode } from "axios";
import { login } from "./login";
import { LoginRequest } from "../../@types/requests/LoginRequest";
import { NavigationProp } from "@react-navigation/native";

export const userRegister = (
  data: UserRegisterRequest,
  navigation: NavigationProp<any>,
) => {
  api
    .post("/auth/register", data)
    .then(function (response) {
      if (response.status === HttpStatusCode.Created) {
        const loginData: LoginRequest = {
          email: data.email,
          password: data.password,
        };
        login(loginData, navigation);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
