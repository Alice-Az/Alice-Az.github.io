import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cat from "../../assets/cat.jpg";

const AppCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={cat}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        MyApp
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Simple app I've made in Frontend course
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AppCard;
