import Typography from "@mui/material/Typography";
import "./ContactView.css";
import CustomTheme from "../../components/Themes/CustomTheme";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";

const ContactView = () => {
    return (
        <ThemeProvider theme={CustomTheme}>
            <div className="page-content">
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontFamily="Montserrat"
                    color={CustomTheme.palette.primary.dark}
                    style={{
                        filter: `drop-shadow(0 0 0.1rem ${CustomTheme.palette.primary.dark})`,
                        fontWeight: "600",
                    }}
                    sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
                >
                    Contact
                </Typography>
                <Box
                    boxShadow={`2px 2px 4px ${CustomTheme.palette.primary.main}`}
                    borderRadius="3px"
                    sx={{
                        width: { xs: "150px", sm: "400px" },
                        height: 4,
                        backgroundColor: "#fbfaf9",
                    }}
                ></Box>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontFamily="Montserrat"
                    color={CustomTheme.palette.primary.contrastText}
                    margin="20px 0px"
                    sx={{ fontSize: { xs: "0.8rem", sm: "1.25rem" } }}
                >
                    Email: alice.azemar1@gmail.com
                </Typography>
            </div>
        </ThemeProvider>
    );
};

export default ContactView;
