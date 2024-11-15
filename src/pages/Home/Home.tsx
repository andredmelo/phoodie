import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { useNavContext } from '../../context/NavContext';
import { MediaQueries } from "../../types/mediaQueries";

import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import { HeroConstant } from '../../data/Home/HeroConstant';
import { SpecialsConstant } from '../../data/Home/SpecialsConstant';
import { TestimonialsConstant } from '../../data/Home/TestimonialsConstant';
import { AboutConstant } from '../../data/Home/AboutConstant';

const Home: React.FC<MediaQueries> = (props): JSX.Element => {
  const { changeSection } = useNavContext();

  const [backgroundImage, setBackgroundImage] = useState("url('assets/images/backgrounds/Home-Hero-Phoodie-2560w.webp')");
  useEffect(() => {
    let backgroundImage = "url('assets/images/backgrounds/Home-Hero-Phoodie-2560w.webp')";
    if (props.isUnder768) {
      //backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-768w.webp')";
    } else if (props.isUnder1024) {
      backgroundImage = "url('assets/images/backgrounds/Home-Hero-Phoodie-10240w.webp')";
    } else if (props.isUnder1280) {
      backgroundImage = "url('assets/images/backgrounds/Home-Hero-Phoodie-1280w.webp')";
    } else if (props.isUnder1536) {
      backgroundImage = "url('assets/images/backgrounds/Home-Hero-Phoodie-1920w.webp')";
    }
    setBackgroundImage(backgroundImage);

  }, [props.isUnder768, props.isUnder1024, props.isUnder1280, props.isUnder1536]);

  return (
    <>
      {/* <div className="spacer"></div> */}

      <section
        id='hero'
        className='heroSection w-full flex justify-center items-center gap-x-8'
        style={{ backgroundImage: backgroundImage }}
      >
        {HeroConstant.map((hero) => (
          <article key={hero.id}>
            <Hero
              title={hero.title}
              subtitle={hero.subtitle}
              description={hero.description}
              buttonName={hero.buttonName}
              image={hero.image}
            />
          </article>
        ))}
      </section>

      <div
        className="dslc-section-divider dslc-flip-ver"
        data-divider-pos="bottom"
        data-divider-style="hill-side-soft-off"
      >
				<svg id="hill-side-soft-off" className="fill-[var(--color-whiteSmoke)] h-[calc(var(--navbar-height)*var(--multiplier))] w-full" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,30.5019121 L1442,100.654403 L0,100.654403 C572.295431,33.9877365 935.145886,0.654403168 1088.55136,0.654403168 C1162.74657,0.654403168 1280.56278,10.6035728 1442,30.5019121 Z" id="hill-side-soft-off" transform="translate(721.000000, 50.654403) scale(1, -1) translate(-721.000000, -50.654403) "></path>
				</svg>
      </div>

      <section id='menu' className='flex flex-col md:flex-row specialsTitle gap-6 md:gap-10'>
        <h1>This Week Specials!</h1>
        <Link
          to="/order-online"
          aria-label="Order Online"
          onClick={() => changeSection(3)}
        >
          <button className='primayButton'>Order Online</button>
        </Link>
      </section>

      <section className='specialsSection flex flex-wrap w-full h-auto justify-center gap-20 pb-16'>
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
				<svg id="hill-side-soft-off" className="fill-[var(--color-turkeyRed)] w-full h-[calc(var(--navbar-height)*var(--multiplier))]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
        /* data-divider-pos="bottom" */
        data-divider-style="hill-side-soft"
      >
				<svg id="hill-side-soft" className="fill-[var(--color-turkeyRed)] w-full h-[calc(var(--navbar-height)*var(--multiplier))]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,33.8142136 C1280.56278,15.0410066 1162.74657,5.65440317 1088.55136,5.65440317 C935.145886,5.65440317 572.295431,37.1029354 3.86535248e-12,100 L0,0 L1442,0 L1442,33.8142136 Z"></path>
				</svg>
      </div>

      <section id='about' className='aboutSection w-full flex justify-center items-center py-16 md:py-24'>
        {AboutConstant.map((about) => (
          <About
            key={about.id}
            title={about.title}
            subtitle1={about.subtitle1}
            description1={about.description1}
            image1={about.image1}
            subtitle2={about.subtitle2}
            description2={about.description2}
            image2A={about.image2A}
            image2B={about.image2B}
            subtitle3={about.subtitle3}
            description3={about.description3}
            image3={about.image3}
            subtitle4={about.subtitle4}
            description4={about.description4}
          />
        ))}
      </section>

    </>
  );
};

export default Home;
