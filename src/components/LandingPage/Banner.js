import React from 'react';


const Banner = () => (
  <section className="section box-flex">
    <div className="welcome">
      <div className="introduction">
        <h1>A Social platform for the creative at heart</h1>
        <p className="intro-text">
          Create a community of like minded authors to foster inspiration and
          innovation by leveraging the modern web.
        </p>
        <div className="mt-4 p-0 float-left">
          <button type="submit" className="btn button-primary">Get Started</button>
          <button type="submit" className="btn ml-2">Login</button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
