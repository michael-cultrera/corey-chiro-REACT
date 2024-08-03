import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import "./index.css";
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <body>
        <Router>
          <ThemeProvider theme={theme}>
            <Logo />
            <Navbar />
            {children}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </body>
    </html>
  );
}