import React, { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Alert,
  CircularProgress,
  Paper
} from '@mui/material';
import { Email as EmailIcon, Download as DownloadIcon } from '@mui/icons-material';

// Constants for better maintainability
const API_ENDPOINTS = {
  NEWSLETTER: '/api/newsletter.php',
  DOWNLOAD_GUIDE: '/guide.pdf'
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const validateEmail = useCallback((email) => {
    if (!email.trim()) {
      return { isValid: false, message: 'Please enter your email.' };
    }
    if (!EMAIL_REGEX.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address.' };
    }
    return { isValid: true, message: '' };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setStatus({ type: 'error', message: validation.message });
      return;
    }

    setIsSubmitting(true);

    // For now, simulate API success without actual API call
    // This allows you to test the PDF download functionality
    setTimeout(() => {
      // Save email to localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('newsletterSubmissions') || '[]');
      submissions.push({
        email,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('newsletterSubmissions', JSON.stringify(submissions));

      setStatus({
        type: 'success',
        message: 'Thank you! Your guide is ready for download.'
      });
      setEmail('');
      setHasSubmitted(true);

      // Auto-download after successful submission
      setTimeout(() => {
        handleDownload();
      }, 500);

      setIsSubmitting(false);
    }, 800);
  };

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Method 1: Fetch the PDF file
      const response = await fetch(API_ENDPOINTS.DOWNLOAD_GUIDE);

      if (!response.ok) {
        throw new Error(`Failed to load PDF: ${response.status}`);
      }

      // Convert to blob
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ONAS_Global_Business_Proposal.pdf';

      // Add to page and trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 100);

    } catch (error) {
      console.error('Download error:', error);

      // Fallback method: Direct download
      const link = document.createElement('a');
      link.href = API_ENDPOINTS.DOWNLOAD_GUIDE;
      link.download = 'ONAS_Global_Business_Proposal.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  // Test if PDF is accessible
  const testPDFAccess = () => {
    fetch(API_ENDPOINTS.DOWNLOAD_GUIDE)
      .then(response => {
        if (response.ok) {
          setStatus({
            type: 'success',
            message: '✅ PDF is accessible! Testing download...'
          });
          // Test download after confirming access
          setTimeout(handleDownload, 1000);
        } else {
          setStatus({
            type: 'error',
            message: `❌ PDF not found (Status: ${response.status}). Make sure guide.pdf is in public folder.`
          });
        }
      })
      .catch(error => {
        setStatus({
          type: 'error',
          message: `❌ Error: ${error.message}`
        });
      });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: { xs: 6, md: 2 },
        px: { xs: 3, sm: 5, md: 2 },
        textAlign: 'center',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        maxWidth: 1200,
        mx: 'auto',
        my: 4
      }}
    >
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '1.75rem', md: '1.25rem' },
            color: 'primary.main'
          }}
        >
          Your AI Solution Provider
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 5,
            fontSize: { xs: '1rem', md: '0.75rem' },
            lineHeight: 1.7,
            color: 'text.secondary'
          }}
        >
          ONAS does more than "aspire" to solve your AI needs, we stand ready
          to be your partner for all your data, AI, IT, and digital solution initiatives.
          We continuously strive to bring the best-in-class solutions to our clients by
          adopting the latest innovations and custom solutions tailored to each client's unique needs.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mb: 2,
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <TextField
            type="email"
            variant="outlined"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
            sx={{
              flex: 1,
              maxWidth: 400,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.default',
                borderRadius: 1
              }
            }}
            size="medium"
            InputProps={{
              startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
            }}
            helperText="We'll send the guide to this email"
            error={status.type === 'error'}
            aria-label="Email address"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting || !email}
            sx={{
              minWidth: 200,
              height: 56,
              fontWeight: 600,
              textTransform: 'none',
              px: 4,
              borderRadius: 1
            }}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
          >
            {isSubmitting ? 'Processing...' : 'Get Your Free Guide'}
          </Button>
        </Box>

        {status.message && (
          <Alert
            severity={status.type}
            sx={{
              mb: 3,
              textAlign: 'left',
              '& .MuiAlert-message': {
                width: '100%'
              }
            }}
            onClose={() => setStatus({ type: '', message: '' })}
          >
            {status.message}
          </Alert>
        )}





        <Typography
          variant="caption"
          component="p"
          sx={{
            display: 'block',
            mt: 4,
            color: '#0FFCBE',
            fontSize: '0.75rem',
            opacity: 0.8,
            lineHeight: 1.5
          }}
        >
          By submitting your email, you agree to receive our newsletter and occasional updates.
          We respect your privacy. Unsubscribe at any time. Your data is protected and never shared with third parties.
        </Typography>

        {/* Debug info */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 2,
            color: 'text.secondary',
            fontSize: '0.7rem',
            opacity: 0.6
          }}
        >
        </Typography>
      </Box>
    </Paper>
  );
}