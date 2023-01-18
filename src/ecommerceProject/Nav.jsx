import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [data, setData] = useState([
    "Home",
    "Categories",
    "Contact",
    "Service",
    "LogOut",
  ]);
  return (
    <React.Fragment>
      <Card className="navCard">
        <CardContent>
          <Grid container spacing={1}>
            {data.map((item) => (
              <Grid item xs={2}>
                <Link to={`/${item.toLowerCase()}`} style={{textDecoration:"none"}}>
                  <Button className="navbtn"
                    fullWidth
                    sx={{
                      backgroundColor: "black",
                      color: "whitesmoke",
                      marginTop: 2,
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              </Grid>
            ))}
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
