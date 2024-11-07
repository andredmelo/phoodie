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
    <section className='flex flex-col justify-center align-center items-center py-5 px-4 md:px-10 lg:px-0 gap-8'>
      <div className='aboutContainer flex flex-col md:flex-row w-full lg:max-w-[60rem]'>
        <article className='flex flex-col align-center text-center md:text-left'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
        <picture className="w-full md:w-[35rem] lg:w-[70rem] h-auto mx-8">
          <img src={imageA} alt='about-image1'/>
        </picture>
      </div>
      <picture>
        <img src={imageB} alt='about-image2' className="big"/>
      </picture>
    </section>
  );
};

export default AboutConstant;