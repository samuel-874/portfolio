import styled from "styled-components";
import tw from "twin.macro";


export const StyledFooter = styled.footer`
color: ${ props => props.theme.textColor };

    padding: 4dvw;
    padding-bottom:10px;

    h3{
        font-size: 30px;
        font-style: normal;
        font-weight: ${ props => props.theme.mode === "dark" ? 500 : 600 };
        line-height: normal;
        text-align:left;
    }


`

export const FooterContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:left;
    flex-wrap:wrap;
    margin:30px auto 0;


    div{
        font-size: 16px;
        font-style: normal;
        line-height: normal;
        flex:1;
        display:flex;

        h4{
            font-weight:600;
        }
        p{
            font-weight: 400;

        }

        span{
            margin:0 10px;
        }

    }

    data{
        font-size: 16px;
        font-style: normal;
        line-height: normal;
        flex:1;
        display:flex;
        ${tw` mt-3 md:mt-0  md:justify-end`}
        a{
            margin:0 10px;
            
            img{
                ${tw` rounded-full h-[30px] shrink-0 w-[30px]`}
            }
        }

    }

`