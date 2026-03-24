import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
// Lucide Icons
import {
  Boxes,
  Database,
  Cloud,
  Factory,
  Headphones,
  Lightbulb,
  Cpu,
  Box as LucideBox,
  Brain,
} from 'lucide-react';
import HeroMain from '../../../components/HeroMain';

// Images
import SAPHeroImage from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
//import Image1 from '../../../assets/images/howWeHelp/ERP/sap/img1.jpg';
//import Image2 from '../../../assets/images/howWeHelp/ERP/sap/img2.jpg';
//import Image3 from '../../../assets/images/howWeHelp/ERP/sap/img3.jpg';
//import Image4 from '../../../assets/images/howWeHelp/ERP/sap/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';

const SAP = () => {
  const offerings = [
    {
      icon: <Boxes className="w-12 h-12 text-blue-600" />,
      title: 'SAP S/4HANA Implementation',
      text: 'Deploy S/4HANA on-premises or cloud, optimized for Finance, Supply Chain, Procurement, and process automation.',
    },
    {
      icon: <Database className="w-12 h-12 text-green-600" />,
      title: 'SAP ECC to S/4HANA Migration',
      text: 'Transition from ECC using automated tools, data-cleansing frameworks, and phased deployment strategies for minimal disruption.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      title: 'SAP Cloud Integration',
      text: 'Integrate SAP with Salesforce, Azure, AWS via CPI, IDoc, REST/OData connectors for seamless data exchange.',
    },
    {
      icon: <Factory className="w-12 h-12 text-orange-600" />,
      title: 'Industry Specific SAP Solutions',
      text: 'Implement SAP modules for Retail, Utilities, Manufacturing, and Healthcare using industry-aligned best practices.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'SAP Managed Services & Support',
      text: '24/7 monitoring, patch deployment, incident handling, and continuous enhancements under flexible SLA models.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Advisory Services',
      text: 'Increase the value of your SAP investments with our thought leadership & expertise. Whether it is implementations, rollouts, or cost-effective support models, our aim is to help you identify success opportunities.',
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-600" />,
      title: 'BTP-Enabled Digital Transformation',
      text: 'Unlock a comprehensive approach to digital transformation by integrating SAP BTP into your ecosystem. Our expertise, resources, and dedication are ever ready to help you navigate the complexities.',
    },
    {
      icon: <LucideBox className="w-12 h-12 text-pink-600" />,
      title: 'SAP Cloud ERP',
      text: 'Designed for fast-growing mid-market enterprises, SAP Cloud ERP enables rapid, cost-effective, and simplified ERP adoption. With Techwave\'s Delivery eXcellence (DX) methodology, you can accelerate deployment, reduce complexity, and harness the full potential of SAP Public Cloud.',
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: 'Intelligent Data + AI',
      text: 'Transform your business and unlock new opportunities by harnessing the power of Data & AI to generate actionable insights. Staying competitive is now a click-away with our team of seasoned experts.',
    },
  ];

  return (
    <Box color="#0B4C74">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP Implementation, Support, Upgrade & Migration Services | Onas Global</title>
        <meta name="description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrades, and SAP S/4HANA migration. Expert SAP implementation partner selection, cost breakdown, and transformation roadmap guidance." />

        {/* Enhanced keywords with proper formatting - All 45 keywords included */}
        <meta name="keywords" content="SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP implementation project plan template, How long does SAP implementation take?, SAP implementation partner selection criteria, SAP implementation cost breakdown, SAP implementation team structure roles, SAP blueprint phase deliverables, Best practices for SAP data migration, SAP testing strategy (unit, integration, UAT), SAP AMS (Application Managed Services), SAP production support model L1 L2 L3, How to resolve SAP dumps and errors, SAP performance tuning guide, SAP security patches and notes implementation, SAP user authorization issues troubleshooting, SAP batch job monitoring and failure handling, SAP support ticket process best practices, SAP basis support checklist, Year-end closing support activities SAP FICO, SAP upgrade project plan, SAP enhancement package (EhP) installation guide, S/4HANA 2023 to S/4HANA 2028 upgrade, SAP upgrade downtime minimization strategies, SAP SUM (Software Update Manager) tool tutorial, Testing strategy for SAP upgrades, SAP upgrade impact on custom code (SPAU/SPDD), SAP upgrade vs migration difference, Post SAP upgrade checklist, SAP S/4HANA migration, New implementation vs conversion (Greenfield vs Brownfield), SAP Brownfield migration (SUM/DMO) steps, SAP S/4HANA migration cockpit deep dive, Custom code adaptation for S/4HANA (ADT), SAP Fiori migration in S/4HANA move, Data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS), S/4HANA readiness check report, SAP legacy system migration workbench (LSMW), Cost of migrating to SAP S/4HANA, SAP implementation vs upgrade vs migration, SAP RISE vs LEGACY model, SAP support models: break-fix vs managed services, SAP transformation roadmap, Choosing an SAP partner for implementation, AI SAP implementation, cloud-first SAP, digital transformation, SAP cloud ERP, AI-powered SAP, SAP S/4HANA, SAP migration, RISE with SAP, S/4HANA Cloud migration, SAP private cloud vs public cloud, S/4HANA implementation roadmap, SAP ECC to S/4HANA conversion, SAP Joule AI features, SAP BTP integration suite, SAP generative AI hub, SAP BTP low-code development, AI-powered ERP automation, SAP FICO, S/4HANA Finance, Central Finance implementation" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Enhanced Structured Data for better visibility */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Comprehensive SAP Services",
            "description": "Full lifecycle SAP services including implementation, support, upgrade, and migration",
            "url": "https://www.onasglobal.com/sap-services",
            "provider": {
              "@type": "Organization",
              "name": "Onas Global",
              "url": "https://www.onasglobal.com",
              "logo": "https://www.onasglobal.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/onasglobal",
                "https://twitter.com/onasglobal"
              ]
            },
            "serviceType": [
              "SAP Implementation",
              "SAP Support",
              "SAP Upgrade",
              "SAP Migration",
              "RISE with SAP",
              "S/4HANA Cloud Migration",
              "SAP BTP Integration",
              "SAP FICO Consulting"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Global"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SAP Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP S/4HANA Implementation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Production Support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP System Upgrade"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Migration Services"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.onasglobal.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.onasglobal.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SAP Services",
                "item": "https://www.onasglobal.com/sap-services"
              }
            ]
          })}
        </script>

        {/* FAQPage Schema with Implementation, Support, Upgrade, Migration questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SAP Activate methodology step-by-step?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP Activate methodology is a modular framework for SAP implementation, upgrade, and migration projects. It follows six phases: Prepare, Explore, Realize, Deploy, Run, and Optimize, providing ready-to-use templates, best practices, and guided configuration for successful SAP S/4HANA implementation methodology."
                }
              },
              {
                "@type": "Question",
                "name": "How does SAP production support model L1 L2 L3 work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP production support follows a tiered model: L1 handles basic user issues and ticket routing, L2 addresses functional and technical configuration problems, and L3 manages complex technical issues, enhancements, and system improvements. Our SAP AMS (Application Managed Services) provide comprehensive 24/7 support covering all tiers."
                }
              },
              {
                "@type": "Question",
                "name": "What are SAP upgrade downtime minimization strategies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement proven SAP upgrade downtime minimization strategies including parallel system preparation, delta change application optimization, database cloning techniques, and automated testing. Using SAP SUM (Software Update Manager) tool with advanced features, we typically reduce downtime by 40-60% compared to traditional approaches."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between SAP Greenfield vs Brownfield migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP Greenfield migration involves fresh implementation with new processes, while Brownfield migration (SUM/DMO) transfers existing system with historical data. Our experts help you choose based on business requirements, customization levels, and transformation goals, following the SAP S/4HANA migration checklist."
                }
              },
              {
                "@type": "Question",
                "name": "How long does SAP implementation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP implementation timelines vary from 4-12 months based on scope, modules, and customization. Following our optimized SAP implementation project plan template and SAP Activate methodology, we accelerate deployment while maintaining quality. We provide detailed SAP implementation cost breakdown and timeline projections during planning."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key differences between SAP RISE vs LEGACY model?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP RISE is a cloud-first subscription model bundling software, infrastructure, and services, while LEGACY refers to traditional on-premises or hosted implementations. We help evaluate both options within your SAP transformation roadmap and assist in choosing an SAP partner for implementation that fits your business model."
                }
              }
            ]
          })}
        </script>

        <meta property="og:title" content="SAP Implementation, Support, Upgrade & Migration Services | Onas Global" />
        <meta property="og:description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrades, and SAP S/4HANA migration." />
        <meta property="og:image" content={SAPHeroImage} />
        <meta property="og:url" content="https://www.onasglobal.com/sap-services" />
        <meta property="og:site_name" content="Onas Global" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@onasglobal" />
        <meta name="twitter:creator" content="@onasglobal" />
        <meta name="twitter:title" content="SAP Implementation, Support, Upgrade & Migration Services | Onas Global" />
        <meta name="twitter:description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS, S/4HANA upgrades, and SAP migration" />
        <meta name="twitter:image" content={SAPHeroImage} />

        <link rel="canonical" href="https://www.onasglobal.com/sap-services" />

        {/* Additional meta tags for better indexing */}
        <meta name="author" content="Onas Global" />
        <meta name="publisher" content="Onas Global" />
        <meta name="copyright" content="Onas Global" />
        <meta name="language" content="English" />
        <meta http-equiv="content-language" content="en" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* Technical SEO enhancements */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="apple-mobile-web-app-title" content="SAP Services" />
        <meta name="application-name" content="SAP Services" />
        <meta name="msapplication-TileColor" content="#0B4C74" />
        <meta name="theme-color" content="#0B4C74" />

        {/* Sitemap and indexing hints */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.onasglobal.com/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="SAP Services RSS" href="https://www.onasglobal.com/sap-services/rss.xml" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="bing-site-verification" content="YOUR_BING_VERIFICATION_CODE" />

        {/* Open Graph additional tags */}
        <meta property="og:updated_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-implementation" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-support" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-migration" />

        {/* Twitter additional tags */}
        <meta name="twitter:label1" content="Service Type" />
        <meta name="twitter:data1" content="SAP Implementation, Support, Upgrade, Migration" />
        <meta name="twitter:label2" content="Expertise Level" />
        <meta name="twitter:data2" content="Enterprise" />
      </Helmet>

      {/* Hero Section */}
      <HeroMain
        heading="SAP AI for Comprehensive SAP Services: Implementation, Support, Upgrade & Migration"
        description="Expert SAP services enhanced by SAP AI including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step guidance, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrade planning, SAP S/4HANA migration, and comprehensive SAP transformation roadmap development. We provide SAP implementation cost breakdown, SAP production support model L1 L2 L3, and SAP upgrade downtime minimization strategies—all augmented by SAP Business AI (Joule) and SAP's intelligent technologies."
        images={[SAPHeroImage, Image5, Image6]}
        buttons={[{ text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' }]}
      />

      {/* Secondary Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
          mb: 12,
          px: { xs: 2, md: 6, lg: 8 },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <Typography variant="h6" color="#0B4C74" sx={{ fontWeight: 700, textAlign: { xs: 'center', md: 'left' } }}>
            Full Lifecycle SAP Services
          </Typography>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 2 }}
        >
          <Box sx={{ width: '100%', fontFamily: 'Poppins, Montserrat, sans-serif', backgroundColor: '#fafafa', p: 3, borderRadius: 2, border: '1px solid #e8e8e8' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Typography variant="caption" sx={{ display: 'block', mb: 1.5, fontSize: '0.75rem', lineHeight: 1.8, color: '#424242' }}>
                  <strong>Implementation:</strong> <strong>SAP S/4HANA methodology</strong>, <strong>SAP Activate</strong>, project templates, team roles, cost breakdown.
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mb: 1.5, fontSize: '0.75rem', lineHeight: 1.8, color: '#424242' }}>
                  <strong>Support:</strong> <strong>SAP AMS</strong>, <strong>L1 L2 L3 support</strong>, performance tuning, security patches, user authorization.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="caption" sx={{ display: 'block', mb: 1.5, fontSize: '0.75rem', lineHeight: 1.8, color: '#424242' }}>
                  <strong>Upgrade:</strong> Project planning, <strong>S/4HANA 2023 to 2028 upgrade</strong>, <strong>downtime minimization</strong>, <strong>SAP SUM tool</strong>.
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', fontSize: '0.75rem', lineHeight: 1.8, color: '#424242' }}>
                  <strong>Migration:</strong> <strong>SAP S/4HANA migration</strong>, <strong>Greenfield vs Brownfield</strong>, <strong>data migration strategy</strong>, cost analysis.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>

      {/* SAP Cloud Offerings */}
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          py: 5,
          maxWidth: 1800,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: 'center',
          }}
        >
          Comprehensive SAP Services Portfolio
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
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
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.75rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SAP Service Lifecycle Management Section */}
      <Box sx={{ px: { xs: 2, md: 2 }, py: 6, maxWidth: 1200, mx: 'auto', backgroundColor: '#359F8E' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: '#0B4C74' }}>
          SAP Service Lifecycle Management
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                Implementation & Support Services
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                Comprehensive <strong>SAP S/4HANA implementation methodology</strong> following <strong>SAP Activate methodology</strong> with detailed <strong>project plan templates</strong>. Clear <strong>blueprint deliverables</strong> and <strong>testing strategy (unit, integration, UAT)</strong> implementation.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                <strong>SAP AMS (Application Managed Services)</strong> with <strong>production support model L1 L2 L3</strong>. <strong>Performance tuning guide</strong> and <strong>user authorization troubleshooting</strong>.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                <strong>Best practices for SAP data migration</strong> and <strong>basis support checklist</strong> for operations and <strong>year-end closing support activities SAP FICO</strong>.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                Upgrade & Migration Services
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                Comprehensive <strong>SAP upgrade project planning</strong> and <strong>S/4HANA 2023 to S/4HANA 2028 upgrade</strong> with <strong>downtime minimization strategies</strong>. <strong>SAP SUM tool tutorials</strong> and <strong>custom code impact management (SPAU/SPDD)</strong>.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                <strong>SAP S/4HANA migration checklists</strong>, evaluate <strong>Greenfield vs Brownfield</strong> options, execute <strong>SAP Brownfield migration (SUM/DMO)</strong> with <strong>migration cockpit expertise</strong>.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                Handle <strong>custom code adaptation (ADT)</strong>, <strong>SAP Fiori migration</strong>, and implement <strong>data migration strategy (LTMC, LSMW, S/4HANA DMIS)</strong>.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Schema Section for SEO */}
      <Box sx={{ px: { xs: 2, md: 4 }, py: 8, maxWidth: 1200, mx: 'auto', backgroundColor: '#f8fafc' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: '#0B4C74' }}>
          Frequently Asked Questions About SAP Services
        </Typography>

        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid container spacing={3}>
            {/* Column 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Implementation Methodology
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  <strong>SAP Activate methodology</strong> follows six phases: Prepare, Explore, Realize, Deploy, Run, and Optimize. Provides ready-to-use templates for successful <strong>SAP S/4HANA implementation</strong>.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Includes <strong>SAP blueprint phase deliverables</strong>, <strong>SAP testing strategy (unit, integration, UAT)</strong>, and <strong>best practices for SAP data migration</strong>.
                </Typography>
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Support & Operations
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  <strong>SAP production support model L1 L2 L3</strong> with comprehensive 24/7 <strong>SAP AMS (Application Managed Services)</strong>. Level 1 handles basic issues, Level 2 addresses configuration problems, Level 3 manages complex technical issues.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Includes <strong>SAP performance tuning guide</strong>, <strong>SAP user authorization issues troubleshooting</strong>, and <strong>SAP basis support checklist</strong> for ongoing operations.
                </Typography>
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Upgrade Services
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Comprehensive <strong>SAP upgrade project planning</strong> for <strong>S/4HANA 2023 to S/4HANA 2028 upgrade</strong>. Advanced <strong>SAP upgrade downtime minimization strategies</strong> reduce downtime by 40-60%.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  <strong>SAP SUM (Software Update Manager) tool tutorials</strong> and management of <strong>SAP upgrade impact on custom code (SPAU/SPDD)</strong>. Comprehensive <strong>testing strategy for SAP upgrades</strong>.
                </Typography>
              </Box>
            </Grid>

            {/* Column 4 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Migration Services
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  <strong>SAP S/4HANA migration</strong> with comprehensive checklists. Evaluate <strong>New implementation vs conversion (Greenfield vs Brownfield)</strong> options. Execute <strong>SAP Brownfield migration (SUM/DMO) steps</strong>.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  <strong>SAP S/4HANA migration cockpit deep dive</strong> expertise. Handle <strong>custom code adaptation for S/4HANA (ADT)</strong> and <strong>SAP Fiori migration</strong>.
                </Typography>
              </Box>
            </Grid>

            {/* Column 5 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Data & Tools
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Comprehensive <strong>data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS)</strong>. <strong>S/4HANA readiness check reports</strong> analysis and <strong>SAP legacy system migration workbench (LSMW) utilization</strong>.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Transparent <strong>cost of migrating to SAP S/4HANA analysis</strong> and comprehensive <strong>SAP implementation vs upgrade vs migration comparison</strong>.
                </Typography>
              </Box>
            </Grid>

            {/* Column 6 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2.5, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', borderBottom: '1px solid #0B4C74', pb: 0.75 }}>
                  Advisory & Strategy
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Comparative analysis of <strong>SAP RISE vs LEGACY model</strong> considering total cost of ownership, operational flexibility, and business agility. Guidance on <strong>SAP support models: break-fix vs managed services selection</strong>.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                  Development of comprehensive <strong>SAP transformation roadmap</strong> and assistance in <strong>choosing an SAP partner for implementation</strong>.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Additional SEO Content Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: 'center', color: '#0B4C74' }}>
          Comprehensive SAP Service Delivery Framework
        </Typography>

       <Grid container spacing={3}>
         {/* Column 1 - Implementation */}
         <Grid item xs={12} md={6}>
           <Box sx={{ p: 2.5, backgroundColor: '#E8F4F8', borderRadius: 2, boxShadow: 1, height: '100%', borderLeft: '4px solid #0B4C74' }}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74', fontSize: '1rem', pb: 0.75 }}>
               SAP Implementation Excellence
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               <strong>SAP S/4HANA implementation methodology</strong> following <strong>SAP Activate methodology</strong> with clear <strong>blueprint deliverables</strong> and comprehensive <strong>testing strategy (unit, integration, UAT)</strong>.
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Detailed <strong>project plan templates</strong>, <strong>best practices for SAP data migration</strong>, and thorough <strong>partner selection criteria</strong> evaluation.
             </Typography>
             <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Clear <strong>team structure roles</strong> definition and transparent <strong>cost breakdown</strong> with realistic implementation timelines.
             </Typography>
           </Box>
         </Grid>

         {/* Column 2 - Support */}
         <Grid item xs={12} md={6}>
           <Box sx={{ p: 2.5, backgroundColor: '#F0F7F4', borderRadius: 2, boxShadow: 1, height: '100%', borderLeft: '4px solid #2E7D32' }}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#2E7D32', fontSize: '1rem', pb: 0.75 }}>
               SAP Support & Maintenance
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Comprehensive <strong>SAP AMS (Application Managed Services)</strong> with multi-tier <strong>production support model L1 L2 L3</strong> coverage.
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Efficient <strong>support ticket process best practices</strong>, proactive <strong>performance tuning</strong>, and timely <strong>security patches implementation</strong>.
             </Typography>
             <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Comprehensive <strong>basis support checklist</strong>, specialized <strong>user authorization troubleshooting</strong>, and dedicated <strong>year-end closing support activities SAP FICO</strong>.
             </Typography>
           </Box>
         </Grid>

         {/* Column 3 - Upgrade */}
         <Grid item xs={12} md={6}>
           <Box sx={{ p: 2.5, backgroundColor: '#FEF7E0', borderRadius: 2, boxShadow: 1, height: '100%', borderLeft: '4px solid #FF9800' }}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#FF9800', fontSize: '1rem', pb: 0.75 }}>
               SAP Upgrade Services
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Comprehensive <strong>SAP upgrade project planning</strong> including <strong>enhancement package (EhP) installation</strong> and strategic <strong>S/4HANA 2023 to S/4HANA 2028 upgrade</strong> execution.
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Specialized <strong>upgrade downtime minimization strategies</strong> using advanced <strong>SAP SUM (Software Update Manager) tool</strong> techniques.
             </Typography>
             <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Thorough <strong>testing strategy for SAP upgrades</strong>, management of <strong>custom code impact (SPAU/SPDD)</strong>, and comprehensive <strong>post-upgrade checklists</strong>.
             </Typography>
           </Box>
         </Grid>

         {/* Column 4 - Migration */}
         <Grid item xs={12} md={6}>
           <Box sx={{ p: 2.5, backgroundColor: '#F3E5F5', borderRadius: 2, boxShadow: 1, height: '100%', borderLeft: '4px solid #7B1FA2' }}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#7B1FA2', fontSize: '1rem', pb: 0.75 }}>
               SAP Migration Expertise
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               End-to-end <strong>SAP S/4HANA migration</strong> services with comprehensive checklists covering both <strong>Greenfield vs Brownfield</strong> approaches.
             </Typography>
             <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Detailed <strong>SAP Brownfield migration (SUM/DMO) steps</strong> and <strong>custom code adaptation for S/4HANA (ADT)</strong>.
             </Typography>
             <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.85rem', color: '#333' }}>
               Comprehensive <strong>data migration strategy (LTMC, LSMW, S/4HANA DMIS)</strong>, thorough <strong>S/4HANA readiness check report</strong> analysis, and transparent <strong>cost analysis</strong>.
             </Typography>
           </Box>
         </Grid>
       </Grid>
      </Box>

      {/* Keyword Rich Footer Section */}
      <Box sx={{ backgroundColor: '#0B4C74', color: 'white', p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
          ONAS Comprehensive SAP Services
        </Typography>

        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <Typography variant="body2">
                • SAP S/4HANA implementation methodology<br/>
                • SAP Activate methodology guidance<br/>
                • SAP implementation project templates<br/>
                • SAP partner selection criteria<br/>
                • SAP implementation cost breakdown<br/>
                • SAP team structure roles<br/>
                • SAP blueprint deliverables<br/>
                • SAP data migration best practices<br/>
                • SAP testing strategy (unit, integration, UAT)<br/>
                • SAP AMS (Application Managed Services)<br/>
                • SAP production support model L1 L2 L3<br/>
                • SAP performance tuning<br/>
              </Typography>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <Typography variant="body2">
                • SAP security patches implementation<br/>
                • SAP user authorization troubleshooting<br/>
                • SAP batch job monitoring<br/>
                • SAP support ticket processes<br/>
                • SAP basis support checklist<br/>
                • Year-end closing support SAP FICO<br/>
                • SAP upgrade project planning<br/>
                • SAP EhP installation guidance<br/>
                • S/4HANA upgrade services<br/>
                • SAP upgrade downtime strategies<br/>
                • SAP SUM tool tutorials<br/>
                • SAP upgrade testing strategy<br/>
              </Typography>
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <Typography variant="body2">
                • Custom code adaptation (ADT)<br/>
                • SAP Fiori migration<br/>
                • Data migration strategy (LTMC, LSMW)<br/>
                • S/4HANA readiness check<br/>
                • LSMW utilization<br/>
                • S/4HANA migration cost analysis<br/>
                • Implementation vs upgrade comparison<br/>
                • SAP RISE vs LEGACY evaluation<br/>
                • SAP support models selection<br/>
                • SAP transformation roadmap<br/>
                • SAP partner selection assistance<br/>
                • Migration cockpit expertise<br/>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SAP;