import { FooterContent, StyledFooter } from "./Footer.styles"
import { Github,Linkedin } from "../react-icons/Icons";
import upwork from "../../assets/51302895_288x288.jpeg";


export const Footer = () => {
    return (
        <StyledFooter>
        <FooterContent>
          <div>
            <span>
                <h4>Email:</h4>
                <p>samuelab846@gmail.com</p>
            </span> 
          </div>
          <data>
             <a  href="https://github.com/samuel-874" target="_blank" ><Github /></a>
             <a  href="https://www.linkedin.com/in/samuel-abiodun-462860260/" target="_blank" ><Linkedin /></a>
             <a href="https://www.upwork.com/freelancers/~0150d69d80c9826d71" target="_blank"><img src={upwork} alt="upwork profile" /></a>
          </data>
        </FooterContent>
        </StyledFooter>
    )
}