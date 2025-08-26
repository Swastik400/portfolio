import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/swastik23.jpeg'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 75vw;
max-width: 1200px;
height:65vh;
min-height: 500px;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    border-radius: 10px;


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    border: 3px solid #FFA500;
    box-shadow: 0 10px 30px rgba(255, 165, 0, 0.3);
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.text};
padding: 2rem;
cursor: pointer;
width: 100%;
box-sizing: border-box;

display: flex;
flex-direction: column;
justify-content: center;

h1 {
    font-size: calc(1.2em + 1.5vw);
    margin-bottom: 0.3rem;
    line-height: 1.2;
}

h3 {
    font-size: calc(1em + 1.2vw);
    margin-bottom: 0.3rem;
    color: #FFA500;
    line-height: 1.2;
}

h6 {
    color: ${props => `rgba(${props.theme.textRgba || '255,255,255'},0.8)` };
    font-size: calc(0.6rem + 0.8vw);
    font-weight: 400;
    margin-bottom: 0.8rem;
    line-height: 1.3;
}

p {
    color: ${props => `rgba(${props.theme.textRgba || '255,255,255'},0.7)` };
    font-size: calc(0.5rem + 0.6vw);
    font-weight: 300;
    line-height: 1.5;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
}

.cta-buttons {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: calc(0.4rem + 0.5vw);
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
    min-width: 100px;
}

.btn-primary {
    background: #FFA500;
    color: ${props => props.theme.body};
    border: 2px solid #FFA500;
}

.btn-primary:hover {
    background: transparent;
    color: #FFA500;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
}

.btn-secondary:hover {
    border-color: #FFA500;
    color: #FFA500;
    transform: translateY(-2px);
}

`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Swastik Khatua.</h3>
                    <h6>Frontend Developer • Co-Founder @ Osmium</h6>
                    <p>I'm a frontend developer passionate about building fast, minimal, and delightful web apps. As the Co-Founder of Osmium, I'm crafting AI-driven learning tools that empower students to learn smarter, not harder.</p>
                    <div className="cta-buttons">
                        <a href="/work" className="btn-primary">View Projects</a>
                        <a href="#" className="btn-secondary">Download Resume</a>
                    </div>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
