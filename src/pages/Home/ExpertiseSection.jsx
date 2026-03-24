import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Chip,
    Button,
    Container,
    alpha,
    Paper,
    Stack,
    useMediaQuery,
    useTheme,
    Tabs,
    Tab,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Fade,
    Grow
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BoltIcon from '@mui/icons-material/Bolt';

// Import Poppins font
import '@fontsource/poppins';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

// Color palette based on provided colors
const COLORS = {
    primary: '#0B4C74', // Dark Blue
    secondary: '#F2F3F4', // Light Gray
    accent: '#2E8BC0', // Medium Blue
    accentLight: '#64B5F6', // Light Blue
    success: '#4CAF50',
    warning: '#FF9800',
    textPrimary: '#212121',
    textSecondary: '#757575',
};

// Poppins font styles
const POPPINS_STYLES = {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif", fontWeight: 900 },
    h2: { fontFamily: "'Poppins', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Poppins', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Poppins', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    body1: { fontFamily: "'Poppins', sans-serif", fontWeight: 400 },
    body2: { fontFamily: "'Poppins', sans-serif", fontWeight: 400 },
    button: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    caption: { fontFamily: "'Poppins', sans-serif", fontWeight: 400 },
    subtitle1: { fontFamily: "'Poppins', sans-serif", fontWeight: 500 },
    subtitle2: { fontFamily: "'Poppins', sans-serif", fontWeight: 500 },
};

const expertiseData = [
    {
            id: 1,
            category: 'ERP Services',
            icon: <CloudIcon />,
            description: 'Future-proofing your enterprise with AI-augmented ERP implementation and dynamic optimization for continuous excellence.',
            examples: [
                { label: 'SAP Implementation', link: '/how-we-help/erp/sap' },
                { label: 'Oracle Cloud Solutions', link: 'https://www.onasit.com/', external: true },
                { label: 'Salesforce CRM', link: '/how-we-help/erp/salesforce' },
                { label: 'Workday Integration', link: '/how-we-help/erp/workday' },
                { label: 'Service Now', link: '/how-we-help/erp/servicenow' },
                { label: 'Netsuite', link: '/how-we-help/erp/netsuite' },
            ],
            stats: '7+ ERP Systems',
            color: COLORS.accentLight,
            bgColor: alpha(COLORS.accentLight, 0.08),
            benefits: ['Streamlined Operations', 'Real-time Insights', 'Enhanced Collaboration']
        },

    {
        id: 2,
        category: 'IT Consulting',
        icon: <BusinessIcon />,
        description: 'Strategic IT consulting to transform operations and drive digital excellence.',
        examples: [
            { label: 'Digital Transformation Strategy', link: '/staffing/it-consulting#transformation' },
            { label: 'Technology Roadmapping', link: '/staffing/it-consulting#roadmapping' },
            { label: 'Business Process Optimization', link: '/staffing/it-consulting#optimization' },
            { label: 'IT Infrastructure Planning', link: '/staffing/it-consulting#infrastructure' },
            { label: 'Banking Finance Sales', link: '/staffing/it-consulting#banking-finance' },
            { label: 'Finance & Accounting', link: '/staffing/it-consulting#finance-accounting' },
            { label: 'HR & Support', link: '/staffing/it-consulting#hr-support' },
            { label: 'Legal & Compliance', link: '/staffing/it-consulting#legal-compliance' },
             { label: 'Pharma, Healthcare & Life Sciences', link: '/staffing/it-consulting#pharma-healthcare-lifesciences' },
        ],
        stats: '95% Client Satisfaction',
        color: COLORS.primary,
        bgColor: alpha(COLORS.primary, 0.08),
        benefits: ['Cost Reduction', 'Improved Efficiency', 'Scalable Solutions']
    },
    {
        id: 3,
        category: 'Professional Services',
        icon: <GroupsIcon />,
        description: 'Elite staffing solutions with top-tier professionals for your business needs.',
        examples: [
            { label: 'Managed IT Services', link: '/staffing/professional-services#managed-it' },
            { label: 'Expert Staff Augmentation', link: '/staffing/professional-services#staff-augmentation' },
            { label: 'Contract Staffing Solutions', link: '/staffing/professional-services#temporary-contract' },
            { label: 'Executive Placement', link: '/staffing/professional-services#permanent-executive' },
             { label: 'Contract To Hire Staffing', link: '/staffing/professional-services#contract-to-hire' },
             { label: 'Remote / Virtual Staffing', link: '/staffing/professional-services#remote-virtual' },
        ],
        stats: '100+ Professionals Placed',
        color: COLORS.accent,
        bgColor: alpha(COLORS.accent, 0.08),
        benefits: ['Access to Top Talent', 'Flexible Staffing', 'Reduced Overhead']
    },

    {
        id: 4,
        category: 'Digital Solutions',
        icon: <CodeIcon />,
        description: 'Cutting-edge web and digital solutions to amplify your online presence.',
        examples: [
            { label: 'Custom Web Development', link: '/how-we-help/other-services/web-dev' },
            { label: 'SEO & Digital Marketing', link: '/how-we-help/other-services/seo' },
            { label: 'Mobile App Development', link: '/how-we-help/other-services/mobileapp' },
            { label: 'UI/UX Design Excellence', link: '/how-we-help/other-services/uiuxsection' },
            { label: 'Social Media Marketing', link: '/how-we-help/other-services/social-media' },
            { label: 'Content Marketing', link: '/how-we-help/other-services/content-marketing' },
        ],
        stats: '25+ Projects Delivered',
        color: COLORS.warning,
        bgColor: alpha(COLORS.warning, 0.08),
        benefits: ['Enhanced User Experience', 'Increased Conversions', 'Brand Visibility']
    },
    {
            id: 5,
            category: 'EdTech Services',
            icon: <SchoolIcon />,
            description: 'Innovative educational technology solutions for modern learning ecosystems.',
            examples: [
                { label: 'LMS Implementation', link: '/education/lms-implementation', external: true },
                { label: 'E-Learning Platform Development', link: '/education/e-learning', external: true },
                { label: 'Educational Analytics', link: '/education/analytics', external: true },
                { label: 'Virtual Classroom Solutions', link: '/education/virtual-classroom', external: true },
            ],
            stats: '30+ Educational Institutions',
            color: COLORS.success,
            bgColor: alpha(COLORS.success, 0.08),
            benefits: ['Enhanced Learning Outcomes', 'Scalable Education', 'Modern Learning Tools']
        },
    {
            id: 6,
            category: 'Cybersecurity',
            icon: <SecurityIcon />,
            description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
            examples: [
                 { label: 'Security Risk Assessment', link: '/security/securityrisk' },
                { label: 'Network Security Solutions', link: '/security/networksecurity' },
                { label: 'Data Protection & Privacy', link: '/security/dataprotection' },
                { label: 'Compliance Management', link: '/security/compliancemanagement' },
            ],
            stats: '99.9% Security Uptime',
            color: '#9C27B0',
            bgColor: alpha('#9C27B0', 0.08),
            benefits: ['Data Protection', 'Regulatory Compliance', 'Threat Prevention']
        }
];

const industries = [
    {
        name: 'Banking & Finance',
        icon: '🏦',
        color: COLORS.primary,
        link: '/industries/banking-finance'
    },
    {
        name: 'Healthcare',
        icon: '🏥',
        color: COLORS.success,
        link: '/industries/healthcare'
    },
    {
        name: 'Education',
        icon: '🎓',
        color: COLORS.warning,
        link: '/industries/education'
    },
    {
        name: 'Manufacturing',
        icon: '🏭',
        color: COLORS.accent,
        link: '/industries/manufacturing'
    },
    {
        name: 'Retail',
        icon: '🛒',
        color: '#E91E63',
        link: '/industries/retail'
    },
    {
        name: 'Insurance',
        icon: '🛡️',
        color: COLORS.primary,
        link: '/industries/insurance'
    },
    {
        name: 'Energy & Utilities',
        icon: '⚡',
        color: '#FFC107',
        link: '/industries/energy-utilities'
    },
    {
        name: 'Professional Services',
        icon: '💼',
        color: COLORS.textSecondary,
        link: '/industries/professional-services'
    },
    // New industries added below
    {
        name: 'Information Technology',
        icon: '💻',
        color: '#2196F3',
        link: '/industries/information-technology'
    },
    {
        name: 'Hi-Tech',
        icon: '🚀',
        color: '#9C27B0',
        link: '/industries/hi-tech'
    },
    {
        name: 'Energy Source & Utilities',
        icon: '🔋',
        color: '#FF9800',
        link: '/industries/energy-source-utilities'
    },
    {
        name: 'Communication Media & Information Services',
        icon: '📡',
        color: '#3F51B5',
        link: '/industries/communication-media'
    },
    {
        name: 'Engineering, Construction & Operations',
        icon: '🏗️',
        color: '#795548',
        link: '/industries/engineering-construction'
    },
    {
        name: 'Public Services',
        icon: '🏛️',
        color: '#607D8B',
        link: '/industries/public-services'
    },
    {
        name: 'Life Sciences & Pharma',
        icon: '🧬',
        color: '#4CAF50',
        link: '/industries/life-sciences-pharma'
    },
];

export default function ExpertiseSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeCategory, setActiveCategory] = useState(expertiseData[0]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setActiveCategory(expertiseData[newValue]);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <Box sx={{
            bgcolor: 'white',
            py: { xs: 4, md: 2 },
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${COLORS.secondary} 0%, white 30%, white 100%)`,
            fontFamily: "Poppins, Montserrat, sans-serif"
        }}>
            {/* Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: `radial-gradient(circle at 10% 20%, ${alpha(COLORS.primary, 0.03)} 0%, transparent 40%),
                                radial-gradient(circle at 90% 80%, ${alpha(COLORS.accent, 0.03)} 0%, transparent 40%)`,
                    zIndex: 0
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header with Gradient */}
                <Box sx={{
                    textAlign: 'center',
                    mb: { xs: 1, md: 2 },
                    position: 'relative'
                }}>
                    <Chip
                        icon={<StarIcon />}
                        label="Our Expertise"
                        sx={{
                            bgcolor: alpha(COLORS.primary, 0.1),
                            color: COLORS.primary,
                            fontFamily: "Poppins, Montserrat, sans-serif",
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                            mb: 1,
                            fontSize: '1.2rem',
                            border: `2px solid ${alpha(COLORS.primary, 0.2)}`,
                            '& .MuiChip-icon': { color: COLORS.primary }
                        }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '1.0rem', md: '1.5rem' },
                            background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.1,
                            fontFamily: "Poppins, Montserrat, sans-serif",
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Transform Your Business
                        <br />
                        <Box component="span" sx={{ fontSize: '0.75em', fontWeight: 700, fontFamily: "Poppins, Montserrat, sans-serif" }}>
                            With Expert Solutions
                        </Box>
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            color: COLORS.textSecondary,
                            maxWidth: 900,
                            mx: 'auto',
                            fontSize: { xs: '0.9rem', md: '1.0rem' },
                            lineHeight: 1.6,
                            fontWeight: 400,
                            fontFamily: "Poppins, Montserrat, sans-serif",
                        }}
                    >
                        Partner with us for comprehensive IT services that drive innovation,
                        enhance productivity, and deliver measurable business outcomes across industries.
                    </Typography>

                    {/* Stats Banner */}
                    <Grow in={true} timeout={1000}>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 3,
                            p: 2,
                            px: 4,
                            borderRadius: 3,
                            bgcolor: alpha(COLORS.primary, 0.05),
                            border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                            mb: 4
                        }}>
                            {[
                                { value: '7+', label: 'Years Experience' },
                                { value: '40+', label: 'Clients Served' },
                                { value: '98%', label: 'Satisfaction Rate' },
                            ].map((stat, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center' }}>
                                    <Typography sx={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        color: COLORS.primary,
                                        lineHeight: 1,
                                        fontFamily: "Poppins, Montserrat, sans-serif",
                                    }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.75rem',
                                        color: COLORS.textSecondary,
                                        fontWeight: 500,
                                        fontFamily: "Poppins, Montserrat, sans-serif"
                                    }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grow>
                </Box>

                {/* Tabbed Navigation */}
                <Paper
                    elevation={0}
                    sx={{
                        mb: 6,
                        borderRadius: 3,
                        bgcolor: 'transparent',
                        borderBottom: `2px solid ${alpha(COLORS.primary, 0.1)}`
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                minHeight: 72,
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                color: COLORS.textSecondary,
                                borderBottom: '3px solid transparent',
                                fontFamily: "Poppins, Montserrat, sans-serif",
                                '&.Mui-selected': {
                                    color: COLORS.primary,
                                },
                                '&:hover': {
                                    color: COLORS.primary,
                                    bgcolor: alpha(COLORS.primary, 0.05),
                                }
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: COLORS.primary,
                                height: 3,
                                borderRadius: 3
                            }
                        }}
                    >
                        {expertiseData.map((item, index) => (
                            <Tab
                                key={item.id}
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            color: activeTab === index ? item.color : COLORS.textSecondary,
                                            transition: 'color 0.3s'
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Poppins, Montserrat, sans-serif" }}>
                                            {item.category}
                                        </Typography>
                                    </Box>
                                }
                            />
                        ))}
                    </Tabs>
                </Paper>

                {/* Main Content */}
                <Grid container spacing={4} alignItems="stretch">
                    {/* Left Column - Service Details */}
                    <Grid item xs={12} lg={7}>
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                {/* Header with Gradient */}
                                <Box sx={{
                                    p: { xs: 3, md: 2 },
                                    background: `linear-gradient(135deg, ${activeCategory.bgColor} 0%, white 100%)`,
                                    borderBottom: `1px solid ${alpha(activeCategory.color, 0.2)}`
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
                                        <Avatar
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                bgcolor: activeCategory.color,
                                                color: 'white',
                                                fontSize: '1rem'
                                            }}
                                        >
                                            {activeCategory.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 800,
                                                    mb: 1,
                                                    color: activeCategory.color,
                                                    fontSize: { xs: '1.8rem', md: '1rem' },
                                                    fontFamily: "Poppins, Montserrat, sans-serif",
                                                    letterSpacing: '-0.5px'
                                                }}
                                            >
                                                {activeCategory.category}
                                            </Typography>
                                            <Chip
                                                icon={<TrendingUpIcon />}
                                                label={activeCategory.stats}
                                                sx={{
                                                    bgcolor: alpha(activeCategory.color, 0.1),
                                                    color: activeCategory.color,
                                                    fontWeight: 700,
                                                    fontSize: '0.9rem',
                                                    fontFamily: "Poppins, Montserrat, sans-serif",
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: COLORS.textPrimary,
                                            lineHeight: 1.6,
                                            fontSize: '1.0rem',
                                            mb: 2,
                                            fontFamily: "Poppins, Montserrat, sans-serif",
                                            fontWeight: 400
                                        }}
                                    >
                                        {activeCategory.description}
                                    </Typography>

                                    {/* Benefits */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {activeCategory.benefits?.map((benefit, idx) => (
                                            <Chip
                                                key={idx}
                                                icon={<BoltIcon sx={{ fontSize: 15 }} />}
                                                label={benefit}
                                                size="medium"
                                                sx={{
                                                    bgcolor: alpha(activeCategory.color, 0.05),
                                                    color: activeCategory.color,
                                                    border: `1px solid ${alpha(activeCategory.color, 0.2)}`,
                                                    fontWeight: 600,
                                                    fontSize: '0.75rem',
                                                    fontFamily: "Poppins, Montserrat, sans-serif"
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>

                                {/* Services List */}
                                <Box sx={{ p: { xs: 0.5, md: 2 } }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: COLORS.textPrimary,
                                            fontSize: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontFamily: "Poppins, Montserrat, sans-serif",
                                        }}
                                    >
                                        <StarIcon sx={{ color: activeCategory.color, fontSize: 15 }} />
                                        Key Services
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {activeCategory.examples.map((example, idx) => (
                                            <Grid item xs={10} sm={6} key={idx}>
                                                <Card
                                                    component="a"
                                                    href={example.link}
                                                    elevation={0}
                                                    sx={{
                                                        height: '100%',
                                                        borderRadius: 2,
                                                        bgcolor: COLORS.secondary,
                                                        border: `1px solid ${alpha(activeCategory.color, 0.1)}`,
                                                        textDecoration: 'none',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-4px)',
                                                            bgcolor: alpha(activeCategory.color, 0.05),
                                                            borderColor: activeCategory.color,
                                                            boxShadow: `0 8px 24px ${alpha(activeCategory.color, 0.15)}`,
                                                        }
                                                    }}
                                                >
                                                    <CardContent sx={{ p: 2.5 }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                            <Box sx={{
                                                                width: 8,
                                                                height: 6,
                                                                borderRadius: '50%',
                                                                bgcolor: activeCategory.color,
                                                                flexShrink: 0
                                                            }} />
                                                            <Typography
                                                                sx={{
                                                                    color: COLORS.textPrimary,
                                                                    fontWeight: 600,
                                                                    flex: 1,
                                                                    fontSize: '0.75rem',
                                                                    fontFamily: "Poppins, Montserrat, sans-serif"
                                                                }}
                                                            >
                                                                {example.label}
                                                            </Typography>
                                                            <ArrowForwardIcon
                                                                sx={{
                                                                    fontSize: 16,
                                                                    color: activeCategory.color,
                                                                    opacity: 0.7
                                                                }}
                                                            />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>

                                    {/* Quick Stats */}
                                    <Box sx={{
                                        mt: 1,
                                        pt: 2,
                                        borderTop: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        textAlign: 'center'
                                    }}>
                                        {[
                                            { label: 'AI-Accelerated Deployment', value: 'Adaptive to scope complexity' },
                                            { label: 'Success Rate', value: '98%' },
                                            { label: 'Support', value: '24/7' },
                                        ].map((stat, idx) => (
                                            <Box key={idx}>
                                                <Typography sx={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 800,
                                                    color: activeCategory.color,
                                                    lineHeight: 1,
                                                    fontFamily: "Poppins, Montserrat, sans-serif"
                                                }}>
                                                    {stat.value}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '0.75rem',
                                                    color: COLORS.textSecondary,
                                                    fontWeight: 500,
                                                    fontFamily: "Poppins, Montserrat, sans-serif"
                                                }}>
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Right Column - Industries & CTA */}
                    <Grid item xs={12} lg={5}>
                        <Stack spacing={4}>
                            {/* Industries Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{
                                    p: { xs: 3, md: 2 },
                                    bgcolor: alpha(COLORS.primary, 0.03),
                                    borderBottom: `1px solid ${alpha(COLORS.primary, 0.1)}`
                                }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            color: COLORS.primary,
                                            fontSize: '0.75rem',
                                            fontFamily: "Poppins, Montserrat, sans-serif"
                                        }}
                                    >
                                        Industries We Serve
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: COLORS.textSecondary,
                                            fontSize: '0.75rem',
                                            fontFamily: "Poppins, Montserrat, sans-serif",
                                            fontWeight: 400
                                        }}
                                    >
                                        Tailored solutions for diverse sectors
                                    </Typography>
                                </Box>

                                <Box sx={{ p: { xs: 3, md: 4 } }}>
                                    <Grid container spacing={2}>
                                        {industries.map((industry, idx) => (
                                            <Grid item xs={6} sm={4} key={idx}>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        borderRadius: 2,
                                                        bgcolor: alpha(industry.color, 0.05),
                                                        textAlign: 'center',
                                                        border: `1px solid ${alpha(industry.color, 0.1)}`,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            bgcolor: alpha(industry.color, 0.1),
                                                            boxShadow: `0 4px 12px ${alpha(industry.color, 0.1)}`,
                                                        }
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '2rem', mb: 1 }}>
                                                        {industry.icon}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: industry.color,
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem',
                                                            lineHeight: 1.3,
                                                            display: 'block',
                                                            fontFamily: "'Poppins', sans-serif"
                                                        }}
                                                    >
                                                        {industry.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>

                            {/* CTA Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: COLORS.primary,
                                    color: 'white',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 4,
                                        background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.accentLight} 100%)`,
                                    }
                                }}
                            >
                                <Box sx={{ p: { xs: 3, md: 1 }, textAlign: 'center' }}>
                                    <StarIcon sx={{ fontSize: 48, color: 'white', opacity: 0.9, mb: 0.5 }} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            mb: 2,
                                            fontSize: { xs: '1.0rem', md: '1.8rem' },
                                            fontFamily: "Poppins, Montserrat, sans-serif",
                                            letterSpacing: '-0.5px'
                                        }}
                                    >
                                        Ready to Transform?
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 1,
                                            opacity: 0.9,
                                            fontSize: '.76rem',
                                            lineHeight: 1.6,
                                            fontFamily: "Poppins, Montserrat, sans-serif",
                                            fontWeight: 400
                                        }}
                                    >
                                        Let's discuss how we can help you achieve your business goals with tailored IT solutions.
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Button
                                            component="a"
                                            href="/resources/contact-us"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                bgcolor: 'white',
                                                color: COLORS.primary,
                                                fontWeight: 700,
                                                py: 2,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                fontSize: '.75rem',
                                                fontFamily: "Poppins, Montserrat, sans-serif",
                                                '&:hover': {
                                                    bgcolor: COLORS.secondary,
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 8px 24px rgba(255,255,255,0.3)',
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Get Free Consultation
                                            <ArrowForwardIcon sx={{ ml: 1 }} />
                                        </Button>

                                       <Button
                                           component="a"
                                           href={activeCategory.category === 'ERP Services' ? 'https://www.onasglobal.com/' : `/services/${activeCategory.category.toLowerCase().replace(' ', '-')}`}
                                           target={activeCategory.category === 'ERP Services' ? '_blank' : '_self'}
                                           rel={activeCategory.category === 'ERP Services' ? 'noopener noreferrer' : undefined}
                                           variant="outlined"
                                           size="large"
                                           sx={{
                                               borderColor: 'white',
                                               color: 'white',
                                               fontWeight: 600,
                                               py: 1.5,
                                               borderRadius: 2,
                                               textTransform: 'none',
                                               fontSize: '0.75rem',
                                               fontFamily: "Poppins, Montserrat, sans-serif",
                                               '&:hover': {
                                                   bgcolor: 'rgba(255,255,255,0.1)',
                                                   borderColor: 'white',
                                               }
                                           }}
                                       >
                                            Explore {activeCategory.category} in Detail
                                        </Button>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Testimonial Banner */}
                <Fade in={true} timeout={1000}>
                    <Paper
                        elevation={0}
                        sx={{
                            mt: 8,
                            p: { xs: 3, md: 2 },
                            borderRadius: 3,
                            bgcolor: alpha(COLORS.primary, 0.05),
                            border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 1,
                                color: COLORS.primary,
                                fontSize: { xs: '0.75rem', md: '1.0rem' },
                                fontFamily: "Poppins, Montserrat, sans-serif",
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Trusted by Industry Leaders
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                color: COLORS.textSecondary,
                                maxWidth: 600,
                                mx: 'auto',
                                fontSize: '0.75rem',
                                lineHeight: 1.6,
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 400
                            }}
                        >
                            Align with forward-thinking innovators who have accelerated their digital evolution with our expertise.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                            {[
                                { value: '40+', label: 'Global Clients' },
                                { value: '+', label: 'Countries Served' },
                                { value: '98%', label: 'Client Retention' },
                                { value: '24/7', label: 'Support Coverage' },
                            ].map((stat, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center', minWidth: 120 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            mb: 0.5,
                                            color: COLORS.primary,
                                            fontSize: { xs: '2rem', md: '2.5rem' },
                                            lineHeight: 1,
                                            fontFamily: "'Poppins', sans-serif"
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: COLORS.textSecondary,
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            fontFamily: "'Poppins', sans-serif"
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Fade>
            </Container>
        </Box>
    );
}