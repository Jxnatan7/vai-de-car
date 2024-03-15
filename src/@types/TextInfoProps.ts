import {ThemeProps} from "../theme";

type ThemeColor = keyof ThemeProps["colors"];
type ThemeSpacing = keyof ThemeProps["spacing"];

export type TextInfoProps = {
  text: string;
  color?: ThemeColor;
  marginTop?: ThemeSpacing;
  icon?: any;
};
