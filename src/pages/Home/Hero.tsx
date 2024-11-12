import React from 'react';
import './Hero.css';
import { Link } from "react-router-dom";
import { useNavContext } from '../../context/NavContext';
import { phoodieWideSvg } from "../../assets/images/svg";
//import { phoodieWideSvg } from "../../assets/images/svg";



interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonName: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ /* title, */ subtitle, description, buttonName, image }) => {
  const { changeSection } = useNavContext();

  return (
    <section className='hero flex flex-col md:flex-row min-h-[445px] w-full max-w-[90%] md:max-w-[90%] lg:max-w-[65rem] gap-10 mx-auto p-8 md:p-12 bg-white/90 rounded-lg'>
      <article className='flex flex-col w-full min-w-[42%] lg:min-w-[35%] align-center text-center md:text-left items-center md:items-start'>
        <span className="flex items-center justify-start h-24 lg:h-28 w-44 lg:w-fit text-[var(--color-turkeyRed)] mb-4">
          {phoodieWideSvg}
        </span>
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
      <picture className='flex min-h-full overflow-hidden'>
        <img src={image} alt='hero image by Leohoho' className='object-cover h-full rounded-xl'/>
      </picture>
    </section>
  );
};

export default Hero;
