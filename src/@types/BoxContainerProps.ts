import { ReactNode } from "react";
import { NavigationProps } from "./NavigationProps";

export type BoxContainerProps = {
  children: ReactNode;
  headerTitle?: string;
  navigation: NavigationProps;
  backButton?: boolean
};
