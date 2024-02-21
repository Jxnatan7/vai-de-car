import { createTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { spacing } from "./spacing";
import { textVariants } from "./textVariants";

const theme = createTheme({
  colors,
  spacing,
  textVariants
});

type ThemeProps = typeof theme;

export { theme }; export type { ThemeProps };

