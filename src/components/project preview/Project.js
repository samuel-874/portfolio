import { StyledProject } from "./Project.styles"
import defaultImage from "../../assets/github-mark.svg";
import { GithubProfile } from "../react-icons/Icons";

export const Project = ({img,title,description,link}) => {
    
    return (
        <StyledProject href={link} target="_blank">
        { img ? <img src={img} alt="project preview" /> : <GithubProfile /> }
          <span>
             <p>{title}</p>
             <div></div>
          </span>
          <data>
             <h4>{description}</h4>
             <button>view Project</button>
          </data>
        </StyledProject>
        )
}