import styled from "styled-components";


export const StyledProject = styled.a`
    border-radius: 20px 0px;
    box-shadow: 0px 0px 10px 0px ${ props => props.theme.oppColor};
    color: ${ props => props.theme.textColor };
    width: 300px;
    height: 390px;
    flex-shrink: 0;
    padding:16px;
    margin:0 auto;

    svg{
        width: 100%;
        height: 150px;
        flex-shrink: 0;
        border-radius: 8px;
        border: 1px solid;
        display:flex;
        margin:0 auto;
    }

    span{

        p{
            font-size: 21px;
            font-style: normal;
            font-weight: 600;
            text-transform:uppercase;
            margin-top:10px;
 
        }

        div{
            width: 70%;
            height: 2.5px;
            margin:4px auto;
            margin-bottom:18px;
            flex-shrink: 0;
            border-radius: 83px;
            background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        }

    }

    data{

        display:flex;
        flex-direction:column;
        row-gap:20px;
        align-items:start;


        h4{
            font-size: 13px;
            font-style: normal;
            text-align:left;
            font-weight: 500;
            line-height: normal;
        }
        
        
        button{
        padding:0 10px;
        height: 37px;
        flex-shrink: 0;
        border-radius: 83px;
        background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        text-transform:capitalize;
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    }



`