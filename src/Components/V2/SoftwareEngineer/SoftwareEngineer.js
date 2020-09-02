import React from 'react';

import Header from '../Header/Header';
import MiniHeader2 from '../MiniHeader/MiniHeader';
import Card from '../Card/Card';
import Form from './Form';

import Devmtn from '../Images/Devmtn.png';
import Udemy from '../Images/Udemy.png';
import SlideKick from '../Images/SlideKick.png';

const SoftwareEngineer = (props) => {
  return (<div id='main-div'>
    <Header title='SOFTWARE ENGINEERING'/>
    <MiniHeader2 title='SOFTWARE ENGINEER'/>
    <div className='white-section'>
      <h2>EXPERIENCE</h2>
      <div className='grid'>
        <Card background='gray' buttonColor='white'
          icon={SlideKick}
          title='Full-Stack Software Engineer'
          details='SlideKick'
          button1='SEE IT LIVE'
          date='Jun 2020 — Present'/>
        <Card background='gray' buttonColor='white'
          icon={SlideKick}
          title='UX/UI Designer'
          details='SJ Photography'
          date='Jul 2020 — Present'
          button1='SEE IT LIVE'
          />
        <Card background='gray' buttonColor='white'
          icon={SlideKick}
          title='Web Developer'
          details='HQRTCards'
          date='Aug 2020 — Present'
          button1='COMING SOON'/>
      </div>
      {/* <Form/> */}
    </div>
    <div className='gray-section'>
      <h2>EDUCATION</h2>
      <div className='grid'>
        <Card background='white' buttonColor='gray'
          icon={Devmtn}
          title='Software Development'
          details='Devmountain'
          date='Oct 2019 — Jan 2020'
          button1='VIEW THE COURSE'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='The Complete JavaScript Course'
          details='Udemy'
          date='Jan 2020 — Mar 2020'
          button1='VIEW THE COURSE'
          button2='VIEW MY CODE'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='React — The Complete Guide'
          details='Udemy'
          date='Feb 2020 — Mar 2020'
          button1='VIEW THE COURSE'
          button2='VIEW MY CODE'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='React Native — The Practical Guide'
          details='Udemy'
          date='Apr 2020 — Present'
          button1='VIEW THE COURSE'
          button2='VIEW MY CODE'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='Angular — The Complete Guide'
          details='Udemy'
          date='Jun 2020 — Present'
          button1='VIEW THE COURSE'
          button2='VIEW MY CODE'/>
        <Card background='white' buttonColor='gray'
          icon={Udemy}
          title='Computer Science 101'
          details='Udemy'
          date='Apr 2020 — Apr 2020'
          button1='VIEW THE COURSE'/>
      </div>
    </div>

    <div className='white-section'>
      <h2>LANGUAGES & TECHNOLOGIES</h2>
      <div className='icon-grid'>
        <div className='icon-container'>
          <div className='icon' id='axios'/>
          <span>Axios</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='css'/>
          <span>CSS</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='express'/>
          <span>express</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='html'/>
          <span>HTML</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='jsx'/>
          <span>JSX</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='javascript'/>
          <span>JavaScript</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='node'/>
          <span>Node</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='postgresql'/>
          <span>PostgreSQL</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='postman'/>
          <span>Postman</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='react'/>
          <span>React</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='redux'/>
          <span>Redux</span>
        </div>
        <div className='icon-container'>
          <div className='icon' id='sass'/>
          <span>Sass</span>
        </div>
      </div>
    </div>
  </div>)
}
export default SoftwareEngineer;
