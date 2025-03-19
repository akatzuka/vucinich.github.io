import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Publications</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="IEEE BigComp, 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">An Approach to Enhancing Fairness in a Dynamically Growing Federated Learning Environments</h3>
            <h4 className="vertical-timeline-element-subtitle">S Vucinich, Q Zhu, N Meneghetti</h4>
            <p>
                Pending Publication
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="UMich - DeepBlue, 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">A Study on Fairness in a Dynamically Growing Federated Learning Environment</h3>
            <h4 className="vertical-timeline-element-subtitle">S Vucinich</h4>
            <p>
                https://deepblue.lib.umich.edu/handle/2027.42/195593
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="IEEE Access, 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">The current state and challenges of fairness in federated learning</h3>
            <h4 className="vertical-timeline-element-subtitle">S Vucinich, Q Zhu</h4>
            <p>
                https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10183984
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;