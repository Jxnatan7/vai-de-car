import React from "react";
import { Text } from "../../theme";
import { TextInfoProps } from "../../@types/TextInfoProps";

export function TextInfo({ text, color }: TextInfoProps) {
    return (
        <Text pb="l" pt="l" color={color ?? "text_dark"} fontSize={16} fontWeight="bold">
            {text}
        </Text>
    );
}