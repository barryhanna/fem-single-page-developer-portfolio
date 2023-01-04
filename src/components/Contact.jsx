import React from 'react';
import Container from './Container';
import Form from './Form';

export default function Contact() {
  return (
    <Container>
      <div className="columns">
        <div className="col-left">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="col-right">
          <Form />
        </div>
      </div>
    </Container>
  );
}
