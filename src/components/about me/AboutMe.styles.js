import styled from "styled-components";
import tw from "twin.macro";

export const StyledAbout = styled.div`
    height:500px;
    max-height:90dvh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const BoardPlacement = styled.div`
    height:100%;
    width:78%;
    grid-auto-flow:column;
      /* transition: all 2s ease; */
    display: grid;
    gap:4dvw;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    grid-auto-rows: 100%;
    overflow-x: auto;
    scroll-behavior:smooth;
    overscroll-behavior-inline: contain;
    padding: 6px;

    @media (max-width: 800px) {
        width:85%;

    }

`

export const ScrollBar = styled.div`
    width:50px;
    height:50px;
    border-radius:40px;
    font-size:30px;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    bottom:0;
    left : ${ props => props.displacement  === "left" ? "0" : ""};
    right : ${ props => props.displacement  === "right" ? "0" : ""};
    margin: auto 0;
    cursor: pointer;
    opacity: ${ props => props.disabled ? 0.5 : 1};
    border: 3px solid ${ props => props.theme.oppColor};
    background-color: ${ props => props.theme.appColor};
    font-weight:800;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Board = styled.div`
    position:relative;
    height:80%;
    width:70%;
    background: ${ props => props.theme.mode === "light" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" } ;
    border-radius:34px;
    margin:auto;
    padding:16px;
    padding-left:250px;
    padding-top:60px;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media (max-width: 990px) {
        padding-left:190px;
        }
        @media (max-width: 790px) {
            height:auto;
            width:90%;
            padding-top:60px;
            padding:30px;
        }

    div{
        position:absolute;
        height:290px;
        width:270px;
        top:0;
        bottom:0;
        left:-60px;
        margin:auto 0;
        background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        ${tw`  shadow-md`}

        @media (max-width: 990px) {
            height:250px;
            width:230px; 
        }
        @media (max-width: 790px) {
            display:none; 
        }

    }

    span{
        margin-top:16px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:baseline;
        text-align:left;
        color: ${ props => props.theme.textColor };

        h3{
            font-size:20px;
            font-weight:700;
            text-transform:uppercase;
        }

        p{
            margin-top:10px;
            opacity:0.4;
            font-weight:500;
            font-size:15px;

            @media (max-width: 600px) {
                font-size:16px;
                font-weight:600;
            }
        }
    }


`