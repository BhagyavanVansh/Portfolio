import React from 'react'
import './skills.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

  const skills = [
    {
      id:1,
      title: 'HTML',
      percentage:'75'
    },

    {
      id:2,
      title: 'CSS',
      percentage:'67'
    },

    {
      id:3,
      title: 'Javascript',
      percentage:'60'
    },

    {
      id:4,
      title: 'React JS',
      percentage:'55'
    },

    {
      id:5,
      title: 'Node JS',
      percentage:'45'
    },

    {
      id:6,
      title: 'Express JS',
      percentage:'40'
    },

    {
      id:7,
      title: 'Java',
      percentage:'62'
    },

    {
      id:8,
      title: 'C/C++',
      percentage:'58'
    }

  ]

  return (
    <section className="skills container section" id='skills'>
      <h2 className="section__title">My Skills</h2>

      <div className="skills__container grid">
        {skills.map(({title, percentage}, index) => {
          return (
            <div className="progress__box" key={index}>
              <div className="progress__circle">
                <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
              </div>
              <h3 className="skills__title">{title}</h3>
            </div>
          )
        })}
      </div>

      
    </section>
  )
}

export default Skills
