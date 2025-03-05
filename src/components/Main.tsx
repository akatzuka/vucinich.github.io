import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="../assets/images/avatar.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/akatzuka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sean-vucinich-088aa113b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/vucinich" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Sean Vucinich</h1>
          <p>Solutions Developer Lead <br/> Data Scientist <br/> Technical Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/akatzuka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sean-vucinich-088aa113b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/vucinich" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;