import { Alert } from "react-native";
import { storage } from "../../config/storage";

export const logout = (navigation: any) => {
    Alert.alert(
        "Deseja mesmo sair da sua conta?",
        "",
        [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancelado"),
            },
            {
                text: "Confirmar",
                onPress: () => {
                    try {
                        storage.clearAll();
                        // @ts-ignore
                        navigation.navigate("entry");
                    } catch (error) {
                        console.log(error);
                        Alert.alert("Aconteceu algum problema, você será redirecionado para a tela de login");
                        setTimeout(() => {
                            // @ts-ignore
                            navigation.navigate("entry");
                        }, 3000);
                    }
                }
            }
        ]
    );
};