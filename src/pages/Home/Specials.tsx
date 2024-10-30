import React from 'react';
import './Specials.css';
import { Link } from "react-router-dom";
import IconMoto from '../../assets/images/moto_icon.svg';

interface SpecialsProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

const Specials: React.FC<SpecialsProps> = ({ title, price, image, description }) => {
  return (
    <>
      <section className='cardContainer'>
        <article>
          <img src={image} alt='specials' width={280} height={200} />
          <div className='title'>
            <h3>{title}</h3>
            <h4>{price}</h4>
          </div>
          <p>{description}</p>
          <div className='orderDelivery'>
            <h6>
            <Link to= './onlineorder'>Order a delivery</Link>
            </h6>
            <img src={IconMoto} alt='specials' width={20} />
          </div>
        </article>
      </section>
    </>
  );
};

export default Specials;
