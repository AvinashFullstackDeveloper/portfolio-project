import React from 'react';
import './styles.scss';
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { BsInfoCircleFill } from 'react-icons/bs';

const About = () =>  {
    return (
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40} />} 
                />
        </section>
    );
}

export default About;