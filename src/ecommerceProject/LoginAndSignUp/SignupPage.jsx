import { Card, Grid, TextField,Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  const [users, setUsers] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confPass: "",
  });
  return (
    <React.Fragment>
      <Card sx={{ marginLeft: "33%", height: 500, width: 400, marginTop: 10 }}>
        <Grid container spacing={2} align="center" marginTop={5}>
          <Grid item xs={12}>
            <TextField label="enter name" />
          </Grid>
          <Grid item xs={12}>
            <TextField label=" enter mobile" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="enter email" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="enter password" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="confirm password" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained"> Signup</Button>
          </Grid>
          <Grid item xs={12}>
            Already have an account? 
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};
