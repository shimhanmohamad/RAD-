import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg') no-repeat center center/cover;
  color: blue;
`;

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [autoMessage, setAutoMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const hour = currentTime.getHours();
        if (hour < 12) {
            setAutoMessage('Good Morning! Welcome to CODECORE!');
        } else if (hour < 18) {
            setAutoMessage('Good Afternoon! Welcome to CODECORE!');
        } else {
            setAutoMessage('Good Evening! Welcome to CODECORE!');
        }
    }, [currentTime]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setWelcomeMessage(value);
    };

    return (
        <HomeContainer>
            <h1>{welcomeMessage || autoMessage}</h1>
            <h1>Current Time: {currentTime.toLocaleTimeString()}</h1>
            <input
                type="text"
                placeholder="Update welcome message"
                value={welcomeMessage}
                onChange={handleInputChange}
                style={{ marginTop: '20px', padding: '10px', width: '300px', fontSize: '1rem' }}
            />
        </HomeContainer>
    );
};

export default Home;
