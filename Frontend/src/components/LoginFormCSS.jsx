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
        alert('Login Unsuccessful');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login: ' + error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign In</h2>
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
          <button type="submit" style={styles.button}>
            Sign In
          </button>
          
        </form>
        
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: 'url("https://media.sproutsocial.com/uploads/2023/09/12-ways-to-use-social-media-for-education-V2-FINAL.svg")',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '400px',
    padding: '40px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#0073b1',
    color: '#fff',
    padding: '12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  forgotPassword: {
    fontSize: '12px',
    color: '#555',
    marginTop: '16px',
  },
  signupLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#0073b1',
  },
};

export default LoginForm;
