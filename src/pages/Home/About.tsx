import React from 'react';
import './About.css';

type AboutConstantProps = {
  title: string;
  subtitle: string;
  description: string[];
  imageA: string;
  imageB: string;
};

const AboutConstant: React.FC<AboutConstantProps> = ({ title, subtitle, description, imageA, imageB }) => {
  return (
    <section className='aboutContainer'>
      <div>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
        {description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <picture>
        <img src={imageA} alt='about-image1'/>
      </picture>
      <picture>
        <img src={imageB} alt='about-image2' className="big"/>
      </picture>
    </section>
  );
};

export default AboutConstant;
