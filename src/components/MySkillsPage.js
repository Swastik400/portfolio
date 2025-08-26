import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

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

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height:100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;
padding: 2rem;
gap: 2rem;
flex-wrap: wrap;

@media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
}

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1.5rem;
width: 35vw;
max-width: 400px;
min-width: 300px;
height: auto;
min-height: 50vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
border-radius: 10px;
transition: all 0.3s ease;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
box-sizing: border-box;

font-family: 'Inter', sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.7rem + 0.3vw);
padding: 0.5rem 0;
word-wrap: break-word;
overflow-wrap: break-word;

${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    display: block;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
}

ul,p{
    margin-left: 1rem;
    margin-right: 0.5rem;
}

ul {
    padding-left: 1rem;
}

li {
    margin-bottom: 0.3rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<BackButton onClick={() => window.history.back()}>←</BackButton>
<ParticleComponent theme='dark' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I specialize in building fast, minimal, and delightful web applications with modern technologies.
</Description>
<Description>
<strong>Frontend Skills</strong>
<p>
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3, JavaScript (ES6+)
</p>
</Description>
<Description>
<strong>Tools & Platforms</strong>
<p>
VS Code, Git/GitHub, Postman, AWS, Firebase, Vercel
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> Full Stack & AI
</Title>
<Description>
I also work on backend development and AI/ML projects to create complete solutions.
</Description>
<Description>
<strong>Backend & Database</strong>
<p>
Node.js, Express, MongoDB, GraphQL, JWT, bcrypt, WebSockets
</p>
</Description>
<Description>
<strong>AI/ML & Python</strong>
<p>
OpenCV, Mediapipe, PyTorch, Pandas, PyAutoGUI, Computer Vision
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
