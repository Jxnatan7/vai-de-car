import { createBox, createText, useTheme } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { TouchableOpacity } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

type RadioButtonProps = {
    label: string,
    selected: boolean,
    onSelect: () => void
};

export function RadioButton({ label, selected, onSelect }: RadioButtonProps) {
    const theme = useTheme<ThemeProps>()
    return (
        <TouchableOpacity onPress={onSelect} style={{ marginBottom: theme.spacing.l }}>
            <Box flexDirection="row" alignItems="center">
                <Box
                    width={20}
                    height={20}
                    borderRadius={100}
                    borderWidth={1}
                    borderColor="dark_gray"
                    alignItems="center"
                    justifyContent="center"
                    marginRight="m"
                >
                    {selected && (
                        <Box
                            width={10}
                            height={10}
                            borderRadius={100}
                            backgroundColor="dark_gray"
                        />
                    )}
                </Box>
                <Text>{label}</Text>
            </Box>
        </TouchableOpacity>
    );
};
