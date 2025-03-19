import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../assets/styles/Project.scss';

const projects = [
{
    title: 'Course Performance Dashboard',
    description:
        'Objective: To...',
    image: require('../assets/images/project_images/Course_Performance_Main.png'),
    },
 {
    title: 'Hybrid Program Dashboard',
    description:
        'Objective: To provide a dashboard that builds upon the base visualizations made available by the LMS platform partner to give deeper insights into the performance of a set of 3 different hybrid learning programs that bridge the gap between non-credit and traditional degree programs. As the platform dashboards were limited in the information available, I was tasked with developing a dashboard to not only replicate the basic dashboard functionality, but to also build on it and provide information on student performance and progression.',
    image: require('../assets/images/project_images/MTC_Dashboard_Main.png'),
    },
  {
    title: 'Graduate Degree Program Reporting',
    description:
      'Objective: Connecting student date from multiple disparate data sources (university student data, external LMS platform data, etc), that only had loose or non-existent connections to provide insights into performance of the graduate degree program. This work had previously never been accomplished previously due to both the effort required in unpacking each dataset, but also the requisite knowledge on both the data sources and how the pieces connect.',
    image: require('../assets/images/project_images/Grade_distro.png'),
  },
  {
    title: 'Llama - VSCode Cloud Deployment',
    description:
      'Objective: To provide an implementation of the Llama series Large Language Model (Llama 2 and 3.1) that runs entirely within the user’s workspace which is a severally resource and memory constrained environment (limited number of shared CPU cores and RAM, no GPU compute available). \n\n To additionally provide an updated environment based on VSCode running within Docker that supersedes the one made available by the platform partner (that is based on VSCode from 2019) by 5 years, but also adds the required features needed to teach courses on AI in a scalable form and for the use in residential courses (such as additional support for AWS Bedrock models).',
    image: require('../assets/images/project_images/llama_vscode.png'),
  },
];

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(4),
}));

const StyledCarousel = styled(Carousel)(({ theme }) => ({
    height: '1500px',
    position: 'relative',
    '& .MuiCarousel-root': {
        height: '80%',
    },
    '& .MuiCarousel-item': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& img': {
        maxWidth: '100%',
        maxHeight: '80%',
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
            interval={30000}
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