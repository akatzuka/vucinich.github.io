import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../assets/styles/Project.scss';

const projects = [
{
    title: 'Filmate AI',
    description:
        'Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.',
    image: require('../assets/images/mock10.png'),
    url: 'https://www.filmate.club/',
    },
    {
    title: 'High Speed Chase',
    description:
        'Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.',
    image: require('../assets/images/mock09.png'),
    url: 'https://yujisatojr.itch.io/highspeedchase',
    },
  {
    title: 'Astro Raiders',
    description:
      'Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.',
    image: require('../assets/images/mock08.png'),
  },
  {
    title: 'Datum: Integrated Learning Platform',
    description:
      'This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.',
    image: require('../assets/images/mock07.png'),
  },
  {
    title: 'WeManage: Real Estate Asset Management',
    description:
      'This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.',
    image: require('../assets/images/mock06.png'),
  },
  {
    title: 'COVID-19 Case Management',
    description:
      'Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4.',
    image: require('../assets/images/mock05.png'),
  },
  {
    title: 'Multiple Regression Property Analysis',
    description:
      'Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.',
    image: require('../assets/images/mock04.png'),
  },
  {
    title: 'Programs of Study',
    description:
      'Designed and developed a custom component for a CMS-based platform (e.g., Brightspot) using Java, Handlebars, and LESS. University students can find their majors of interest through this module.',
    image: require('../assets/images/mock03.png'),
  },
  {
    title: 'Transfer Evaluation Matrix',
    description:
      'Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.',
    image: require('../assets/images/mock02.png'),
  },
  {
    title: 'Submeowrine',
    description:
      'Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.',
    image: require('../assets/images/mock01.png'),
  },
];

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(4),
}));

const StyledCarousel = styled(Carousel)(({ theme }) => ({
    height: '500px',
    position: 'relative',
    '& .MuiCarousel-root': {
        height: '100%',
    },
    '& .MuiCarousel-item': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& img': {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    },
}));

const DescriptionContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
}));

const Project: React.FC = () => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <Root>
            <Typography variant="h2" component="h1" gutterBottom>
                Data & Tech Projects
            </Typography>
            
            {/* Current project title */}
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h3">
                    {projects[currentIndex].title}
                </Typography>
            </Box>

            <StyledCarousel
            autoPlay={true}
            interval={10000}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            onChange={(now) => now !== undefined && setCurrentIndex(now)}
            >
                {projects.map((project, index) => (
                    <div key={index}>
                        <img src={project.image} alt={project.title} className="zoom" />
                    </div>
                ))}
            </StyledCarousel>

            {/* Current project description */}
            <DescriptionContainer theme={theme}>
                <Typography variant="body1">
                    {projects[currentIndex].description}
                </Typography>
            </DescriptionContainer>
        </Root>
    );
};

export default Project;