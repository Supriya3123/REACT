import React, { useState } from 'react';
import Navbar from '../components/navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send email, store data, etc.)
    console.log(formData);
    alert('Thank you! Your message has been sent.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  className='form-control'
                  placeholder='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='5'
                  required
                ></textarea>
              </div>
              <button type='submit' className='btn btn-outline-dark'>
                Send Message
              </button>
            </form>
          </div>
          <div className='col-md-6'>
            <h2>Contact Details</h2>
            <p><strong>Address:</strong> $-40-146 Kukatpally Hyderabad Telangana</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> srcollections@gmail.com</p>
            <h2 className='mt-5'>Location</h2>
            <iframe
              title='Showroom Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.855221594013!2d[Longitude]!3d[Latitude]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z[Latitude]![Longitude]!5e0!3m2!1sen!2sus!4v1620232181743!5m2!1sen!2sus'
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
