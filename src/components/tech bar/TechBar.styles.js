import styled from "styled-components";
import tw from "twin.macro";

export const StyledBar = styled.div`
    margin:30px auto;
    width:80%;

    span{
        display:flex;
        justify-content:space-between;
        align-items:baseline;

        h3,p{
        color: ${ props => props.theme.textColor };
        font-style: normal;
        line-height: normal;
        }

        h3{
            font-weight: 600;
            text-transform:uppercase;

            ${tw` text-[16px] md:text-[18px] `}
        }

        p{
            font-size: 15px;
            font-weight: 500;
            text-transform:capitalize;
        }

    }

    div{
        height:14px;
        border-radius:40px;
        background-color:${ props => props.theme.mode === "dark" ?` rgba(225,225,225,0.09)` : `rgba(0,0,0,0.1)`};
        position:relative;

        &::after{
            content:'';
            position:absolute;
            border-radius:inherit;
            max-width:100%;
            width: ${ props => `${props.width}%`};
            top:0;
            bottom:0;
            left:0;
            border-radius: 83px;
            background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        }

    }
`