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



const Loginpage = () =>{
    return(
        <div>
           <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
              <Grid item xs={12} sm={12} md={12} lg={10}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                    src={require("../assets/Icons/Weavers.jpg")}
                    alt="Custom Icon"
                    style={{ height: "150px", width: "200px" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
           </Grid>
        </div>
    )
}

export default Loginpage