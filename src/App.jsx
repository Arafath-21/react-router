import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar'
import All  from './Components/All'
import Fsd from './Components/Fsd'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './Components/Career'


function App() {
  let data = [
    {
      image: "https://source.unsplash.com/450x300/?fullstack",
      head: "Full Stack Development",
      content: "Embark on a coding odyssey! Master the art of full stack development to create seamless web experiences.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Decode the language of data! Become a data sorcerer, turning raw information into actionable insights.",
    },
    {
      image: "https://source.unsplash.com/450x300/?careers",
      head: "Career Development",
      content: "Sculpt your career masterpiece! Navigate through stages of growth and emerge as a seasoned professional.",
    },
    {
      image: "https://source.unsplash.com/450x300/?fullstack",
      head: "Full Stack Development",
      content: "Craft digital wonders! Full stack developers, your journey to career happiness begins here.",
    },
    {
      image: "https://source.unsplash.com/450x300/?fullstack",
      head: "Full Stack Development",
      content: "Architect the digital world! Dive into full stack frameworks and shape the future of web development.",
    },
    {
      image: "https://source.unsplash.com/450x300/?careers",
      head: "Career Development",
      content: "Navigate career stages with finesse! From establishment to transition, script your success story.",
    },
    {
      image: "https://source.unsplash.com/450x300/?careers",
      head: "Career Development",
      content: "Master the art of career management! Evaluate, prepare, commit, and thrive in the ever-evolving workplace.",
    },
    {
      image: "https://source.unsplash.com/450x300/?careers",
      head: "Career Development",
      content: "Unlock the code of personality! Explore the Big Five Model and understand the keys to professional success.",
    },
    {
      image: "https://source.unsplash.com/450x300/?cybersecurity",
      head: "Cyber Security",
      content: "Guardians of the digital realm! Dive into cybersecurity and shield against the onslaught of cyber threats.",
    },
    {
      image: "https://source.unsplash.com/450x300/?cybersecurity",
      head: "Cyber Security",
      content: "Decrypt the salary cipher! Cybersecurity analysts, secure your career with lucrative rewards.",
    },
    {
      image: "https://source.unsplash.com/450x300/?cybersecurity",
      head: "Cyber Security",
      content: "Defenders of data fortresses! Join the ranks of cybersecurity professionals and ensure digital safety.",
    },
    {
      image: "https://source.unsplash.com/450x300/?cybersecurity",
      head: "Cyber Security",
      content: "Safeguard digital frontiers! Cybersecurity professionals, your expertise is the shield against cyber threats.",
    },
    {
      image: "https://source.unsplash.com/450x300/?cybersecurity",
      head: "Cyber Security",
      content: "Master the triad of security! Network, cloud, and physical security—your keys to cybersecurity mastery.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Elevate beyond code! Data science, the path to a lucrative future—where insights transform into gold.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Unlock the data vault! Data scientists, where algorithms meet artistry to predict the future.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Chart the data frontier! Data science evolves—specialize, innovate, and shape the future of analytics.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Interpret data symphonies! AI and Machine Learning guide data scientists to insights beyond imagination.",
    },
    {
      image: "https://source.unsplash.com/450x300/?science",
      head: "Data Science",
      content: "Dreaming of top-tier companies? Data science—a journey where ambition meets opportunity.",
    },
    {
      image: "https://source.unsplash.com/450x300/?fullstack",
      head: "Full Stack Development",
      content: "Frontend Syllabus decoded! From programming basics to React, sculpt your journey into frontend mastery.",
    },
  ];
  
  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/all' element={<All data={data}/>} />
    <Route path='/full-stack-developer' element={<Fsd data={data}/>} />
    <Route path='/data-science' element={<DataScience data={data}/>} />
    <Route path='/cyber-security' element={<CyberSecurity data={data}/>} />
    <Route path='/career' element={<Career data={data}/>} />
    <Route path='*' element={<Navigate to='/all' />} />

  </Routes>
  </BrowserRouter>
  </>
}

export default App