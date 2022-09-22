import { createTheme } from "@mui/material/styles";
import { SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface PaletteColorOptions
    extends SimplePaletteColorOptions,
      ColorPartial {
    darker?: string;
    lighter?: string;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#501FC1",
      darker: "#240D57",
      lighter: "#8456EC",
      contrastText: "#E87BF8",
    },
    secondary: {
      main: "#EDE5FF",
      darker: "#CCB6FF",
      lighter: "#F6F2FF",
    },
    background: {
      default: "#F6F2FF",
    },
  },
});

export default theme;
