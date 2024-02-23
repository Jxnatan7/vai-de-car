import {createBox, createText, createTheme} from "@shopify/restyle";

import {colors} from "./colors";
import {spacing} from "./spacing";
import {textVariants} from "./textVariants";

const theme = createTheme({
  colors,
  spacing,
  textVariants,
});

type ThemeProps = typeof theme;

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export {theme, Box, Text};
export type {ThemeProps};
