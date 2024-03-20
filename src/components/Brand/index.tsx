import React from "react";
import { Box, Text } from "../../theme";

export function Brand() {
    return (
        <Box flexDirection="row" gap="s">
            <Text fontWeight="bold" color="text_orange">
                VAI DE
            </Text>
            <Text fontWeight="bold">
                CAR
            </Text>
        </Box>
    );
}