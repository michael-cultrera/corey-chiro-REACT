import React from 'react';
import { Box } from '@mui/material';
import MapBoxMap from '../components/MapBoxMap';

export default function ContactUs(){
  return (
    <Box
    sx={{
        px: 5,
        py: 5,
      }}>
        <Box>
        <p className="text-2xl font-bold">Location</p>
        <p className="pt-5 pb-2">68 Shaughnessy Blvd, North York, ON M2J 1J3</p>
      <MapBoxMap />
      </Box>
      <Box
      sx={{
        pt: 5,
      }}>
      <p className="text-2xl font-bold">Hours of Operation</p>
      <p className="pt-5 pb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p className="pb-2">Saturday: 9:00 AM - 1:00 PM</p>
      <p className="pb-2">Sunday: Closed</p>
      </Box>
    </Box>
  );
};

