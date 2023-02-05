import React from 'react';
import useForm from '../hooks/useForm';

export default function Form() {
  const [formData, setFormData] = useForm({
    name: '',
    email: '',
    message: '',
  });

  function handleOnChange(e) {
    const { name } = e.target;
    setFormData(name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => handleOnChange(e)}
      />
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleOnChange(e)}
      />
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <textarea
        placeholder="Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={(e) => handleOnChange(e)}
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
