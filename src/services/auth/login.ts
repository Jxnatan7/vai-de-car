import api from "../../config/axiosConfig";
import { NavigationProp } from "@react-navigation/native";
import { storage } from "../../config/storage";
import { LoginRequest } from "../../@types/requests/LoginRequest";

export const login = (data: LoginRequest, navigation: NavigationProp<any>) => {
  api
    .post("/auth/login", data)
    .then(function (response) {
      const data = response.data;
      storage.set("user.token", data?.token);
      storage.set("user.name", data?.name);
      storage.set("user.driver", data?.driver);

      if (data?.driver === true) {
        //@ts-ignore
        navigation.navigate("driver-home");
        return;
      }

      //@ts-ignore
      navigation.navigate("user-home");
    })
    .catch(function (error) {
      console.log(error);
    });
};
