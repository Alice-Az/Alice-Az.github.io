import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
    palette: {
        primary: {
            light: "#d7cfc7",
            main: "#cec4ba",
            dark: "#908982",
            contrastText: "#544541",
        },
    },
});

export default CustomTheme;
