import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue; /* Static background color */
  color: blue; /* Static text color */
  padding: 10px 20px;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 50px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
    background-color: #333; /* Static background color */
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const NavLinkItem = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: blue;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContainer>
      <h2>CODECORE</h2>
      <ToggleButton onClick={toggleNav}>{isOpen ? 'Close' : 'Menu'}</ToggleButton>
      <NavLinks isOpen={isOpen}>
        <NavLinkItem href="/">Home</NavLinkItem>
        <NavLinkItem href="/about">About</NavLinkItem>
        <NavLinkItem href="/contact-us">Contact Us</NavLinkItem>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;
