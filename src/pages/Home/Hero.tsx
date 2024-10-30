import React from 'react';
import './Hero.css';
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonName: string;
  pict: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, buttonName, pict }) => {
  return (
    <section className='hero'>
      <article>
        <h1>{title}</h1>
        <h2> {subtitle}</h2>
        <p>{description}</p>
        <Link to="/Reservations">
        <button className='primayButton'>{buttonName}</button>
        </Link>
      </article>
      <div>
        <img src={pict} alt='hero' />
      </div>
    </section>
  );
};

export default Hero;
