import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.header`
        display:flex;
        justify-content:space-between;
        align-items:center;
        color: ${ props => props.theme.textColor };
        font-weight:${ props => props.theme.mode === "dark" ? "500" : "600" };
        padding: 25px 4dvw;
        font-size:19.5px;

        div{
            ${tw`flex items-center cursor-pointer flex-1 `}

            svg{
                ${tw` mr-2 w-[30px]`}
            }
        }

        ul{
            ${tw` hidden md:flex flex-1 justify-between text-[18.6px] whitespace-nowrap `};

            li{
                position:relative;
                margin:0 15px;

                & :hover{
                    color: #0087ca;
                    &::after{
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }
                }

               & ::after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: #0087ca;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
                }
            }

        }

        span{
            ${tw`flex justify-end flex-1 `};
            
    

            svg{
                width:25px;
                margin:0 4px;
            }
        }

        data{
            position:relative;
            margin:0 10px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:40px;
            padding:4px;
            height:25px;
            border-radius:20px;
            background-color:${props => props.theme.mode === "light" ? "black" : "white" };

            button{
                top:0;
                bottom:0;
                position:absolute;
                left:${props => props.theme.mode === "light" ? "" : "2px" };
                right:${props => props.theme.mode === "dark" ? "" : "2px" };
                margin-top:auto;
                margin-bottom:auto;
                margin:auto;
                height:20px;
                width:20px;
                border-radius:10px;
                background-color:${props => props.theme.mode === "light" ? "white" : "black" };

            }

            img{
                width:14px;
            }

        }

        
`