// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to a dashboard
        console.log('Login successful!');
        alert('Login Successful !!');
      } else {
        // Handle login failure
        console.error('Login failed');
        alert('Login Unsuccessful')
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login:', error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.highlight}></div>
        <h2 style={styles.heading}>Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <br />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: 'url("https://media.sproutsocial.com/uploads/2023/09/12-ways-to-use-social-media-for-education-V2-FINAL.svg")', // Add the path to your background image
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use a transparent background color
    position: 'relative',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '2px solid #3498db', // Highlight color
    borderRadius: '5px',
    pointerEvents: 'none', // Ensure that the highlight doesn't interfere with interaction
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    marginTop: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db', // Button color
    color: '#fff', // Text color
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default LoginForm;
