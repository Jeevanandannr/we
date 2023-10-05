import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import App from "../App";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = useState(0);
  const [openDialog, setopenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const openlogin = () => {
    setopenDialog(true);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card position="static">
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={3}>
                  <img
                    src={require("../assets/Icons/Weavers.jpg")}
                    alt="Custom Icon"
                    style={{ height: "150px", width: "200px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Autocomplete
                    style={{ width: "500px" }}
                    options={options}
                    value={searchQuery}
                    onChange={(e, newValue) => setSearchQuery(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search"
                        variant="outlined"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <>
                              <SearchIcon color="action" />
                              {params.InputProps.startAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                  <div style={{paddingTop:"60px",paddingRight:'300px'}}>
                  <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs value={value} onChange={handleChange} centered>
                      <Tab label="Home" />
                      <Tab label="Products" />
                      <Tab label="Services" />
                      <Tab label="Careers" />
                      <Tab label="Contact us" />
                    </Tabs>
                  </Box>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <IconButton size="large" onClick={openlogin}>
                    <Badge>
                      <PersonIcon />
                    </Badge>
                  </IconButton>
                  <IconButton size="large">
                    <Badge>
                      <AddShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
          </Grid>
        </CardContent>
      </Card>
      {openDialog && (
        <App open={open} handleClose={handleClose} openDialog = {true}/>
      )}
    </div>
  );
};

export default Header;
