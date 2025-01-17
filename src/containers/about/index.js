import React from 'react';
import './styles.scss';
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { BsInfoCircleFill } from 'react-icons/bs';

const About = () =>  {

    const jobSummary = "Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to detail and how you can help implement design ideas for your future employer."
    return (
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40} />} 
                />
                <div className="about__content">
                <h3> Front End Developer </h3>
                <p>{jobSummary}</p>
                </div>
        </section>
    );
}

export default About;