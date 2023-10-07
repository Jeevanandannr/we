import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Loginpage = () => {
  const [OpenRegister, setOpenRegister] = useState(false);
  const [OpenReset, setOpenReset] = useState(false);
  const OpenRegisterDialog = () => {
    setOpenRegister(true);
    setOpenReset(false);
  };
  const OpenLoginDialog = () => {
    setOpenRegister(false);
  };

  const OpenResetDialog = () => {
    setOpenReset(true);
  };

  return (
    <div>
      {!OpenRegister && !OpenReset &&(
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/Icons/Weavers.jpg")}
                alt="Custom Icon"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Typography display="block" gutterBottom>
                Welcome to Weaver's Lungi's
              </Typography>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email or Phone Number"
                variant="outlined"
                placeholder="example@gmail.com"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="********"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <Button fullWidth variant="contained" color="error">
                Login
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
              }}
            >
              <Divider>
                <Chip label="or" />
              </Divider>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
              }}
            >
              <Typography variant="body1" display="block" fontSize="14px">
                Don't have an account?
                <span style={{ paddingLeft: "10px" }}>
                  <Link
                    component="button"
                    onClick={OpenRegisterDialog}
                    color="inherit"
                  >
                    Sign Up
                  </Link>
                </span>
              </Typography>
            </div>
            <Card style={{ backgroundColor: "#f5fdff" }}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="body1" display="block" fontSize="14px">
                    Forgot your Password?
                    <span style={{ paddingLeft: "10px" }}>
                      <Link
                        component="button"
                        onClick={OpenResetDialog}
                        color="inherit"
                      >
                        Reset It
                      </Link>
                    </span>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
        </Grid>
      )}

      {/* Register Page */}
      {OpenRegister && (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/Icons/Weavers.jpg")}
                alt="Custom Icon"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Typography display="block" gutterBottom>
                Create Your Account
              </Typography>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                placeholder="Full Name"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email or Phone Number"
                variant="outlined"
                placeholder="example@gmail.com"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="********"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Retype Password"
                variant="outlined"
                placeholder="********"
              />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <Button fullWidth variant="contained" color="error">
                Create Account
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
              }}
            >
              <Divider>
                <Chip label="or" />
              </Divider>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
              }}
            >
              <Typography variant="body1" display="block" fontSize="14px">
                Already have an account?
                <span style={{ paddingLeft: "10px" }}>
                  <Link
                    component="button"
                    onClick={OpenLoginDialog}
                    color="inherit"
                  >
                    Login
                  </Link>
                </span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
        </Grid>
      )}
      {OpenReset && (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <Typography display="block" gutterBottom>
                Reset Your Account
              </Typography>
            </div>

            <div style={{ paddingTop: "40px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email or Phone Number"
                variant="outlined"
                placeholder="example@gmail.com"
              />
            </div>

            <div style={{ paddingTop: "40px" }}>
              <Button fullWidth variant="contained" color="error">
                Reset
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
              }}
            >
              <Typography variant="body1" display="block" fontSize="14px">
                Don't have an account?
                <span style={{ paddingLeft: "10px" }}>
                  <Link
                    component="button"
                    onClick={OpenRegisterDialog}
                    color="inherit"
                  >
                    Sign Up
                  </Link>
                </span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
        </Grid>
      )}
    </div>
  );
};

export default Loginpage;
