import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(0, 36%, 70%)",
    },
    error: { main: "hsl(0, 93%, 68%)" },
  },
});
