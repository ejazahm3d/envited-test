import { createTheme } from "@mui/material/styles";
import { SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface PaletteColorOptions
    extends SimplePaletteColorOptions,
      ColorPartial {
    darker?: string;
    lighter?: string;
    gradientStart?: string;
    gradientMiddle?: string;
    gradientEnd?: string;
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#501FC1",
      darker: "#240D57",
      gradientStart: "#8456EC",
      gradientMiddle: "#B066F1",
      gradientEnd: "#E87BF8",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
          textTransform: "none",
        },
        containedPrimary: {
          background: `linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)`,
        },
        sizeLarge: {},
      },
    },
  },
});

theme = createTheme(theme, {});

export type CustomTheme = typeof theme;

export default theme;
