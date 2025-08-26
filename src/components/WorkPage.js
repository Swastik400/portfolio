import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";


import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { Swastika } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(8rem + 10vw);
  height: 40vh;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  color: white;
`;
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

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.3));
  transition: filter 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 0 25px rgba(255, 165, 0, 0.5));
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      // Removed rotation for Swastika
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <BackButton onClick={() => window.history.back()}>←</BackButton>

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <Swastika width={80} height={80} fill='#FFA500' />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
