import React, { useState } from 'react';
import axios from 'axios';
import appConfig from '../../../app-config'; // Adjust the path according to your project

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${appConfig.BACKEND_BASE_URL}/api/support`, formData)
      .then(response => {
        console.log('Support request sent:', response.data);
        setIsSubmitted(true);
      })
      .catch(error => {
        console.error('Error sending support request:', error);
      });
  };

  return (
    <div className="support-page mb-5">
      <h2>Support</h2>
      {isSubmitted ? (
        <p>Your support request has been submitted. We will get back to you soon.</p>
      ) : (
        <form className='w-50 m-auto' onSubmit={handleSubmit} style={{textAlign: 'left'}}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
            className='w-100'
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SupportPage;
