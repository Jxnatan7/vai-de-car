import { createTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { spacing } from "./spacing";

const theme = createTheme({
  colors,
  spacing
});

type ThemeProps = typeof theme;

export { theme }; export type { ThemeProps };

