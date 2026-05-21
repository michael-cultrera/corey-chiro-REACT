import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import FilledButton from "./FilledButton";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send(
        "service_a2ywdzf",
        "template_xigco3i",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "g50CaeZTMlf1-0D2L"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <Box sx={{ pb: 5 }}>
      <Typography variant="header" sx={{ textAlign: "center" }}>
        Get In Touch
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "200px", sm: "250px", md: "400px" },
          }}
        >
          <TextField
            name="name"
            label="Name"
            margin="normal"
            required
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            margin="normal"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </Box>

        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          margin="normal"
          required
          value={formData.message}
          onChange={handleChange}
          sx={{
            width: { xs: "85%", sm: "70%", md: "500px" },
            pb: 2,
          }}
        />

        <FilledButton buttonText="Send Message" />
      </form>
    </Box>
  );
};

export default GetInTouch;