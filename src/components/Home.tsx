import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const profilePic = require("../images/pawat_thairun_shirt.jpg");

function Home() {
  return (
    <Box className="w-100">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Hi, I'm Pawat.
          </Typography>
          <Typography variant="h4" gutterBottom>
            AKA Peter.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I’m a passionate software developer from Thailand with over 3 years
            of experience in web application development, specialising in
            front-end development using Angular and React.js.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={profilePic} alt="Pawat Treepoca" loading="lazy" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
