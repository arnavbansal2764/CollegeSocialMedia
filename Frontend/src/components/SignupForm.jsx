import React, { useState } from 'react';

const Signup = () => {
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
        // Handle successful signup, e.g., redirect to a new page
        console.log('Signup successful!');
      } else {
        // Handle signup failure
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Graduation:
          <input
            type="number"
            name="graduation"
            value={formData.graduation}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Student ID (sid):
          <input
            type="text"
            name="sid"
            value={formData.sid}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Branch:
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          College:
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
