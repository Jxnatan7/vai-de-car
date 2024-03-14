import { ReactNode } from "react";

export type BoxContainerProps = {
  children: ReactNode,
  headerTitle?: string,
  backButton?: boolean,
  aboutUser?: boolean,
};
