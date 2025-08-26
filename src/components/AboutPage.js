import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/swastik23.jpeg'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height:100vh;
position: relative;
overflow-x: hidden;
overflow-y: auto;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 15vw;
max-width: 200px;
min-width: 150px;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #FFA500;
    box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
}
`
const BackButton = styled.button`
position: fixed;
top: 2rem;
right: 2rem;
background: transparent;
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
font-size: 1.5rem;
z-index: 10;
transition: all 0.3s ease;

&:hover {
    background: #FFA500;
    border-color: #FFA500;
    color: ${props => props.theme.body};
}
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: rgba(15, 15, 35, 0.95);
  padding: 2rem;
  width: 50vw;
  max-width: 800px;
  height: auto;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.7rem + 0.5vw);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-sizing: border-box;
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  
  div {
    width: 100%;
  }
  
  p {
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.text};
  }
  
  strong {
    color: #FFA500;
    font-weight: 600;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<BackButton onClick={() => window.history.back()}>←</BackButton>
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        <div>
        <p>I'm <strong>Swastik Khatua</strong>, a Frontend Developer and Co-Founder at <strong>Osmium</strong> — an AI-first EdTech platform that generates mock tests and personalizes learning for students across India.</p>
        
        <p>I specialize in building <strong>fast, minimal, and delightful web applications</strong> using modern technologies. My core stack includes Next.js, React, TypeScript, and Tailwind CSS, but I also enjoy backend development with Node.js, GraphQL, and MongoDB.</p>
        
        <p>At Osmium, I've built <strong>dashboards and landing pages</strong> with dark mode support, smooth animations, and integrated authentication systems. We're working with partners like <strong>AWS, Gujarat Government (SSIP), TCS, and Tata TeleCommunication</strong>.</p>
        
        <p>Beyond web development, I explore <strong>AI and computer vision projects</strong> using Python, OpenCV, and Mediapipe. I believe in building tools that make people's lives easier and constantly experiment with new technologies — from real-time applications to gesture-controlled interfaces.</p>
        </div>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
