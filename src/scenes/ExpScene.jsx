import React, { useEffect } from 'react';
import './Styling/Exp.css';
import { gsap } from 'gsap';
import ad1 from '../Assets/ad1.jpg';
import ad2 from '../Assets/ad2.webp';
import ad3 from '../Assets/ad3.jpg';
import ad4 from '../Assets/ad4.jpg';
import ad5 from '../Assets/ad5.jpg';
import ad6 from '../Assets/ad6.jpg';

const ExpScene = ({ runAnim }) => {
  useEffect(() => {
    if (runAnim) {
      gsap.to("#overlay-dark-exp", 2, {
        top: "-100%",
        ease: "power3.inOut",
        delay: 2,
      });
      gsap.from(".divider-exp", 3, {
        scaleX: 0,
        ease: "power3.inOut",
        delay: 1,
        stagger: {
          amount: 1,
        },
      });
      gsap.from(".row-exp > .col-exp", 2, {
        opacity: 0,
        y: 40,
        ease: "power3.inOut",
        delay: 2,
        stagger: {
          amount: 1.5,
        },
      });
      gsap.from(".marquee-exp", 1, {
        bottom: "-5%",
        opacity: 0,
        ease: "power3.inOut",
        delay: 3.5,
      });
    }
  }, [runAnim]);

  const data = [
    {
      cooperation: 'Offshore Renewable Energy Catapult',
      role: 'Software Engineer',
      time: '10/2023 - Present',
      projects: [
        { name: 'Private 5G Testbed', projectRole: 'Network & Software Engineer', collaboratedWith: 'Associated British Ports; Acceleran; Boldyn Networks; Satellite Applications Catapult; Microsoft; XCECO' },
        { name: 'ARANa', projectRole: 'Front End Engineer', collaboratedWith: 'Bristol University; Capgemini; Meta; Microsoft; Samsung; Weaver Labs' },
        { name: 'SPARTA', projectRole: 'Full Stack Engineer', collaboratedWith: 'All Major UK Offshore windfarm owner/operators' },
        { name: 'Circular Economy Waste System', projectRole: "''", collaboratedWith: "''" },
        { name: 'AIS Data Retrieval Application', projectRole: "''", collaboratedWith: '-' },
      ]
    },
    {
      cooperation: 'Zeed',
      role: 'Software Development Intern',
      time: '05/2022 - 07/2022',
      projects: [
        { name: 'Company Website', projectRole: 'Front End Engineer', collaboratedWith: '-' },
        { name: 'Core Product - Mobile Application', projectRole: "''", collaboratedWith: '-' }
      ]
    },
    {
      cooperation: 'Bright Network',
      role: 'Software Engineering Intern',
      time: '07/2021 - 07/2021',
      projects: [
        { name: '-', projectRole: 'Intern', collaboratedWith: 'Amazon; Google; Goldman Sachs' }
      ]
    },
    // Add more data as needed
  ];

  if (!runAnim) {
    return <div style={{ backgroundColor: 'rgb(236, 196, 88)', height: '100vh', width: '100vw' }}></div>;
  }

  return (
    <div>
      <div id="overlay-light-exp" className="overlay-exp"></div>
      <div id="overlay-dark-exp" className="overlay-exp"></div>
      <div className="content-exp">
        <div className="nav-exp row-exp">
          <div className="col-exp">(Cooperation)</div>
          <div className="col-exp">(Role)</div>
          <div className="col-exp">(Time)</div>
          <div className="col-exp">(Projects)</div>
          <div className="col-exp">(Project Role)</div>
          <div className="col-exp">(Collaborated with)</div>
        </div>
        <div className="divider-exp nav-divider-exp"></div>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {item.projects.map((project, projectIndex) => (
              <div className="row-exp" key={projectIndex}>
                <div className="col-exp">{projectIndex === 0 ? item.cooperation : ''}</div>
                <div className="col-exp">{projectIndex === 0 ? item.role : ''}</div>
                <div className="col-exp">{projectIndex === 0 ? item.time : ''}</div>
                <div className="col-exp">{project.name}</div>
                <div className="col-exp">{project.projectRole}</div>
                <div className="col-exp">{project.collaboratedWith}</div>
              </div>
            ))}
            <div className="divider-exp"></div>
          </React.Fragment>
        ))}
        <div className= "marquee-container-exp">
        <div className="marquee-exp">
          <span>
          Experience &nbsp;<img className='ads-exp' src={ad1} alt="" /> &nbsp;
            Experience &nbsp; <img className='ads-exp' src={ad2} alt="" /> &nbsp;
            Experience &nbsp; <img className='ads-exp' src={ad3} alt="" /> &nbsp;
            Experience &nbsp; <img className='ads-exp' src={ad6} alt="" /> &nbsp;
            Experience &nbsp; <img className='ads-exp' src={ad4} alt="" /> &nbsp;
            Experience &nbsp; <img className='ads-exp' src={ad5} alt="" /> &nbsp;
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExpScene;