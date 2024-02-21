import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TouchableOpacity } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

type ThemeColor = keyof ThemeProps['colors'];

type ButtonProps = {
    text: string,
    color: ThemeColor,
    bg: ThemeColor,
    action: () => void,
    icon?: IconProp
};

export function Button({ text, color, bg, icon, action }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={action}>
            <Box
                bg={bg}
                width={340}
                height={50}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                borderRadius={100}
            >
                <Box>
                    <Text variant="button" color={color}>
                        {text}
                    </Text>
                </Box>
                {
                    icon && (
                        <FontAwesomeIcon icon={icon} color="#FFF" size={20} style={{ marginLeft: 20 }} />
                    )
                }
            </Box>
        </TouchableOpacity>
    );
}