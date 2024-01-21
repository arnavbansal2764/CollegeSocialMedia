import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    graduation: '',
    sid: '',
    branch: '',
    college: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful signup, e.g., redirect to a dashboard
        console.log('Signup successful!');
        alert('Signup Successful !!');
      } else {
        // Handle signup failure
        console.error('Signup failed');
        alert('Signup Unsuccessful');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup: ' + error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign Up</h2>
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
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Password (6 or more characters):
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Graduation:
            <input
              type="number"
              name="graduation"
              value={formData.graduation}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Student ID (SID):
            <input
              type="text"
              name="sid"
              value={formData.sid}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Branch:
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            College:
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>
            Sign Up
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
  terms: {
    fontSize: '12px',
    color: '#555',
    marginTop: '16px',
  },
  loginLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#0073b1',
  },
};

export default SignupForm;
