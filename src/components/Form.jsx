import React from 'react';

export default function Form() {
  return (
    <form>
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <input type="text" placeholder="Name" id="name" />
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input type="email" placeholder="Email" id="email" />
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <textarea placeholder="Message" id="message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
