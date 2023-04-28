import React from "react";
import "./education.css";
import Data from "./Data";
import Image from '../../images/avatar-2.svg'

 // eslint-disable-next-line 

const Education = () => {
  return (
    <section className="education container section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="info__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            
              return (
                <div className="timeline__item" key={id}>
                    <i className={val.icon}></i>
                    <span className="timeline__date">{val.year}</span>
                    <h3 className="timeline_title">{val.title}</h3>
                    <p className="timeline__text">{val.desc}</p>
                </div>
              ); 
            
          })}
        </div>

        <div className="grid right__side">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Education;
