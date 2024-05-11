import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './emaillist.css';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:5000/email/fetch')
      .then((response) => {
        setEmails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching emails:', error);
      });
  }, []);

  return (
    
    <div className='container'>
      <h3>Subscribed Emails</h3><br/>
      <table className='table table-bordered table-striped'>
      <thead>
        <tr>
          <th>Email</th>
          <th>Reg Date</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((item, index) => (
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
      
  

  );
};

export default EmailList;
