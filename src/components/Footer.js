import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from './Logo';
import LinkWithIcon from './LinkWithIcon';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
  return (
    <Typography>
    <Box
    sx={{
        width: "100%",
        bgcolor: "var(--light-green)",
    }}>
        <Box sx={{display: "flex"}}>
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
                <Typography variant="body" sx={{pt: 1, pb: 3}}>2942 Finch Ave E unit 117 2nd floor, Toronto, ON M1W 2N2</Typography>
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
                        <Typography variant="body" sx={{ pb: 1 }}>9-5pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>Closed</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9-5pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9-5pm</Typography>
                        <Typography variant="body" sx={{ pb: 1 }}>9-12pm</Typography>
                        <Typography variant="body">Closed</Typography>
                    </Box>
                </Box>
            </Box>
            {/* <Box>
                <Typography variant="header">Pages</Typography>
            </Box> */}
        </Box>
    </Box>
    </Typography>
  );
}

export default Footer;

