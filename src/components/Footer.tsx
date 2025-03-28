import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/akatzuka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/sean-vucinich-088aa113b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/vucinich" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio designed & built by Sean Vucinich <br/> Adapted from the work of <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;