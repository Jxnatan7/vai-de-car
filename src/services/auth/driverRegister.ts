import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DriverRegisterRequest } from "../../@types/requests/DriverRegisterRequest";
import api from "../../config/axiosConfig";
import { HttpStatusCode } from "axios";
import { storage } from "../../config/storage";

export const driverRegister = (
  data: DriverRegisterRequest,
  navigation: NavigationProp<any>,
) => {
  api
    .post("/auth/register/driver", data)
    .then(function (response) {
      if (response.status !== HttpStatusCode.Created) {
        return; //Create exception
      }

      const data = response.data;
      storage.set("user.token", data?.token);
      storage.set("user.name", data?.name);
      storage.set("user.driver", data?.driver);

      //@ts-ignore
      navigation.navigate("driver-home");
    })
    .catch(function (error) {
      console.log(error);
    });
};
