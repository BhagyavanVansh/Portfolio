import React from 'react'
import './project.css'
import Menu from './Menu'

const Project = () => {
    
  return (
    <section className="work container section" id='projects'>
        <h2 className="section__title">Projects</h2>

        <div className="work__container grid">
            {
                Menu.map((elem) => {
                    const{id, image, title} = elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <h3 className="work__title">{title}</h3>
                            <a href="https://github.com/BhagyavanVansh?tab=repositories" className="work__button" target='_blank' rel="noreferrer">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Project
