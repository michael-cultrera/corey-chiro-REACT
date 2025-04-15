import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import Logo from './Logo';
import LinkWithIcon from './LinkWithIcon';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <Typography>
    <Box
        sx={{
            width: "100%",
            bgcolor: "var(--light-green)",
            px: 5,
            pt: 4,
        }}>
        <Box sx={{display: "flex", gap: 20}}>
            <Box>
                <Box sx={{pb: 3}}>
                    <Logo width="120px"/>
                </Box>
                <Box sx={{ width: 'fit-content' }}>
                    <LinkWithIcon 
                        href="tel:4164978585" 
                        color="var(--foreground-color)" 
                        hoverColor="var(--dark-green)" 
                        icon={<CallIcon/>} 
                        linkText="(416)-497-8585" 
                    />
                </Box>
                <Link
                    href="https://maps.google.com/maps?q=2942+Finch+Ave+E+unit+117+2nd+floor,+Toronto,+ON+M1W+2N2"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body" sx={{pb: 3, pt: 1,}}>2942 Finch Ave E unit 117 2nd floor, Toronto, ON M1W 2N2</Typography>
                </Link>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%'}}>
                    <Box>
                        <Typography variant="body" sx={{ pb: 1 }}>Monday</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Tuesday</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Wednesday</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Thursday</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Friday</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Saturday</Typography>
                        <Typography variant="body">Sunday</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body" sx={{ pb: 1 }}>Closed</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9:45-6pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Closed</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9:45-6pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9:45-3pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9:30-3pm</Typography>
                        <Typography variant="body">Closed</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="header_2">Links</Typography>
                <Link
                    href="/"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body" sx={{pt: 3, pb: 1,}}>Home</Typography>
                </Link>
                <Link
                    href="/about"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body" sx={{pb: 1}}>About</Typography>
                </Link>
                <Link
                    href="/patient-forms"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body" sx={{pb: 1}}>Patient Forms</Typography>
                </Link>
                <Link
                    href="/book-appointment"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body" sx={{pb: 1}}>Book An Appointment</Typography>
                </Link>
                <Link
                    href="/contact-us"
                    sx={{
                        color: "var(--foreground-color)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        '&:hover': {
                        color: "var(--dark-green)"
                        },
                    }}
                    >
                    <Typography variant="body">Contact</Typography>
                </Link>
            </Box>
        </Box>
        <Divider sx={{ my: 2, width: '100%', backgroundColor: 'black' }} />
        <Typography variant="body" sx={{ textAlign: 'center', pb: 2, }}><CopyrightIcon sx={{fontSize: "1.1rem", pr: 0.5, pb: 0.2,}}/>Copyright 2025, All Rights Reserved by Kinect Chiropractic</Typography>
    </Box>
    </Typography>
  );
}

export default Footer;

