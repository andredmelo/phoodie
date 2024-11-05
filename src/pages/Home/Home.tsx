//import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { useNavContext } from '../../context/NavContext';

import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import { HeroConstant } from '../../data/Home/HeroConstant';
import { SpecialsConstant } from '../../data/Home/SpecialsConstant';
import { TestimonialsConstant } from '../../data/Home/TestimonialsConstant';
import { AboutConstant } from '../../data/Home/AboutConstant';

const Home = () => {
  const { changeSection } = useNavContext();

  return (
    <main>
      {/* <div className="spacer"></div> */}

      <section id='home' className='heroSection flex flex-col'>
        <div className="w-full spacer" />
        <div className="w-full spacer" />
        {HeroConstant.map((hero) => (
          <article key= {hero.id}>
            <Hero
              title={hero.title}
              subtitle={hero.subtitle}
              description={hero.description}
              buttonName={hero.buttonName}
              pict={hero.image}
            />
          </article>
        ))}
      </section>

      <div
        className="dslc-section-divider"
        data-divider-pos="bottom"
        data-divider-style="hill-side-soft-off"
      >
				<svg id="hill-side-soft-off" className="fill-[var(--color-turkeyRed-90)] h-[40px] w-full" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,30.5019121 L1442,100.654403 L0,100.654403 C572.295431,33.9877365 935.145886,0.654403168 1088.55136,0.654403168 C1162.74657,0.654403168 1280.56278,10.6035728 1442,30.5019121 Z" id="hill-side-soft-off" transform="translate(721.000000, 50.654403) scale(1, -1) translate(-721.000000, -50.654403) "></path>
				</svg>
      </div>

      <section id='menu' className='specialsTitle'>
        <h1>This Week Specials!</h1>
        <Link
          to="/order-online"
          aria-label="Order Online"
          onClick={() => changeSection(3)}
        >
          <button className='primayButton'>Online Menu</button>
        </Link>
      </section>

      <section className='specialsSection'>
        {SpecialsConstant.map((special) => (
          <article key={special.id}>
            <Specials
              title={special.title}
              price={special.price}
              description={special.description}
              image={special.image}
            />
          </article>
        ))}
      </section>

      <div className="dslc-section-divider dslc-flip-hor dslc-flip-ver" data-divider-pos="top" data-divider-style="hill-side-soft-off">
				<svg id="hill-side-soft-off" className="fill-[var(--color-orangeWeb-90)] w-full h-[50px]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,30.5019121 L1442,100.654403 L0,100.654403 C572.295431,33.9877365 935.145886,0.654403168 1088.55136,0.654403168 C1162.74657,0.654403168 1280.56278,10.6035728 1442,30.5019121 Z" id="hill-side-soft-off" transform="translate(721.000000, 50.654403) scale(1, -1) translate(-721.000000, -50.654403) "></path>
				</svg>
      </div>

      <section id='testimonialTitle' className='testimonialTitle'>
        <h1>Testimonials</h1>
      </section>
      <section id='testimonials' className='testimonialSection'>
        {TestimonialsConstant.map((review) => (
          <article key={review.id}>
            <Testimonials
              name={review.name}
              picture={review.image}
              review={review.review}
              /* stars={review.stars} */
            />
          </article>
        ))}
      </section>

      <div
        className="dslc-section-divider"
        data-divider-pos="bottom"
        data-divider-style="hill-side-soft"
      >
				<svg id="hill-side-soft" className="fill-[var(--color-orangeWeb-90)] w-full h-[80px]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,33.8142136 C1280.56278,15.0410066 1162.74657,5.65440317 1088.55136,5.65440317 C935.145886,5.65440317 572.295431,37.1029354 3.86535248e-12,100 L0,0 L1442,0 L1442,33.8142136 Z"></path>
				</svg>
      </div>

      <section id='about' className='aboutSection'>
        {AboutConstant.map((about) => (
          <article key={about.id}>
            <About
              title={about.title}
              subtitle={about.subtitle}
              description={about.description}
              imageA={about.imageA}
              imageB={about.imageB}
            />
          </article>
        ))}
      </section>

    </main>
  );
};

export default Home;
