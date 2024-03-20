import { ReactElement } from "react";

export type LayoutProps = {
  children: ReactElement,
  headerTitle?: string,
  backButton?: boolean,
  isMap?: boolean,
  aboutUser?: boolean,
  brand?: boolean
};
