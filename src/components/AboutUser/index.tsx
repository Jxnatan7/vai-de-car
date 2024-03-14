import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity } from "react-native";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export function AboutUser() {
    const navigation = useNavigation();
    return (

        <TouchableOpacity
            activeOpacity={0.7}
            //@ts-ignore
            onPress={() => navigation.navigate("user-info")}>
            <FontAwesomeIcon icon={faCircleUser} size={30} />
        </TouchableOpacity>
    )
}