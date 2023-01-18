import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { HomeContent } from "./HomeContent/HomeContent";
import { Landing } from "./LeftNavCompo/Landing";
import { LeftNav } from "./LeftNavCompo/LeftNav";
export const HomePage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "darkgrey" }} className="leftnvcrd">
            <CardContent>
              {/* <Landing/> */}
              <LeftNav/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <HomeContent />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
