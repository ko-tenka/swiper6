import './Hero.css';
import Group1 from '../../../public/Group1.svg';
import Group2 from '../../../public/Group2.svg';
import Group11 from '../../../public/Group11.svg'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <img src={Group1} alt="Main background" className="hero__image hero__image--main" />
          <img src={Group11} alt="Mobile background" className="hero__image hero__image--mobile" />

          <div className="hero__content">
            <img src={Group2} alt="Overlay icon" className="hero__image hero__image--bg" />
            <h1 className="hero__title">A single platform for searching educational</h1>
            <a href="tel:+79992532525" className="hero__phone">+7 (999) 253 25 25</a>
            <p className="hero__text">We have an extensive database of universities</p>
            <a href="#" className="hero__button">Leave</a>
          </div>
        </div>
      </div>
    </section>
  );
}



