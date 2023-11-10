import styled from "styled-components";
import tw from "twin.macro";


export const StyledForm = styled.form`
    width:80dvw;
    max-width:500px;
    margin:100px auto;
    font-size:13px;
    font-weight:500;
    position:relative;
    color: ${ props => props.theme.textColor };

    h1{
        font-size: 36px;
        font-style: normal;
        font-weight: ${ props => props.theme.mode === "dark" ? 500 : 600 };
        line-height: 38px;
        text-align:center;
    }

    input{
        display:block;
        padding:10px 30px;
        width:100%;
        border-radius:20px;
        height:40px;
        background-color:transparent;
        border: 1px solid ${ props => props.theme.oppColor};
        ${tw` shadow-md`}
    }
    button{
        color:white;
        font-weight:600;
        display:block;
        padding:10px;
        border-radius:20px;
        height:38px;
        background-color:green;
        width:100%;

        &:active{
            opacity:0.5;
        }

    }

    div{
      margin: 20px 0;
    }

    
    textarea{
        display:block;
        padding:10px 30px;
        padding:10px;
        border-radius:20px;
        height:150px;
        width:100%;
        background-color:transparent;
        border: 1px solid ${ props => props.theme.oppColor};

    }

    p{
      color:rgb(220 38 38 / 1);
      margin-top:8px;
      margin-left:15px;
      text-align:left;
    }


    
    background-color: ${ props => props.theme.appColor};
    ${tw`min-h-[40dvh]`}
`

export const FormStatus = styled.div`
    position:absolute;
    border-radius:20px;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(255,255,255,0.4);
    display:flex;
    justify-content:center;
    align-items:center;
    
`


export const StyledLoader = styled.div`
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  
  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;

    &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${ props => props.theme.oppColor};
  }
  
   &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
   &:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
   &:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
   &:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
   &:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
   &:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
   &:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
   &:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
   &:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
   &:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
   &:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
   &:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

}
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  

`