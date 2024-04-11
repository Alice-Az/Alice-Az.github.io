import Grid from "@mui/material/Grid";
import AppCard from "../AppCard/AppCard";

const AppGrid = () => {
    return (
        <Grid
            container
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
            <Grid
                container
                xs={12}
                sm={6}
                md={4}
                justifyContent="center"
                alignItems="center"
                padding="40px 0px"
            >
                <AppCard />
            </Grid>
        </Grid>
    );
};

export default AppGrid;
