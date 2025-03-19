import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../assets/styles/Project.scss';

const projects = [
  {
    title: 'Course Performance Dashboard',
    description: {
      Objective: [''],
      Features: [''],
      Audience: [''],
      'Data Sources': [''],
      Outcomes: [''],
    },
    image: require('../assets/images/project_images/Course_Performance_Main.png'),
  },
  {
    title: 'Hybrid Program Dashboard',
    description: {
      Objective: [
        'To provide a dashboard that builds upon the base visualizations made available by the LMS platform partner to give deeper insights into the performance of a set of 3 different hybrid learning programs that bridge the gap between non-credit and traditional degree programs. As the platform dashboards were limited in the information available, I was tasked with developing a dashboard to not only replicate the basic dashboard functionality, but to also build on it and provide information on student performance and progression.'
      ],
      Features: [
        'Tableau-based dashboard that supports both single-sign on and access control to customize the dashboard view based on who is accessing it (allowing the dashboard to support multiple programs while retaining data confidentiality)',
        'Modeling of main program metrics (enrollment/completion numbers and rates), course-by-course student progression, and forecasting of student completion as aligned with Academic Unit definitions.',
        'Additional modeling of revenue and program refund forecasting (as the LMS platform does not make this data available directly)',
        'Both a unified dashboard view and detailed program specific views that dig deeper into student progression in the programs, both at yearly and quarterly.'
      ],
      Audience: [
        'Academic Unit Leadership (Deans and Program Administrators)',
        'University Senior Executives'
      ],
      'Data Sources': [
        'University Student Records (Enrollment & Degree data)',
        'LMS Platform Data (Enrollment, Progression)',
        'Student Gradebook Data (Stored in AWS S3 Buckets)'
      ],
      Outcomes: [
        'The findings from this reporting were able to inform key university decision makers on the effectiveness of these programs, both from a student success and revenue perspective, leading to their renewal and eventual migration from the original LMS platform to better support the students in the different programs.',
        'For the program administrators, this dashboard was able to allow them to more effectively understand student progress in their programs and allowed them better insights into points that students got stuck and potentially requested refunds.',
        'Lastly, this project led to the discovery that the platform dashboards were in fact, inaccurate and showcasing largely incorrect data, leading to substantial changes at the partner platform to rectify the issues.'
      ]
    },
    image: require('../assets/images/project_images/MTC_Dashboard_Main.png'),
  },
  {
    title: 'Graduate Degree Program Reporting',
    description: {
      Objective: ['Connecting student date from multiple disparate data sources (university student data, external LMS platform data, etc), that only had loose or non-existent connections to provide insights into performance of the graduate degree program. This work had previously never been accomplished previously due to both the effort required in unpacking each dataset, but also the requisite knowledge on both the data sources and how the pieces connect.'],
      Features: ['A comprehensive analysis of a graduate degree data science program, connecting to the Academic Unit’s Massive Online Open Courses (MOOCs), investigating overall student enrollment, progression, and completion, but also course-by-course performance, the effect on student performance that MOOC completion caused, and statistical significance testing.', 
        'Python based reporting that allows for reproducibility and flexible connectivity of the 20+ distinct data sources used in the analysis, affording the ability to create regular reporting on this topic into the future.', 
        'Modeling of MOOC to Degree Program student flows with detailed analysis respective to the unique temporal events in the Degree program pipeline (Application, Matriculation, etc).', 
        'Follow-up reporting also brought in additional Expression of Interest (E.o.I.) data sources, allowing the comprehensive modeling of student interest at the earliest point in the Degree Program pipeline as possible.'],
      Audience: ['Academic Unit Leadership (Deans)', 
        'University Senior Executives'],
      'Data Sources': ['University Student Records (Enrollment & Degree data)', 
        'LMS Platform Data (Enrollment, Progression, Grades)', 
        'External Expression of Interest Data'],
      Outcomes: ['The findings from this reporting validated the main methodology that this degree program operated under; that being that by building on (or stacking on top of) openly available online courses (Massive Open Online Courses or MOOCs), degree program students can be better prepared and have higher levels of success throughout their participation in the degree program.', 
        'Further follow-ups from this reporting work were used to inform executive decision making on transitioning the degree program to a different LMS platform to allow for better support of the student experience.'],
    },
    image: require('../assets/images/project_images/Grade_distro.png'),
  },
  {
    title: 'Graduate Degree Program Reporting',
    description: {
      Objective: ['Connecting student date from multiple disparate data sources (university student data, external LMS platform data, etc), that only had loose or non-existent connections to provide insights into performance of the graduate degree program. This work had previously never been accomplished previously due to both the effort required in unpacking each dataset, but also the requisite knowledge on both the data sources and how the pieces connect.'],
      Features: ['A comprehensive analysis of a graduate degree data science program, connecting to the Academic Unit’s Massive Online Open Courses (MOOCs), investigating overall student enrollment, progression, and completion, but also course-by-course performance, the effect on student performance that MOOC completion caused, and statistical significance testing.', 
        'Python based reporting that allows for reproducibility and flexible connectivity of the 20+ distinct data sources used in the analysis, affording the ability to create regular reporting on this topic into the future.', 
        'Modeling of MOOC to Degree Program student flows with detailed analysis respective to the unique temporal events in the Degree program pipeline (Application, Matriculation, etc).', 
        'Follow-up reporting also brought in additional Expression of Interest (E.o.I.) data sources, allowing the comprehensive modeling of student interest at the earliest point in the Degree Program pipeline as possible.'],
      Audience: ['Academic Unit Leadership (Deans)', 
        'University Senior Executives'],
      'Data Sources': ['University Student Records (Enrollment & Degree data)', 
        'LMS Platform Data (Enrollment, Progression, Grades)', 
        'External Expression of Interest Data'],
      Outcomes: ['The findings from this reporting validated the main methodology that this degree program operated under; that being that by building on (or stacking on top of) openly available online courses (Massive Open Online Courses or MOOCs), degree program students can be better prepared and have higher levels of success throughout their participation in the degree program.', 
        'Further follow-ups from this reporting work were used to inform executive decision making on transitioning the degree program to a different LMS platform to allow for better support of the student experience.'],
    },
    image: require('../assets/images/project_images/Series_GPA.png'),
  },
  {
    title: 'Llama - VSCode Cloud Deployment',
    description: {
      Objective: [
        'To provide an implementation of the Llama series Large Language Model (Llama 2 and 3.1) that runs entirely within the user\'s workspace which is a severally resource and memory constrained environment (limited number of shared CPU cores and RAM, no GPU compute available).',
        'To additionally provide an updated environment based on VSCode running within Docker that supersedes the one made available by the platform partner (that is based on VSCode from 2019) by 5 years, but also adds the required features needed to teach courses on AI in a scalable form and for the use in residential courses (such as additional support for AWS Bedrock models).'
      ],
      Features: [
        'An up-to-date stable Docker image that uses a modern version of Visual Studio Code Server and incorporates several additional plug-ins that support teaching courses on AI and Machine Learning topics as well as the grading of these courses.',
        'Support for multiple versions of the Llama series of LLM models running both locally and backed by AWS compute (for residential use) with different amounts of quantization at acceptable token generation speeds:',
        'Llama 2 7B - Quantizations: q4_K_M, q5_0, q5_K_M, q6_K',
        'Llama 2 13B - Quantizations: q4_K_M, q5_0, q5_K_M',
        'Llama 3.1 8B - Quantizations: FP8, INT4 (w4a16)',
        'Additional models as supported within AWS Bedrock for use in residential graduate courses, within integrated support for usage limits.'
      ],
      Audience: [
        'Academic Unit Faculty',
        'Platform Partner Senior Engineers',
        'End-User Students'
      ],
      Outcomes: [
        'This image was adopted for use in a Massive Open Online Course with 4,000 students as well as several residential courses across multiple semesters with approximately 150 students.',
        'This image continues to function as a base environment for the Academic Unit\'s continued courses in this space, as we continue to enhance it to enable and support further developments in the Machine Learning and Artificial Intelligence domains.',
        'Lastly, the development of this docker image led the platform partner to use it as a base for improving their out-of-date image, as this project necessitated working within the constraints of their platform to a degree.'
      ]
    },
    image: require('../assets/images/project_images/llama_vscode.png'),
  },
];

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  position: 'relative',
  '& .MuiCarousel-root': {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .MuiCarousel-item': {
    height: '100%',
    width: '100%',
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
      <Typography variant="body1">
        Note: Due to the sensitive nature of education student data, only a limited amount of the dashboard and reporting work I've done can be showcased here. Some features may be obfuscated and reports/dashboards limited, however all have been approved to share.
      </Typography>

      {/* Current project title */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3">
          {projects[currentIndex].title}
        </Typography>
      </Box>

      <StyledCarousel
        autoPlay={false}
        interval={60000}
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
        <List>
          {Object.entries(projects[currentIndex].description).map(([key, value]) => (
            <ListItem key={key}>
              <ListItemText
                primary={<Typography variant="body1">{key}:</Typography>}
                secondary={
                  <List>
                    {(value as string[]).map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                      </ListItem>
                    ))}
                  </List>
                }
              />
            </ListItem>
          ))}
        </List>
      </DescriptionContainer>
    </Root>
  );
};

export default Project;