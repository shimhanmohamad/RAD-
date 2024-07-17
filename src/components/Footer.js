import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: lightblue;
  color: blue;
  position: fixed;
  width: 100%;
  bottom: 0;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 10px;
    color: #fff;

    &:hover {
      color: #ccc;
    }

    svg {
      font-size: 24px; /* Adjust icon size */
    }
  }
  color:
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 CodeCore. All rights reserved.</p>
            <div>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
            </div>
            <SocialMediaIcons>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
            </SocialMediaIcons>
        </FooterContainer>
    );
};

export default Footer;
