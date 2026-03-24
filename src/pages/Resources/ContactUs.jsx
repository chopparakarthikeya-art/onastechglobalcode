import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

const services = ['ERP','Consulting', 'Staffing', 'Digital Transformation', 'Software Development','JAVA Technologies','SEO','Other'];
const offices = [
  {
    name: 'Hyderabad Office',
    company: 'ONAS Consulting Services Pvt Ltd',
    address: 'Vasavi Sky City, 8th Floor, Quick Start-CoWorking, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.437211628847!2d78.36212117369062!3d17.438775801325626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS%20Consulting%20Services!5e0!3m2!1sen!2sus!4v1759363285471!5m2!1sen!2sus'
  },
  {
    name: 'Chennai Office',
    company: 'ONAS Global Services Pvt Ltd',
    address: 'GREETA TOWERS, Industrial Estate, 1st Floor, Thirumalai Nagar, Perungudi, Chennai, TN, India – 600096',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.57706122955!2d80.24336!3d12.95338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1ad4ff789f%3A0xc9efd3550dfc21c2!2s4th%20St%2C%20Manikkodi%20Srinivasan%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1759363488370!5m2!1sen!2sin'
  },
  {
    name: 'USA Office',
    company: 'ONAS Global Services LLC',
    address: '701 Tillery Street Unit 12 #3338, Austin, TX 78702',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9999999999995!2d-97.7430607!3d30.2649176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5bcecd5a2b1%3A0xabcdef123456!2s701%20Tillery%20St%2C%20Austin%2C%20TX%2078702!5e0!3m2!1sen!2sus!4v1695977104321!5m2!1sen!2sus'
  }
];

// Updated with your EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_iyhn3om'; // Your service ID
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_airu3dh'; // oTemplate for user confirmation (Contact Us)
const EMAILJS_USER_TEMPLATE_ID = 'template_17ujefq'; // Template for admin notification (Auto-Reply)
const EMAILJS_PUBLIC_KEY = 'SP7FmVESGAZ0wXGhK'; // Your public key

export default function ContactUs() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';

    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.company.trim()) newErrors.company = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';

    return newErrors;
  };

  const sendEmailWithRetry = async (templateId, templateParams, emailType, retries = 2) => {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        console.log(`Attempt ${attempt + 1} to send ${emailType} email`);
        console.log(`${emailType} template params:`, templateParams);

        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          templateId,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        console.log(`${emailType} email sent successfully on attempt ${attempt + 1}:`, result);

        if (result.status === 200 || result.text === 'OK') {
          return { success: true, result };
        }
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed for ${emailType}:`, error);
        console.error('Error details:', {
          status: error.status,
          text: error.text,
          message: error.message
        });

        if (attempt === retries) {
          return {
            success: false,
            error: error.text || error.message || 'Email sending failed',
            code: error.status || 'UNKNOWN',
            details: error
          };
        }
        // Wait 1 second before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    return { success: false, error: 'Max retries exceeded' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      try {
        const dateTime = new Date();
        const date = dateTime.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        const time = dateTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        });

        // ========== CRITICAL UPDATE: MATCH YOUR TEMPLATE VARIABLES ==========
        // From your template HTML, I can see you use these EXACT variables:
        // {{from_name}}, {{from_email}}, {{phone}}, {{company}}, {{service}}, {{message}}, {{date}}, {{time}}

        // For ADMIN template (template_17ujefq) - Auto-Reply to admin
        const adminTemplateParams = {
          // These MUST match EXACTLY what's in your template
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company,
          service: formData.service,
          message: formData.message,
          date: date,
          time: time,

          // EmailJS also needs these for sending
          to_email: 'sales@onasglobal.com',
          reply_to: formData.email,
          subject: `New Contact Request from ${formData.company}`,

          // Add fallbacks just in case
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email
        };

        // For USER template (template_airu3dh) - Need to see its variables
        // Let me make an educated guess based on common patterns
        const userTemplateParams = {
          // Common user template variables - you need to check your actual template
          to_email: formData.email,
          to_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          date: date,

          // Email configuration
          reply_to: 'sales@onasglobal.com',
          subject: 'Thank you for contacting ONAS Global Services',
          from_name: 'ONAS Global Services',

          // Try these common variables
          first_name: formData.firstName,
          last_name: formData.lastName,
          user_name: `${formData.firstName} ${formData.lastName}`,
          customer_name: `${formData.firstName} ${formData.lastName}`,

          // Add the same variables as admin template as fallback
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          time: time
        };

        console.log('=== SENDING EMAILS ===');
        console.log('Admin template params:', adminTemplateParams);
        console.log('User template params:', userTemplateParams);

        // Send both emails in parallel
        const [adminResult, userResult] = await Promise.all([
          sendEmailWithRetry(EMAILJS_ADMIN_TEMPLATE_ID, adminTemplateParams, 'ADMIN'),
          sendEmailWithRetry(EMAILJS_USER_TEMPLATE_ID, userTemplateParams, 'USER')
        ]);

        console.log('=== EMAIL RESULTS ===');
        console.log('Admin result:', adminResult);
        console.log('User result:', userResult);

        let successMessage = '';
        let severity = 'success';

        if (adminResult.success && userResult.success) {
          successMessage = 'Thank you! Your message has been sent successfully. A confirmation email has been sent to your email address.';
          severity = 'success';
        } else if (adminResult.success && !userResult.success) {
          // User email failed but admin email succeeded
          successMessage = 'Message sent to our team successfully. Our team will contact you soon.';
          severity = 'success';
          console.warn('User email failed:', userResult.error);
        } else if (!adminResult.success && userResult.success) {
          // Admin email failed but user email succeeded
          successMessage = 'Confirmation sent to your email. There was an issue notifying our team. Please contact us directly at sales@onasglobal.com.';
          severity = 'warning';
          console.error('Admin email failed:', adminResult.error);
        } else {
          // Both emails failed
          const errorMsg = 'Failed to send emails. Please try again or contact us directly.';
          console.error('Both emails failed:', {
            admin: adminResult.error,
            user: userResult.error
          });
          throw new Error(errorMsg);
        }

        setSnackbar({
          open: true,
          message: successMessage,
          severity: severity
        });

        // Reset form only if at least one email succeeded
        if (adminResult.success || userResult.success) {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: '',
          });
          setErrors({});
        }

      } catch (error) {
        console.error('Form submission error:', error);
        setSnackbar({
          open: true,
          message: `Sorry, there was an error: ${error.message || 'Please try again or contact us directly at sales@onasglobal.com.'}`,
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box color="#0B4C74" sx={{
      px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      mx: 'auto',
      maxWidth: 1600,
    }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
        Contact Us
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
        {/* Left: Map & Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 3 }}>
            <iframe
              src={offices[0].mapSrc}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              title="Hyderabad Office"
              aria-label="Map showing Hyderabad office location"
            ></iframe>
          </Box>
          <Box sx={{ backgroundColor: '#0a3d62', color: '#fff', p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Email Us:</strong>{' '}
              <a href="mailto:sales@onasglobal.com" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                sales@onasglobal.com
              </a>
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Call Us:</strong>{' '}
              <a href="tel:+91-984 800 4777" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                +91-984 800 4777
              </a>{' '}
              &{' '}
              <a href="tel:+1 607-326-2406" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                +1 607-326-2406
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Development center:</strong> {offices[0].address}
            </Typography>
          </Box>
        </Box>

        {/* Right: Form */}
        <Box sx={{ flex: 1 }}>
          <Box
            ref={formRef}
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}
          >
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              onChange={handleChange}
              value={formData.firstName}
              error={!!errors.firstName}
              helperText={errors.firstName}
              disabled={loading}
              required
            />

            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              onChange={handleChange}
              value={formData.lastName}
              error={!!errors.lastName}
              helperText={errors.lastName}
              disabled={loading}
              required
            />

            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleChange}
              value={formData.email}
              error={!!errors.email}
              disabled={loading}
              required
              helperText={errors.email || "We'll send confirmation to this email"}
            />

            <TextField
              name="phone"
              label="Phone Number (Optional)"
              type="tel"
              fullWidth
              onChange={handleChange}
              value={formData.phone}
              error={!!errors.phone}
              helperText={errors.phone}
              disabled={loading}
              placeholder="+91 98765 43210"
              InputProps={{
                sx: {
                  '& .MuiInputBase-input::placeholder': {
                    opacity: 0.5,
                    color: 'text.secondary',
                  }
                }
              }}
            />

            <TextField
              name="company"
              label="Company Name"
              fullWidth
              onChange={handleChange}
              value={formData.company}
              error={!!errors.company}
              helperText={errors.company}
              disabled={loading}
              required
            />

            <TextField
              name="service"
              label="Looking For?"
              select
              fullWidth
              value={formData.service}
              onChange={handleChange}
              error={!!errors.service}
              helperText={errors.service}
              disabled={loading}
              required
            >
              <MenuItem value="">Select Service</MenuItem>
              {services.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
            </TextField>

            <TextField
              name="message"
              label="How Can We Help You?"
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
              value={formData.message}
              error={!!errors.message}
              helperText={errors.message}
              disabled={loading}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Global Offices */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6 }}>
          Our Global Presence
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
          {offices.map((office, i) => (
            <Box key={i} sx={{ flex: 1, backgroundColor: '#0a3d62', color: '#fff', borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column', minHeight: 400 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {office.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {office.company}
                </Typography>
                <Typography variant="body2">{office.address}</Typography>
              </Box>

              <Box sx={{ mt: 'auto' }}>
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: 8 }}
                  allowFullScreen
                  loading="lazy"
                  title={office.name}
                  aria-label={`Map showing ${office.name} location`}
                ></iframe>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={8000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}