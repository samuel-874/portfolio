import { useRef } from "react"
import { LeftArrow, RightArrow } from "../react-icons/Icons"
import { Board, BoardPlacement, ScrollBar, StyledAbout } from "./AboutMe.styles";
import img from "../../assets/IMG_-u0foau.jpg";
import journey from "../../assets/journey.jpg";
import creative from "../../assets/creative.jpg";
import fun from "../../assets/fun.jpg";
import collaborate from "../../assets/collaborate.jpg";

export const AboutMe = () =>{

    const contentRef = useRef();

    const scroll = (direction) =>{
        const width = window.innerWidth - 300;
        if(contentRef){
         if(direction === "right"){
            contentRef.current.scrollLeft += width
        } else{
            contentRef.current.scrollLeft -= width
        }
        }
        
    }
    
    return(
        <StyledAbout >

          <BoardPlacement ref={contentRef} className="no-scrollbar">
             <Boards img={img} heading={"Introduction"} paragraph={"Samuel is a Nigerian based Fullstack web developer on a mission to craft digital experiences that blend creativity and functionality."} />
             <Boards img={journey} heading={"My Journey"} paragraph={"I started my web development journey with a curiosity-driven exploration of HTML and CSS. As I delved deeper into the world of coding, I discovered the endless possibilities offered by full-stack development."} />
             <Boards img={creative} heading={"My Philosophy"} paragraph={"I believe in the power of clean code and user-centric design. I'm committed to continuous learning and staying updated with the latest industry trends."} />
             <Boards img={fun} heading={"Beyond Code"} paragraph={"Aside from coding i'm very socialized, fun and entertaining. Also i love cooking, chit chating and playing chess."} />
             <Boards img={collaborate} heading={"In Addition"} paragraph={"I love to connect and collaborate! So feel free to explore my portfolio and get in touch if you're interested in working together or have any questions. I'm excited to meet fellow developers, entrepreneurs, and innovators."} />
          </BoardPlacement>

            <ScrollBar displacement={"left"} onClick={()=>scroll("left")} ><LeftArrow /></ScrollBar>
            <ScrollBar displacement={"right"} onClick={()=>scroll("right")} ><RightArrow /></ScrollBar>
        </StyledAbout>
    )
}

const Boards = ({img,heading,paragraph}) => {

    return (
        <Board>

        <div style={{backgroundImage:`url(${img})`}}></div>
        <span>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </span>
        </Board>
    )
}