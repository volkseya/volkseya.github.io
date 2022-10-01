import React, { useState } from "react";
import { TextField, Typography, Box, Paper, Grid, Button } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you’d like to chat about a project or just have question, please fill
        in the form below. I aim to get back within 2 days.
      </Typography>
      <Paper className="p-8">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              value={name}
              onChange={onNameChange}
              label="Name"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              value={email}
              onChange={onEmailChange}
              label="Email"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={subject}
              onChange={onSubjectChange}
              label="Subject"
              className="w-full"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={message}
              onChange={onMessageChange}
              label="Message"
              className="w-full"
              multiline
              minRows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Send Message</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Contact;
