import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "../Themes/CustomTheme";
import "./TopBar.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <ThemeProvider theme={CustomTheme}>
            <Box>
                <AppBar
                    style={{
                        width: "100%",
                    }}
                >
                    <Toolbar
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <NavLink
                            to={"/"}
                            style={{
                                textDecorationLine: "none",
                                color: CustomTheme.palette.primary.contrastText,
                            }}
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: "flex", sm: "block" },
                                    fontWeight: "bold",
                                    fontFamily: "Pixelify Sans",
                                    fontSize: "2rem",
                                }}
                            >
                                <p className="app-name">Azemar.dev</p>
                            </Typography>
                        </NavLink>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                            <IconButton
                                size="large"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Alice-Az",
                                        "_blank"
                                    )
                                }
                                color="inherit"
                            >
                                <GitHubIcon />
                                <p className="text-icons">Github</p>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={() => navigate("/contact")}
                                color="inherit"
                            >
                                <EmailIcon />
                                <p className="text-icons">Contact</p>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </Box>
        </ThemeProvider>
    );
};

export default TopBar;
