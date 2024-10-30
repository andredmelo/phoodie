import React from 'react';
import './Testimonials.css';
import stars5 from '../../assets/images/5_stars.png';

interface TestimonialsProps {
  name: string;
  picture: string;
  review: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ name, picture, review }) => {
  return (
    <section  className='reviewsContainer'>
      <article>
        <div className='pictures'>
          <img className='avatar' src={picture} alt='review' />
          <h4>{name}</h4>
          <img src={stars5} alt='review' width={120}/>
        </div>
        <p>{review}</p>
      </article>
    </section>
  );
};

export default Testimonials;