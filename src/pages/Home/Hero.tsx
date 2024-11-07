import React from 'react';
import './Hero.css';
import { Link } from "react-router-dom";
import { useNavContext } from '../../context/NavContext';
//import { phoodieWideSvg } from "../../assets/images/svg";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonName: string;
  pict: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, buttonName, pict }) => {
  const { changeSection } = useNavContext();

  return (
    <section className='hero flex flex-col md:flex-row justify-center align-start py-5 px-4 md:px-10 lg:px-0 gap-8'>
      <article className='flex flex-col align-center text-center md:text-left'>
        <h1>{title}</h1>
        {/* <span className="flex justify-start h-[50px] lg:h-[100px] text-[var(--color-white)]">
          {phoodieWideSvg}
        </span> */}
        <h2> {subtitle}</h2>
        <p>{description}</p>
        <Link
          to="/Reservations"
          aria-label="Reservations"
          onClick={() => changeSection(2)}
        >
          <button className='primayButton'>{buttonName}</button>
        </Link>
      </article>
      <div className='w-full h-auto'>
        <img src={pict} alt='hero' className='rounded-xl object-scale-down'/>
      </div>
    </section>
  );
};

export default Hero;
