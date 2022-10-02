import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

function Home() {
  return (
    <Box className="w-100">
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Hi, I'm Pawat.
          </Typography>
          <Typography variant="h4" gutterBottom>
            AKA Peter.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I’m a passionate software developer from Bangkok, Thailand with over
            3 years of experience in web application development, specialising
            in front-end development using Angular and React.js.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/images/pawat_thairun_shirt.jpg"
            alt="Pawat Treepoca"
            loading="lazy"
            className="w-100"
          />
        </Grid>
        <Grid item xs={12} className="text-center">
          <Typography variant="h3" gutterBottom>
            WORKS
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/images/CH-HP-IMG3.png"
            alt="Credit Hound Clould"
            loading="lazy"
            className="w-100"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            <Box
              sx={{
                backgroundImage: "url('/images/chc-logo.svg')",
                width: 171,
                height: 84,
              }}
            />
          </Typography>
          <Typography variant="h4" gutterBottom>
            Credit Hound Cloud
          </Typography>
          <Typography variant="body1" gutterBottom>
            Credit Hound is a cloud based solution that provides automation for
            your collections management processes. Designed to pick up where
            your Sage Accounting software leaves off, Credit Hound instantly
            shows how much you're owed and who you need to chase.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            <Link
              href="https://www.credithoundcloud.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src="/images/photo_thai_run.png"
              alt="Photo Thai Run"
              loading="lazy"
              className="w-100"
            />
          }
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            <img
              src="/images/thairun-logo.png"
              alt="Credit Hound Clould"
              loading="lazy"
              style={{ width: 100 }}
            />
          </Typography>
          <Typography variant="h4" gutterBottom>
            Photo Thai Run
          </Typography>
          <Typography variant="body1" gutterBottom>
            Photo Thai Run is a platform to connect photographers and runners in
            races. Photographers can upload photos and runners can purchase them
            by using their face to search for their photos.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            <Link
              href="https://photo.thai.run/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
