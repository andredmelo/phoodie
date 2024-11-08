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
    <section  className='reviewsContainer flex w-72 h-full rounded-md gap-20 bg-white/95 shadow-md'>
      <article>
        <div className='pictures'>
          <img className='avatar' src={picture} alt='review avatar picture' />
          <h4>{name}</h4>
          <img src={stars5} alt='review 5 stars' width={120}/>
        </div>
        <p>{review}</p>
      </article>
    </section>
  );
};

export default Testimonials;