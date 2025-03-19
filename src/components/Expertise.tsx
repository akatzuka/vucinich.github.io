import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Project/Product Management",
    "Project/Product Supervision",
    "Interdisciplinary Team Building ",
    "Program Design and Evaluation",
];

const labelsSecond = [
    "Python",
    "Scikit-Learn",
    "Pandas",
    "Matplotlib",
    "Plotly",
    "SQL",
    "PostgreSQL",
    "Oracle SQL",
    "Amazon Redshift",
    "SQL Server",
    "Denodo",
    "Tableau"
];

const labelsThird = [
    "Python",
    "Transformers",
    "PyTorch",
    "Neural Networks",
    "Federated Learning",
    "Vision Models",
    "Fairness in AI",
    "Open-Weight LLMs",
    "Llama3.3",
    "Mistral",
    "DeepSeek",
    "OpenAI",
    "LangChain",
    "Hugging Face",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science and Engineering</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Skillset:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Technical Product Management</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Skillset:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning, AI, and GenAI</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Skillset:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;