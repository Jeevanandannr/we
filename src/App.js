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

function App(props) {
  return (
    <div>
      {!props.openDialog && (
        <Fragment>
          <Topbar />

          <Header />
        </Fragment>
      )}
      {props.openDialog && (
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Loginpage />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default App;
