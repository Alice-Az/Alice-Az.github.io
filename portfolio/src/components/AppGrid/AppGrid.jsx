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
            >
                {AppsData.map((app) => (
                    <Grid
                        container
                        xs={12}
                        sm={6}
                        md={4}
                        justifyContent="center"
                        alignItems="center"
                        padding="40px 0px"
                    >
                        <AppCard app={app} />
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default AppGrid;
