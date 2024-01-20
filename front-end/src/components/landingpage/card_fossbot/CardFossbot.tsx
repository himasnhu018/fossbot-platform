 
import React from 'react';
import FeaturesTitle from './TitleFossbot';
import { Typography, Grid, Container, Box, CardMedia } from '@mui/material';
import {
  IconAdjustments,
  IconArchive,
  IconArrowsShuffle,
  IconBook,
  IconBuildingCarousel,
  IconCalendar,
  IconChartPie,
  IconDatabase,
  IconDiamond,
  IconLanguageKatakana,
  IconLayersIntersect,
  IconMessages,
  IconRefresh,
  IconShieldLock,
  IconTag,
  IconWand,
} from '@tabler/icons-react';
import AnimationFadeIn from '../animation/Animation';
import FosscomFossbot from 'src/assets/images/backgrounds/fossbot_fosscom.jpg';

interface FeaturesType {
  icon: React.ReactElement;
  title: string;
  subtext: string;
}

const featuresData: FeaturesType[] = [
  {
    icon: <IconWand width={40} height={40} strokeWidth={1.5} />,
    title: '6 Theme Colors',
    subtext: 'We have included 6 pre-defined Theme Colors with Elegant Admin.',
  },
  {
    icon: <IconShieldLock width={40} height={40} strokeWidth={1.5} />,
    title: 'JWT + Firebase Auth',
    subtext: 'It is JSON Object is used to securely transfer information over the web.',
  },
  {
    icon: <IconArchive width={40} height={40} strokeWidth={1.5} />,
    title: '50+ Page Templates',
    subtext: 'Yes, we have 5 demos & 50+ Pages per demo to make it easier.',
  },
  {
    icon: <IconAdjustments width={40} height={40} strokeWidth={1.5} />,
    title: '45+ UI Components',
    subtext: 'Almost 45+ UI Components being given with Modernize Admin Pack.',
  },
  {
    icon: <IconTag width={40} height={40} strokeWidth={1.5} />,
    title: 'Material Ui',
    subtext: 'Its been made with Material Ui and full responsive layout.',
  },
  {
    icon: <IconDiamond width={40} height={40} strokeWidth={1.5} />,
    title: '3400+ Font Icons',
    subtext: 'Lots of Icon Fonts are included here in the package of Elegant Admin.',
  },
  {
    icon: <IconDatabase width={40} height={40} strokeWidth={1.5} />,
    title: 'Axios',
    subtext: 'Axios is a promise-based HTTP Client for node.js and the browser.',
  },
  {
    icon: <IconLanguageKatakana width={40} height={40} strokeWidth={1.5} />,
    title: 'i18 React',
    subtext: 'react-i18 is a powerful internationalization framework for React.',
  },
  {
    icon: <IconBuildingCarousel width={40} height={40} strokeWidth={1.5} />,
    title: 'Slick Carousel',
    subtext: 'The Last React Carousel You will Ever Need!',
  },
  {
    icon: <IconArrowsShuffle width={40} height={40} strokeWidth={1.5} />,
    title: 'Easy to Customize',
    subtext: 'Customization will be easy as we understand your pain.',
  },
  {
    icon: <IconChartPie width={40} height={40} strokeWidth={1.5} />,
    title: 'Lots of Chart Options',
    subtext: 'You name it and we have it, Yes lots of variations for Charts.',
  },
  {
    icon: <IconLayersIntersect width={40} height={40} strokeWidth={1.5} />,
    title: 'Lots of Table Examples',
    subtext: 'Data Tables are initial requirement and we added them.',
  },
  {
    icon: <IconRefresh width={40} height={40} strokeWidth={1.5} />,
    title: 'Regular Updates',
    subtext: 'We are constantly updating our pack with new features.',
  },
  {
    icon: <IconBook width={40} height={40} strokeWidth={1.5} />,
    title: 'Detailed Documentation',
    subtext: 'We have made detailed documentation, so it will easy to use.',
  },
  {
    icon: <IconCalendar width={40} height={40} strokeWidth={1.5} />,
    title: 'Calendar Design',
    subtext: 'Calendar is available with our package & in nice design.',
  },
  {
    icon: <IconMessages width={40} height={40} strokeWidth={1.5} />,
    title: 'Dedicated Support',
    subtext: 'We believe in supreme support is key and we offer that.',
  },
];

const FossbotCard = () => {
  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <FeaturesTitle />
        <AnimationFadeIn>
          <Box mt={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5} lg={5} textAlign="center">
                <CardMedia
                  component="img"
                  sx={{ width: '100%', height: '100%' }}
                  image={FosscomFossbot}
                  alt="STEM Education"
                />
              </Grid>
              <Grid item xs={12} sm={7} lg={7}>
                <Typography variant="h5" mt={3} lineHeight={{lg: '1.5', xl:'1.5'}} paddingX={1.5} textAlign="center" sx={{ paddingX: { xs: '0.5', sm: '0.5', md:'0.5'}}} >
                  FOSSBot is an open source and open design DIY robot that has been developed by
                  Greek Free and Open Source Software (GFOSS) and Harokopio University of Athens
                  (HUA) for educational purposes. The robot does not come alone, but comprises
                  multiple software and system solutions that provide a holistic approach for STEM
                  education at all educational levels.
                </Typography>
              </Grid>
              {/* {featuresData.map((feature, index) => (
                <Grid item xs={12} sm={4} lg={3} textAlign="center" key={index}>
                  <Box color="primary.main">{feature.icon}</Box>
                  <Typography variant="h5" mt={3}>
                    {feature.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" mt={1} mb={3}>
                    {feature.subtext}
                  </Typography>
                </Grid>
              ))} */}
            </Grid>
          </Box>
        </AnimationFadeIn>
      </Container>
    </Box>
  );
};

export default FossbotCard;