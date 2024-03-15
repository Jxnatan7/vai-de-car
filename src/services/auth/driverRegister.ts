import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DriverRegisterRequest } from "../../@types/requests/DriverRegisterRequest";
import api from "../../config/axiosConfig";
import { login } from "./login";
import { HttpStatusCode } from "axios";
import { LoginRequest } from "../../@types/requests/LoginRequest";

export const driverRegister = (
  data: DriverRegisterRequest,
  navigation: NavigationProp<any>,
) => {
  api
    .post("/auth/register/driver", data)
    .then(function (response) {
      if (response.status === HttpStatusCode.Created) {
        const loginData: LoginRequest = {
          email: data.user.email,
          password: data.user.password,
        };
        login(loginData, navigation);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
