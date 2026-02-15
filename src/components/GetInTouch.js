import { Box, TextField, Button, Typography } from "@mui/material";
import FilledButton from "./FilledButton";

const GetInTouch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{ pb: 5, }}>
      <Typography variant="header" sx={{ textAlign: "center" }}>Get In Touch</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: { xs: "200px", sm: "250px", md: "400px" } }}>
          <TextField
            label="Name"
            margin="normal"
            required
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '&:hover fieldset': {
                  borderColor: 'var(--dark-green)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--dark-green)',
                },
              },
              '& label.Mui-focused': {
                color: 'var(--dark-green)',
              },
            }}
          />
          <TextField
            label="Email"
            type="email"
            margin="normal"
            required
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '&:hover fieldset': {
                  borderColor: 'var(--dark-green)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--dark-green)',
                },
              },
              '& label.Mui-focused': {
                color: 'var(--dark-green)',
              },
            }}
          />
        </Box>
        <TextField
          label="Message"
          multiline
          rows={4}
          margin="normal"
          required
          sx={{ width: { xs: "85%", sm: "70%", md: "500px" }, pb: 2, 
             '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '&:hover fieldset': {
                  borderColor: 'var(--dark-green)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--dark-green)',
                },
              },
              '& label.Mui-focused': {
                color: 'var(--dark-green)',
              },
            }}
        />
        <FilledButton buttonText="Send Message" />
      </form>
    </Box>
  );
};

export default GetInTouch;
