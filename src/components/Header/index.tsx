import { ReactNode } from "react";

import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

type HeaderProps = {
    title: string,
    leftAction?: ReactNode,
    rightAction?: ReactNode
};

export function Header({ title, leftAction, rightAction }: HeaderProps) {
    return (
        <Box width="100%" flexDirection="row" alignItems="center" justifyContent="space-between" mb="xl">
            {leftAction ?? <Box />}
            <Text variant="header">
                {title}
            </Text>
            {rightAction ?? <Box />}
        </Box>
    );
}