import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensures the container covers the entire viewport height */
  background: url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg') no-repeat center center/cover;
  text-align: center;
  color: blue;
`;

const About = () => {
    return (
        <AboutContainer>
            <h1>About Us</h1>
            <nav>
                <NavLink to="history">History</NavLink>
                <NavLink to="team">Team</NavLink>
                <NavLink to="values">Values</NavLink>
            </nav>
            <Routes>
                <Route path="history" element={<History />} />
                <Route path="team" element={<Team />} />
                <Route path="values" element={<Values />} />
            </Routes>
        </AboutContainer>
    );
};

const History = () => (
    <div>
        <h2>Our History</h2>
        <p>Founded in 1984 in a small garage, our company began with a single innovative kitchen gadget. Rapid success allowed us to move to a larger facility by 1986 and open our first retail store in 1990. The 1990s saw expansion nationwide, and we launched our online store in 2002, reaching global customers. A major rebranding in 2005 revitalized our brand, followed by a state-of-the-art manufacturing facility in 2015. Despite challenges during the 2020 pandemic, we adapted swiftly, maintaining growth. Celebrating our 37th anniversary in 2021, we remain committed to innovation, quality, and exceptional service, looking forward to a bright future.</p>
    </div>
);

const Team = () => (
    <div>
        <h2>Our Team</h2>
        <p>Our team is a diverse and talented group of professionals committed to excellence. From our innovative engineers and creative designers to our dedicated customer support staff, each member brings unique skills and experiences to the table. Our leadership team guides with vision and integrity, fostering a collaborative and inclusive work environment. We pride ourselves on continuous learning and development, ensuring that we stay ahead of industry trends. Together, we work tirelessly to deliver outstanding products and services, driven by a shared passion for innovation and customer satisfaction. Our team's dedication and hard work are the foundation of our success.</p>
    </div>
);

const Values = () => (
    <div>
        <h2>Our Values</h2>
        <p>At the heart of our company are core values that guide everything we do. We prioritize innovation, constantly seeking new and better ways to serve our customers. Integrity is fundamental; we conduct our business with honesty and transparency. Customer satisfaction drives us; we are dedicated to providing exceptional products and services. We value teamwork, believing that collaboration leads to greater success. Sustainability is crucial, and we strive to minimize our environmental impact. Community involvement is important to us, and we actively support local initiatives. These values shape our culture and drive our commitment to making a positive impact.</p>
    </div>
);

export default About;