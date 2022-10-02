import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { send } from "emailjs-com";
import { useForm, SubmitHandler } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

type EmailTemplateParams = {
  from_name: string;
  from_email: string;
  to_name: string;
  subject: string;
  message: string;
  reply_to: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailTemplateParams>();
  const [snackbar, setSnackbar] = useState({
    open: false,
    success: false,
  });
  const [sendingEmail, setSendingEmail] = useState(false);

  const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
  const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
  const userId = `${process.env.REACT_APP_EMAILJS_USER_ID}`;

  const onSubmit: SubmitHandler<EmailTemplateParams> = (data) => {
    setSendingEmail(true);
    send(serviceId, templateId, data, userId)
      .then(() => {
        setSnackbar({ open: true, success: true });
      })
      .catch(() => {
        setSnackbar({ open: true, success: false });
      })
      .finally(() => {
        setSendingEmail(false);
      });
  };

  const handleCloseSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box className="w-100 p-8">
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you’d like to ask me some questions about anything, feel free to
        contact me by filling in the form below. I'll reply as soon as I can.
      </Typography>
      <Paper className="p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("from_name", { required: true })}
                label="Name"
                className="w-full"
                required
                error={!!errors.from_name}
                helperText={
                  errors.from_name?.type === "required" && "Name is required"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                label="Email"
                className="w-full"
                required
                error={!!errors.from_email}
                helperText={errors.from_email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("subject", { required: true })}
                label="Subject"
                className="w-full"
                required
                error={!!errors.subject}
                helperText={
                  errors.subject?.type === "required" && "Subject is required"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("message", { required: true })}
                label="Message"
                className="w-full"
                multiline
                minRows={4}
                required
                error={!!errors.message}
                helperText={
                  errors.message?.type === "required" && "Message is required"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={sendingEmail}
                endIcon={<SendIcon />}
                loadingPosition="end"
              >
                Send Message
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
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
