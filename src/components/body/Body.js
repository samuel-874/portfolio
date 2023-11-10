import drawing from "../../assets/drawing.svg";
import { Project } from "../project preview/Project";
import porview from "../../assets/image 1.svg";

import { ATS, Heading, PorjectGrid, Projects, StyledBody, StyledTop, Technologies } from "./Body.styles";
import { TechBar } from "../tech bar/TechBar";
import { AboutMe } from "../about me/AboutMe";
import { useState } from "react";
import { Form } from "../contact form/Form";
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Body = () => {

    const skills = ["Git","Web server","Micro Services","Quick Learning","Communication","NGINX","Kafka","Styled Components","Tailwind Css"]
    const technologies = [
        {label:"html",level:100},{label:"css, tailwind",level:100},
        {label:"Java",level:80}, {label:"JavaScript/TypeScript",level:80},
        {label:"react",level:65},{label:"spring boot",level:60}
    ]
    const [ showForm, toggleShow ] = useState(true);


    return (
        <StyledBody>
        <StyledTop>
            <div>
                <h3>FullStack Developer</h3>
                <p>I'm Samuel, an highly multivated FullStack developer with hands-on knowledge of Reactjs & Spring boot. Looking to embark on a fulfilling career in tech.</p>
                <button > <AnchorLink href="#form">Let's begin</AnchorLink></button>
            </div>
            <img src={drawing} alt="drawing" />
        </StyledTop>
        <Projects>
            <h1 id="projects">Projects</h1>
            <PorjectGrid>
                <Project title={"Rider Share Api"} link={"https://github.com/samuel-874/thirdive"} description={"This is an api for powering a rider share application. It allows for users to book ride and manages order out-of the box"}  />
                <Project title={"Logistics App"} link={"https://github.com/samuel-874/Prime-Drop"} description={"A Fullstack application for booking, managing and updating users order. it allows for real-time product tracking."} />
                <Project link={"https://github.com/samuel-874/favourite-stylist"} title={"Stylist Booking App"} description={"An app that allow customer to find registered stylist in there location with out off the box support for online leactures and stylist training"} />
                <Project link={"https://github.com/samuel-874/news-api"} title={"New's Api"} description={"This is and api that allows for CRUD operation thereby makeing it possible to post, news and report"} />
            </PorjectGrid>
        </Projects>
        <Technologies>
            <h1 id="technologies">Technologies</h1>
          { technologies.map( (technology,i) =>  <TechBar key={i} percentage={technology.level} label={technology.label} /> )}
            
        </Technologies>
        <ATS>
            <h3>Additional technologies & skills</h3>
            <ul>
                {skills.map( (skill,i) => <li key={i}>&#x2022; {skill}</li>)}
            </ul>
        </ATS>
        <div className=" mt-[200px]">
            <Heading id="about-me" >About me</Heading>
            <AboutMe />
        </div>
        </StyledBody>
    )
}