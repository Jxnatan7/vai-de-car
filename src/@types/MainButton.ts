import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ThemeProps } from "../theme";

type ThemeColor = keyof ThemeProps["colors"];
type ThemeSpacing = keyof ThemeProps["spacing"];

export type MainButtonProps = {
  text: string,
  color: ThemeColor,
  bg: ThemeColor,
  action: () => void,
  icon?: IconProp,
  marginTop?: ThemeSpacing,
  borderRadius?: number,
  borderDefault?: boolean,
};
