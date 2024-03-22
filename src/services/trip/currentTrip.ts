import api from "../../config/axiosConfig";
import { NavigationProp } from "@react-navigation/native";
import { storage } from "../../config/storage";
import { LoginRequest } from "../../@types/requests/LoginRequest";

export const currentTrip = (tripId: number, navigation: NavigationProp<any>) => {
    api.get(`/trip/${tripId}/current`)
        .then(function (response) {
            const data = response.data;
            storage.set("user.token", data.token);
            storage.set("user.name", data.name);
            storage.set("user.driver", data.driver);

            //@ts-ignore
            navigation.navigate("user-home");
        })
        .catch(function (error) {
            console.log(error);
        });
};

// {
//     "latitudeTo": 0,
//     "longitudeTo": 0,
//     "passenger": {
//       "name": "string",
//       "phone": "string"
//     },
//     "driver": {
//       "name": "string"
//     },
//     "latitudeEmbarkation": 0,
//     "longitudeEmbarkation": 0,
//     "longitudeFrom": 0,
//     "latitudeFrom": 0
//   }