import { createBox } from "@shopify/restyle";

import { ThemeProps } from "../../theme";

const Box = createBox<ThemeProps>();

export default function Signin() {
  return (
    <Box flex={1} backgroundColor="bg_light">
    </Box>
  );
}
