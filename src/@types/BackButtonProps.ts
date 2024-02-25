import {ThemeProps} from "../theme";

type ThemeColor = keyof ThemeProps["colors"];

export type BackButtonProps = {
  color?: ThemeColor;
};
