import {ReactNode} from "react";
import {NavigationProps} from "./NavigationProps";

export type LayoutPropsProps = {
  children: ReactNode;
  headerTitle?: string;
  navigation: NavigationProps;
  backButton?: boolean;
  isMap?: boolean;
};
