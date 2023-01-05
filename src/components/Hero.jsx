import React from 'react';
import Container from './Container';
import heroImg from '../assets/images/image-profile-desktop.webp';

export default function Hero() {
  return (
    <div className="hero">
      <Container>
        <div className="columns">
          <div className="col-left flow">
            <h1 className="hero-title">
              Nice to meet you!
              <br />
              I'm Adam Keyes.
            </h1>
            <p>
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button>Contact Me</button>
          </div>
          <div className="col-right">
            <div className="profile-photo__container">
              <img className="hero-img" src={heroImg} alt="Adam Keyes" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
