import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  max-width: 400px;
  min-width: 300px;
  text-decoration: none;
  height: auto;
  min-height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  background-color: rgba(15, 15, 35, 0.9);
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 10px;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
    transform: translateY(-5px);
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: calc(0.8rem + 0.2vw);
  line-height: 1.3;
  border-bottom: 1px solid ${(props) => props.theme.text};
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
const Tag = styled.span`
  font-size: 0.8rem;
  opacity: 0.8;
`;
const Date = styled.span`
  padding: 0.5rem 0;
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: auto;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
