import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { ReactNode } from "react";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

type ContainerProps = {
    children: ReactNode
};

export function Container({ children }: ContainerProps) {
    return (
        <Box width="100%" backgroundColor="bg_light" height="100%" p="l">
            {children}
        </Box>
    );
}