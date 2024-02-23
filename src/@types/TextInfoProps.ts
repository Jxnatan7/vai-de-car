import { ThemeProps } from "../theme";

type ThemeColor = keyof ThemeProps["colors"];

export type TextInfoProps = {
    text: string,
    color?: ThemeColor
};