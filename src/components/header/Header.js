import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import { StyledHeader } from "./Header.styles";
import { useTheme } from "styled-components";
import { darkMode, lightMode } from "../../themes";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AppLogo, Github, Linkedin } from "../react-icons/Icons";


export  const Header = ({updateTheme}) => {
    
    const theme = useTheme();

    const toggleTheme = () => {
        if(theme.mode === "light"){
            updateTheme(darkMode)
        }else{
            updateTheme(lightMode)
        }
    }

    return (
        <StyledHeader>
          <div>
             <AppLogo /> <a href={window.location.origin} >Porfolio</a>
          </div>
          <ul>
             <li><AnchorLink href="#projects">Projects</AnchorLink></li>
             <li><AnchorLink href="#technologies">Technologies</AnchorLink></li>
             <li><AnchorLink href="#about-me">About me</AnchorLink></li>
          </ul>
          <span>
               <a href="https://www.linkedin.com/in/samuel-abiodun-462860260/" target="_blank"><Linkedin /></a> 
               <a href="https://github.com/samuel-874" target="_blank" ><Github /></a> 
          </span>
          <data onClick={toggleTheme}>
            <img src={moon} alt="turn dark mode..." />
            <img src={sun} alt="turn light mode..." />
            <button></button>
          </data>
        </StyledHeader>
    )
}