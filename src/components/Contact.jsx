import React, { useState } from "react";
import { TextField } from '@mui/material';

function Contact() {
  const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')

  const onTextChange = (e) => setName(e.target.value);

  return (
    <TextField
      value={name}
      onChange={onTextChange}
      label="Name"
    />
  )
}

export default Contact