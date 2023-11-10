import styled from "styled-components";
import tw from "twin.macro";

export const StyledBody = styled.div`
    padding: 60px 4dvw;
`

export const StyledTop = styled.div`
    display:flex;
    justify-content:space-between;


    div{
        display:flex;
        flex:1;
        flex-direction:column;
        align-items:start;

        h3{
            font-size:34px;
            font-weight: ${ props => props.theme.mode === "dark" ? 600 : 700};
            color: ${ props => props.theme.textColor};
            white-space:nowrap;
            line-height:normal;
        }
        p{
            margin-top: 20px;
            font-size:19px;
            color: ${ props => props.theme.textColor};
            font-weight: 500;
            opacity:0.5;
            text-align:left;
            /* width:44dvw; */

            ${tw` md:w-[44dvw]`}

        }

        button{
            width: 140px;
            height: 40px;
            flex-shrink: 0;
            border-radius: 83px;
            background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
            color: #fff;
            font-weight:600;
            margin:30px 60px;
        }
    }

    img{
       width:40dvw;
       /* transform: translateY(30px); */
       ${tw` hidden md:inline-block`}
    }
`

export const Projects = styled.div`

    @media (max-width:800px) {
        padding-top:80px;
    }
       

    
    h1{
        color: ${ props => props.theme.textColor };
        font-size: 36px;
        font-style: normal;
        font-weight: ${ props => props.theme.mode === "dark" ? 500 : 600 };
        line-height: normal;
        text-align:center;
    }
`

export const Heading = styled.h1`
        color: ${ props => props.theme.textColor };
        font-size: 36px;
        font-style: normal;
        font-weight: ${ props => props.theme.mode === "dark" ? 500 : 600 };
        line-height: normal;
        text-align:center;
`

export const PorjectGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap:60px;
     padding:60px 0;

     @media (max-width:735px) {
        grid-template-columns:1fr;
     }
`

export const Technologies = styled(Projects)`
    margin-top:100px;
`

export const ATS = styled.div`
        padding-top:200px;
        color: ${ props => props.theme.textColor };

    h3{
        text-align:center;
        font-size: 23px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    ul{
        margin-top:30px;
        padding-left:10dvw;
        display:grid;
        vertical-align:end;
        row-gap:15px;
        grid-template-columns:1fr 1fr 1fr;

        @media (max-width:500px) {
        grid-template-columns:1fr;
     }


        li{
            text-align:left;
            white-space: nowrap;
            font-size: 17px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

    }
`