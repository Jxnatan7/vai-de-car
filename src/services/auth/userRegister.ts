import api from "../../config/axiosConfig";
import { UserRegisterRequest } from "../../@types/requests/UserRegisterRequest";
import { HttpStatusCode } from "axios";
import { NavigationProp } from "@react-navigation/native";
import { storage } from "../../config/storage";

export const userRegister = (
  data: UserRegisterRequest,
  navigation: NavigationProp<any>,
) => {
  api
    .post("/auth/register", data)
    .then(function (response) {
      if (response.status !== HttpStatusCode.Created) {
        return; //Create exception
      }

      const data = response.data;
      storage.set("user.token", data?.token);
      storage.set("user.name", data?.name);
      storage.set("user.driver", data?.driver);

      //@ts-ignore
      navigation.navigate("user-home");
    })
    .catch(function (error) {
      console.log(error);
    });
};
