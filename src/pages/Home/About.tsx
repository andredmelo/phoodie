import React from 'react';
import './About.css';

type AboutConstantProps = {
  title: string;
  subtitle: string;
  description1: string[];
  description2: string[];
  image1: string;
  image2: string;
};

const AboutConstant: React.FC<AboutConstantProps> = ({ title, subtitle, description1, description2, image1, image2 }) => {
  return (
    <section className='aboutContainer flex flex-col justify-center align-center items-center w-full max-w-[90%] md:max-w-[80%] lg:max-w-[85rem] gap-10'>
      <div className='flex flex-col md:flex-row'>
        <article className='flex flex-col w-full align-center text-center md:text-left'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {description1.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
        <picture className="w-full h-auto ml-8">
          <img src={image1} alt='about-image1'/>
        </picture>
      </div>
      <div className='flex flex-col w-full gap-6'>
        <picture>
          <img src={image2} alt='about-image2' className="w-full"/>
        </picture>
        <article className='flex flex-col align-center text-center mx-48'>
          {description2.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
        </article>
      </div>
    </section>
  );
};

export default AboutConstant;