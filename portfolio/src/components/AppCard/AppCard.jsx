import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./AppCard.css";

const AppCard = ({ app }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: { md: "500px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div className="card-content">
                <CardMedia
                    component="img"
                    image={app.Image}
                    sx={{ objectFit: "contain" }}
                    alt="picture of a webpage"
                />
                <CardContent style={{ paddingBottom: "6px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {app.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {app.Description}
                    </Typography>
                </CardContent>
            </div>
            <div>
                <CardActions>
                    {app.ViewLink !== null && (
                        <Button
                            size="small"
                            sx={{ fontWeight: "800" }}
                            onClick={() =>
                                window.open(`${app.ViewLink}`, "_blank")
                            }
                        >
                            View
                        </Button>
                    )}
                    {app.FECodeLink != null && (
                        <Button
                            size="small"
                            sx={{ maxWidth: "30%" }}
                            onClick={() =>
                                window.open(`${app.FECodeLink}`, "_blank")
                            }
                        >
                            github (frontend)
                        </Button>
                    )}
                    {app.BECodeLink != null && (
                        <Button
                            size="small"
                            sx={{ maxWidth: "30%" }}
                            onClick={() =>
                                window.open(`${app.BECodeLink}`, "_blank")
                            }
                        >
                            github (backend)
                        </Button>
                    )}
                </CardActions>
            </div>
        </Card>
    );
};

export default AppCard;
