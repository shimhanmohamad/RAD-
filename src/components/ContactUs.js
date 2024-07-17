import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg') no-repeat center center/cover;
  min-height: 100vh;
  color:blue

`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input, textarea {
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    
  }

  button {
    padding: 10px 20px;
  }
`;

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        document.title = 'Contact Us - Interactive Landing Page';
    }, []);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Valid email is required';
        if (!formData.message) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setSuccessMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        
        <ContactContainer>
            <h1>Contact Us</h1>
            <ContactForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {errors.name && <p>{errors.name}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
                {errors.message && <p>{errors.message}</p>}
                <button type="submit">Send</button>
            </ContactForm>
            {successMessage && <p>{successMessage}</p>}
            <div>
                <h2>Contact Information</h2>
                <p>Address: 123 /A ,Bambalapity,Colombo 7</p>
                <p>Phone: 0112346543</p>
                <p>Email: Designcode@gmail.com</p>
            </div>
        </ContactContainer>
    );
};

export default ContactUs;
