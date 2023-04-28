import React from 'react'
import './home.css';
import Me from '../../images/avatar-1.svg';
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Bhagyavan Vansh</h1>
            <span className="home__education">I am a Computer Engineer</span>
            <HeaderSocials/>

            <a href="#contact" rel="noreferrer" className="btn">Hire Me</a>
        </div>

        
    </section>
  )
}

export default Home
