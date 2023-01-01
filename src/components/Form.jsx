import React from 'react'

export default function Form() {
	return (
		<form>
			<label htmlFor="name">Name</label>
			<input type="text" placeholder='Name' id="name" />
			<label htmlFor="email">Email</label>
			<input type="email" placeholder='Email' id="email" />
			<label htmlFor="message">Message</label>
			<textarea placeholder='message' id="message"></textarea>
			<button type="submit">Send Message</button>
		</form>
	)
}
