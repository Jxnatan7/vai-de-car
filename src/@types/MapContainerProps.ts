import { ReactElement } from "react";

export type MapContainerProps = {
  backButton?: boolean,
  children: ReactElement,
  dontUseGeoLocation?: boolean
};
