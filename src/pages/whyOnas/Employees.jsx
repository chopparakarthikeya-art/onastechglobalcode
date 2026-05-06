import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function Employess() {
  const loginUrl = "https://onasit.peopleapps.in/"; 

  return (
    <Box sx={{
      textAlign: 'center', px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 20, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
    }}>
      <Typography color="#0B4C74" variant="h3">Employess</Typography>
      <Typography color="#282825" variant="h6">
        ONAS employees can log in to the HR Portal to download payslips, access 
        tax documents, view employee-related information, and record attendance 
        (punch-in/punch-out).
      </Typography>
      
      <Box
        component="img"
        src="/onas-employees.png"
        alt="onas-employees"
        sx={{
          width: '100%',
          maxWidth: '1000px',
          height: 'auto',
          mt: 4, 
          mb: 2,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      
      <Button
        variant="contained"
        href={loginUrl}
        sx={{
          backgroundColor: '#0B4C74',
          color: 'white',
          fontSize: '1.1rem',
          padding: '8px 32px',
          borderRadius: '12px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 'fit-content',
          '&:hover': {
            backgroundColor: '#063753',
          },
        }}
      >
        Employees Login
      </Button>
    </Box>
  );
}