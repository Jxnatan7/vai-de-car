import { ThemeProps } from "../theme";
import { NavigationProps } from "./NavigationProps";

type ThemeColor = keyof ThemeProps["colors"];

export type BackButtonProps = {
  navigation: NavigationProps;
  color?: ThemeColor
};
