import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { send } from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../emailjs.constants"

function Contact() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    success: false,
  });
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    to_name: "Pawat Treepoca",
    subject: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then(() => {
        setSnackbar({ open: true, success: true });
      })
      .catch(() => {
        setSnackbar({ open: true, success: false });
      });
  };

  const handleCloseSnackbar = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you’d like to ask me some questions about anything, feel free to
        contact me by filling in the form below. I'll reply as soon as I can.
      </Typography>
      <Paper className="p-8">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              label="Name"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="from_email"
              value={toSend.from_email}
              onChange={handleChange}
              label="Email"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="subject"
              value={toSend.subject}
              onChange={handleChange}
              label="Subject"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              value={toSend.message}
              onChange={handleChange}
              label="Message"
              className="w-full"
              multiline
              minRows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onSubmit}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        {snackbar.success ? (
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            The message was sent successfully.
          </Alert>
        ) : (
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            An error occured when sending the message.
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
}

export default Contact;
