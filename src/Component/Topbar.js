import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Badge from '@mui/material/Badge';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Topbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <div>
      <Grid container>
     
      
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={11}>
          <Toolbar>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ></Box>

              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="small"
                  
                  color="inherit"
                >
                  <Badge  color="error">
                    <MailIcon fontSize="small"/>
                  </Badge>
                </IconButton>
                <IconButton
                  
                  
                  color="inherit"
                >
                  <Badge  color="error">
                    <WhatsAppIcon fontSize="small"/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="small"
                 
                  aria-label="account of current user"
                  
                  color="inherit"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Box>
            </Toolbar>
          </Grid>
         
        
        </AppBar>
      </ThemeProvider>
      </Grid>
      
    
     
    </div>
  );
};

export default Topbar;
