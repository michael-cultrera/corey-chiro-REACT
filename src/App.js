import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box} from "@mui/material";
import theme from "./theme";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import OutlinedButton from "./components/OutlinedButton";
import "./index.css";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";
import PatientForms from "./pages/PatientForms";
import About from "./pages/About";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <body>
        <Router>
          <ThemeProvider theme={theme}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            py: 2,
            gap: 2,
          }}>
              <OutlinedButton buttonText={<><CalendarMonthIcon sx={{mr: 1}}/>Book Appointment</>}/>
              <OutlinedButton buttonText={<><CallIcon sx={{mr: 1}}/>(416)-497-8585</>}/>
              <OutlinedButton buttonText={<><EmailIcon sx={{mr: 1}}/>Email Us</>}/>
            </Box>
            <Navbar />
            {children}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/patient-forms" element={<PatientForms />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </body>
    </html>
  );
}
