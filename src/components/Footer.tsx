import { Box, Grid, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className="border-t-2 mt-4 py-8">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6} className="text-left">
          © 2022 Pawat Treepoca.
        </Grid>
        <Grid item xs={6} className="text-right">
          Built with{" "}
          <Link href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React.js.
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
