import { StyledBar } from "./TechBar.styles"

export const TechBar = ({percentage,label}) => {

    const rate =( number) => {
        if(number >= 80){
            return "Advance";
        }else if(number > 54 && number < 80){
            return "Intermediate"
        }

        return "Beginner"
    }

    return (
        <StyledBar width={percentage}>
            <span><h3>{label}</h3> <p>{rate(percentage)}</p></span>
            <div></div>
        </StyledBar>
    )
}