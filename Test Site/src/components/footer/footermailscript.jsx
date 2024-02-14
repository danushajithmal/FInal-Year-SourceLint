import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDate = format(new Date(), 'yyyy-MM-dd');

    const newUser = {
      email,
      date: formattedDate,
    };

    axios.post('http://localhost/subscribe.php', newUser)
      .then((response) => {
        console.log('Email subscribed successfully!');
      })
      .catch((error) => {
        console.error('Error subscribing to email:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" className="form-control" placeholder="Enter Your Email" required value={email} onChange={handleEmailChange}/>
        <button type="submit" className="btn btn-danger mt-3">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
