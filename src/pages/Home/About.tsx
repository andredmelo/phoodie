import React from 'react';
import './About.css';
import { phoodieWideSvg } from "../../assets/images/svg";

type AboutConstantProps = {
  title: string;
  subtitle1: string;
  description1: string[];
  image1: string;
  subtitle2: string;
  description2: string[];
  image2A: string;
  image2B: string;
  subtitle3: string;
  description3: string[];
  image3: string;
  subtitle4: string;
  description4: string[];
};

const AboutConstant: React.FC<AboutConstantProps> = ({ description1, image1, subtitle2, description2, image2A, image2B, subtitle3, description3, image3, subtitle4, description4 }) => {
  return (
    <section className='aboutContainer flex flex-col justify-center align-center items-center w-full max-w-[95%] md:max-w-[98%] xl:max-w-[80rem] gap-10 mb-6 md:mb-12 lg:mb-24'>

      <div className='flex flex-col md:flex-row items-center w-full md:max-w-[95%] xl:max-w-[80%] h-full gap-10'>
        <article className='basis-[30%] flex flex-col w-full align-center items-center text-center md:text-left'>
          <h2>Welcome to</h2>
          {/* <h1>{title}</h1> */}
          <span className="flex h-24 lg:h-28 w-44 lg:w-fit items-center justify-center md:justify-start text-[var(--color-turkeyRed)] my-4 md:my-1 xl:my-4">
            {phoodieWideSvg}
          </span>
          {/* <h2>{subtitle1}</h2> */}
          {description1.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
        <picture className="basis-[70%] w-full h-auto">
          <img src={image1} alt='about-image1'/>
        </picture>
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center w-full h-full gap-10'>
        <picture className="basis-[30%] w-full h-auto">
          <img src={image2A} alt='about-image1'/>
        </picture>
        <article className='basis-[40%] flex flex-col w-full align-center text-center'>
          <h2>{subtitle2}</h2>
          {description2.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
        <picture className="hidden md:block basis-[30%] w-full h-auto">
          <img src={image2B} alt='about-image1'/>
        </picture>
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center w-full md:max-w-[95%] xl:max-w-[80%] h-full gap-10'>
        <picture className="basis-[72%] w-full h-auto">
          <img src={image3} alt='about-image1'/>
        </picture>
        <article className='basis-[28%] flex flex-col w-full align-center text-center md:text-right'>
          <h2>{subtitle3}</h2>
          {description3.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
      </div>

      <div className='flex flex-col md:flex-row items-center w-full h-full gap-10'>
        <article className='flex flex-col w-full align-center text-center'>
          <h2>{subtitle4}</h2>
          {description4.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
      </div>

      {/* <div className='flex flex-col w-full gap-6'>
        <picture>
          <img src={image2} alt='about-image2' className="w-full"/>
        </picture>
      </div> */}

    </section>
  );
};

export default AboutConstant;