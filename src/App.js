import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box} from "@mui/material";
// import CallIcon from '@mui/icons-material/Call';
import theme from "./theme";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import OutlinedButton from "./components/OutlinedButton";
import "./index.css";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";
import PatientForms from "./pages/PatientForms";
import About from "./pages/About";

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
            // justifyContent: 'space-between',
            alignItems: 'center', 
            width: '100%'
          }}>
            <Box sx={{ flex: 1 }} /> {/* Spacer */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
              <Logo width="160px" />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', }}>
              <OutlinedButton buttonText="Book Appointment"/>
              <OutlinedButton buttonText="416-497-8585"/>
            </Box>
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
