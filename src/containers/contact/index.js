import React from 'react';
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent/index";

const Contact = () =>  {
    return (
        <section id="contact" className="contact">
        <PageHeaderContent
          headerText="My Contact"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    );
}

export default Contact;