import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
 
// Lucide Icons
import {
  Server,
  Users,
  Link,
  Wrench,
  Headphones,
  BarChart3,
  Compass,
  Settings,
  Cloud,
  BookOpen,
  Layers,
  Zap,
  GitBranch,
  Database,
  ShoppingCart,
  TrendingUp,
  Shield,
 
} from 'lucide-react';
import Button from '@mui/material/Button';
 
 
 

const MicrosoftDynamics365 = () => {
  const dynamicsKeywords = [
    'Microsoft Dynamics 365 consulting services',
    'Dynamics 365 implementation partner',
    'Dynamics 365 ERP implementation',
    // ... rest of your keywords
  ].join(', ');
 
  // Your existing offerings, endToEnd, valueDelivery, whyMatters arrays
  const offerings = [
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: 'Dynamics 365 Implementation Services',
      text: 'End-to-end implementation of Dynamics 365 Finance & Operations, Business Central, and Customer Engagement apps tailored to your business needs.',
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Dynamics 365 CRM Services',
      text: 'Transform customer relationships with Sales, Marketing, and Customer Service modules. Automate lead-to-cash processes and enhance customer experiences.',
    },
    {
      icon: <Link className="w-12 h-12 text-purple-600" />,
      title: 'Power Platform Integration',
      text: 'Extend Dynamics 365 with Power Apps, Power Automate, and Power BI. Create custom solutions without complex coding requirements.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: 'Dynamics 365 Customization',
      text: 'Customize forms, workflows, plugins, and business processes. Build tailored solutions that align perfectly with your unique business requirements.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'Managed Services & Support',
      text: '24/7 proactive monitoring, incident management, user support, and continuous optimization for your Dynamics 365 environment.',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
      title: 'Dynamics 365 Analytics & BI',
      text: 'Transform data into insights with Power BI dashboards, advanced analytics, and AI-driven business intelligence for better decision-making.',
    },
  ];
 
  const endToEnd = [
    {
      icon: <Compass className="w-12 h-12 text-indigo-600" />,
      title: 'Discovery & Assessment',
      text: 'Analyze business processes, define requirements, and create a strategic roadmap for Dynamics 365 implementation success.',
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-600" />,
      title: 'Configuration & Development',
      text: 'Configure modules, develop customizations, and build integrations to create a tailored Dynamics 365 solution.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-pink-600" />,
      title: 'Data Migration & Integration',
      text: 'Securely migrate data from legacy systems and integrate with existing applications for seamless operations.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      title: 'Training & Change Management',
      text: 'Comprehensive user training, documentation, and change management strategies to ensure user adoption.',
    },
    {
      icon: <Layers className="w-12 h-12 text-cyan-600" />,
      title: 'Go-Live & Hypercare',
      text: 'Managed go-live execution with intensive post-implementation support to ensure smooth transition.',
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: 'Continuous Optimization',
      text: 'Regular system health checks, performance tuning, and feature updates for ongoing improvement.',
    },
  ];
 
  const valueDelivery = [
    {
      icon: <GitBranch className="w-12 h-12 text-blue-600" />,
      title: 'Microsoft Gold Partner',
      text: 'Certified Microsoft partner with proven expertise in Dynamics 365 implementations across industries.',
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: 'Accelerated Time-to-Value',
      text: 'Rapid implementation methodologies that deliver results faster while minimizing business disruption.',
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Unified Platform Approach',
      text: 'Seamless integration across Dynamics 365 apps and Power Platform for a cohesive user experience.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-600" />,
      title: 'Flexible Delivery Models',
      text: 'Onshore, offshore, and hybrid delivery models to match your project scope, timeline, and budget requirements.',
    },
  ];
 
  const whyMatters = [
    'Unifies CRM, ERP, and productivity tools into a single intelligent platform',
    'Enhances decision-making with AI-powered insights and predictive analytics',
    'Improves operational efficiency through process automation and workflows',
    'Delivers personalized customer experiences across all touchpoints',
    'Scales seamlessly with your business from SMB to enterprise',
    'Integrates naturally with Microsoft 365, Teams, and Azure ecosystem',
    'Reduces IT complexity with cloud-native architecture and regular updates'
  ];
 
  return (
    <>
      <Helmet>
        <title>Microsoft Dynamics 365 Consulting Services | AI-Powered ERP & CRM Implementation | ONAS Global</title>
        <meta name="description" content="ONAS provides expert Microsoft Dynamics 365 consulting services with AI integration, ERP implementation, CRM setup, and managed services. Certified Microsoft partner serving global enterprises." />
        <meta name="keywords" content={dynamicsKeywords} />
      </Helmet>
 
      <Box color="#0b2b4b" fontFamily="Poppins, Montserrat, sans-serif">
     
        {/* Simple Hero Section - Replaces HeroMain */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0b2b4b 0%, #113b5b 100%)',
            color: 'white',
            py: { xs: 8, md: 12 },
            px: { xs: 2, md: 4 },
            textAlign: 'center',
            mt:"50px"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '2rem', md: '2rem' } }}>
              Transform Your Business With Microsoft Dynamics 365
            </Typography>
            <Typography variant="h7" sx={{ maxWidth: 800, mx: 'auto', mb: 4, fontSize: { xs: '1rem', md: '1rem' }, opacity: 0.9 }}>
              Microsoft Dynamics 365 is a portfolio of AI-powered, cloud-based CRM and ERP business applications designed to connect data, teams, and processes. It enables organizations to manage sales, customer service, finance, and supply chain operations using tools like Dynamics 365 Sales, Customer Insights, and Business Central.
            </Typography><br></br>
            <br></br>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
             
            <Button variant="contained" href="/resources/contact-us">
        Contact Us
      </Button>
 
            </Box>
          </motion.div>
        </Box>
 
        {/* Secondary Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: { xs: 4, md: 2 },
            my: 12,
            px: { xs: 2, md: 2, lg: 8 },
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <box>
              <Typography variant="h7" color="#113b5b" sx={{ fontWeight: 700 }}>
              Intelligent Business Applications That Drive Growth
            </Typography>
            <img width={400} height={450} src="https://www.dynamicssquare.com/img/Dynamics-365-overview.svg"  alt="" />
            </box>
 
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%' }}
            viewport={{ once: true }}
          >
            <Box sx={{ width: { xs: '100%', md: '85%' } }}>
              <Typography sx={{ mb: 2 }}>
                As a certified Microsoft Dynamics 365 partner, we deliver comprehensive implementation, customization,
                and support services across the entire Dynamics 365 ecosystem. Our experts specialize in aligning
                Dynamics 365 Finance & Operations, Business Central, Sales, Customer Service, and Marketing modules
                with your business objectives.
              </Typography>
              <Typography>
                Every deployment is designed to maximize ROI, streamline operations, and provide actionable insights
                through AI-powered analytics. We help organizations of all sizes leverage the full power of the Microsoft
                Cloud—including Teams, Power Platform, and Azure—to create a truly connected business environment.
              </Typography>
            </Box>
          </motion.div>
        </Box>
 
        {/* Core Services Section */}
        <Box sx={{ py: 5, maxWidth: 1800, mx: 'auto' }}>
          <Typography variant="h6" color="#113b5b" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Comprehensive Dynamics 365 Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {offerings.map((item, i) => (
              <Grid item xs={12} sm={6} md={2} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      px: 3,
                      py: 4,
                      backgroundColor: '#fff',
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 3,
                      boxShadow: 3,
                      maxWidth: 280,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      style={{ marginBottom: 16 }}
                    >
                      {item.icon}
                    </motion.div>
                    <Typography variant="h7" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
 
        {/* End-to-End Services */}
        <Box sx={{ py: 5, backgroundColor: '#f8f9fa' }}>
          <Typography variant="h6" color="#113b5b" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our End-to-End Dynamics 365 Implementation Approach
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {endToEnd.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      px: 3,
                      py: 4,
                      backgroundColor: '#fff',
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 3,
                      boxShadow: 3,
                      maxWidth: 280,
                    }}
                  >
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                      {item.icon}
                    </motion.div>
                    <Typography variant="h7" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
 
        {/* Value Delivery Section */}
        <Box sx={{ py: 5 }}>
          <Typography variant="h6" color="#113b5b" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Why Partner With Us for Dynamics 365
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {valueDelivery.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      px: 3,
                      py: 4,
                      backgroundColor: '#fff',
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 3,
                      boxShadow: 3,
                      maxWidth: 250,
                    }}
                  >
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                      {item.icon}
                    </motion.div>
                    <Typography variant="h7" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
 
        {/* Why Dynamics 365 Matters */}
        <Box sx={{ py: 5, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
          <Typography color="#113b5b" variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
            Why Microsoft Dynamics 365 Matters for Your Business
          </Typography>
          <Box component="ul" sx={{ maxWidth: 800, mx: 'auto', textAlign: 'left', color: '#282825' }}>
            {whyMatters.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ marginBottom: '12px', fontSize: '0.875rem' }}
              >
                 {point}
              </motion.li>
            ))}
          </Box>
        </Box>
 
        {/* Key Features Section */}
        <Box sx={{ py: 5, maxWidth: 1000, mx: 'auto', px: 2 }}>
          <Typography variant="h6" color="#113b5b" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Key Dynamics 365 Modules We Support
            </Typography>
<Grid container spacing={2} justifyContent="center">
  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 3,
          py: 4,
          backgroundColor: '#fff',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 300,
        }}
      >
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }} 
          transition={{ type: 'spring', stiffness: 200 }} 
          style={{ marginBottom: 16 }}
        >
          <ShoppingCart className="w-12 h-12 text-blue-600" />
        </motion.div>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Dynamics 365 Sales
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
          AI-powered sales automation with Copilot, lead management, and predictive insights to close deals faster.
        </Typography>
      </Box>
    </motion.div>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 3,
          py: 4,
          backgroundColor: '#fff',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 300,
        }}
      >
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }} 
          transition={{ type: 'spring', stiffness: 200 }} 
          style={{ marginBottom: 16 }}
        >
          <TrendingUp className="w-12 h-12 text-green-600" />
        </motion.div>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Dynamics 365 Finance
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
          Real-time financial insights, budgeting, and compliance management for modern enterprises.
        </Typography>
      </Box>
    </motion.div>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 3,
          py: 4,
          backgroundColor: '#fff',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 300,
        }}
      >
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }} 
          transition={{ type: 'spring', stiffness: 200 }} 
          style={{ marginBottom: 16 }}
        >
          <Shield className="w-12 h-12 text-purple-600" />
        </motion.div>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Business Central
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
          All-in-one business management solution for SMBs covering finance, sales, and operations.
        </Typography>
      </Box>
    </motion.div>
  </Grid>
</Grid>
</Box>
</Box>
</>
);
};

export default MicrosoftDynamics365;
             
 
 