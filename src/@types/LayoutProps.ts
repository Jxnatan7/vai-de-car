import {ReactElement} from "react";

export type LayoutPropsProps = {
  children: ReactElement;
  headerTitle?: string;
  backButton?: boolean;
  isMap?: boolean;
};
