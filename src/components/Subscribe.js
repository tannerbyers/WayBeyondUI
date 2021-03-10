import React, { useState } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then(data => {
        alert(data.result);
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

            <form onSubmit={handleSubmit} className="form-inline d-flex">
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="Enter email address..."
                onChange={handleEmailChange}
              />
              <button type="submit" className="btn btn-primary mx-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
