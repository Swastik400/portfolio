import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 20rem;
max-width: 350px;
height: auto;
min-height: 400px;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 2rem;
margin-right: 4rem;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.body};
transition: all 0.3s ease;
box-sizing: border-box;
word-wrap: break-word;
overflow-wrap: break-word;
box-shadow: 0 10px 30px rgba(0,0,0,0.2);

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 2px solid #FFA500;
transform: translateY(-10px);
box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
`
const Title = styled.h2`
font-size: calc(0.9rem + 0.3vw);
line-height: 1.3;
margin-bottom: 0.5rem;
word-wrap: break-word;
`

const Description = styled.p`
font-size: calc(0.7rem + 0.2vw);
font-family: 'Inter',sans-serif;
font-weight: 400;
line-height: 1.4;
margin: 1rem 0;
word-wrap: break-word;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding: 0.8rem 1.5rem;
border-radius: 25px;
font-size: 0.9rem;
font-weight: 500;
transition: all 0.3s ease;
border: 2px solid ${props =>props.theme.body};

&:hover {
    background-color: #FFA500;
    color: ${props =>props.theme.body};
    border-color: #FFA500;
}

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
    border-color: ${props =>props.theme.text};
}

${Box}:hover &:hover{
    background-color: #FFA500;
    color: ${props =>props.theme.body};
    border-color: #FFA500;
}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git  href={github}  target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
