import Grid from "@mui/material/Grid";
import AppCard from "../AppCard/AppCard";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "../Themes/CustomTheme";
import AppsData from "../../data/AppsData";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const AppGrid = () => {
    return (
        <ThemeProvider theme={CustomTheme}>
            <Grid
                container
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                maxWidth="100%"
            >
                {AppsData.map((app) => (
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        lg={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        padding="40px 0px"
                        key={app.Id}
                    >
                        <AppCard app={app} />
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default AppGrid;
