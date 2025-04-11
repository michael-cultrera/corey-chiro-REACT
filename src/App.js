import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import theme from "./theme";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";
import PatientForms from "./pages/PatientForms";
import About from "./pages/About";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkWithIcon from "./components/LinkWithIcon";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <body>
        <Router>
          <ThemeProvider theme={theme}>
            <Typography>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: {xs: '80%', sm: '100%'},
                py: 2,
                gap: 4,
                mx: 'auto',
              }}>
                <LinkWithIcon 
                  href="/book-appointment" 
                  color="var(--foreground-color)" 
                  hoverColor="var(--dark-green)" 
                  icon={<CalendarMonthIcon/>} 
                  linkText="Book An Appointment" 
                />
                <LinkWithIcon 
                  href="tel:4164978585" 
                  color="var(--foreground-color)" 
                  hoverColor="var(--dark-green)" 
                  icon={<CallIcon/>} 
                  linkText="(416)-497-8585" 
                />
                <Box sx={{
                  display: { xs: 'none', sm: 'block' }
                }}>
                  <LinkWithIcon 
                    href="mailto:dr.coreycultrera@gmail.com"
                    color="var(--foreground-color)"
                    hoverColor="var(--dark-green)"
                    icon={<EmailIcon/>}
                    linkText="Email Us"
                  />
                </Box>
              </Box>
            </Typography>
            <Navbar />
            {children}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/patient-forms" element={<PatientForms />} />
            </Routes>
            <Footer/>
          </ThemeProvider>
        </Router>
      </body>
    </html>
  );
}
