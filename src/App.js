import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";
import Topbar from "./Component/Topbar";
import Header from "./Component/Header";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loginpage from "./Login/Loginpage";
import Cart from "./Cart/Cart";

import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

function App(props) {


  return (
    
    <div className="app-container">
     <Loginpage />
    </div>
  );
}

export default App;
