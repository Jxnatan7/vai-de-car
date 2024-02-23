import {TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Box} from "../../theme";
import {BackButtonProps} from "../../@types/BackButtonProps";

export function BackButton({navigation}: BackButtonProps) {
  return (
    <Box width={25} height={25} justifyContent="center" alignItems="center">
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000" />
      </TouchableOpacity>
    </Box>
  );
}
