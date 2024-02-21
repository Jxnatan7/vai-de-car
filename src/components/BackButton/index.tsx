import { createBox, createText } from "@shopify/restyle";
import { TouchableOpacity } from "react-native";
import { ThemeProps } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function BackButton({ navigation }) {
    return (
        <Box width={25} height={25} justifyContent="center" alignItems="center">
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000" />
            </TouchableOpacity>
        </Box>
    );
}