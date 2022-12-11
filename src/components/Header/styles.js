import styled from "styled-components";

import {Link} from "react-router-dom";

export const Container=styled.header`
    grid-area:header;
    
    display: flex;
    gap: 64px;
    align-items: center;
    
    padding: 24px 123px;
    
    width: 100%;
    height: 116px;

    border-bottom: 1px solid ;
    border-bottom-color: ${({theme})=>theme.COLORS.BORDER_HEADER_COLOR};

    >a{
        font-weight: 700;
        color: ${({theme})=>theme.COLORS.PINK};
        line-height: 32px;
        font-size: 24px;
    }


`;

export const Profile= styled.div`
    display: flex;
    text-align: justify;
    align-items: center;
    gap: 9px;
    height: 70px;
    min-width: 200px;
    max-width: 250px;

    >div{
        display: flex;
        flex-direction: column;
        font-size: 16px;
        width: 100px;
        
        
        a{
            align-self: flex-end;
            line-height: 18.5px;
            color: ${({theme})=>theme.COLORS.PLACEHOLDER_INPUT};
        }
        strong{
            align-self: flex-end;
            font-size: 14px;
            color: ${({theme})=>theme.COLORS.WHITE};
        }

    }
    >img{
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 2px solid ;
        border-color: ${({theme})=>theme.COLORS.PLACEHOLDER_INPUT};
        box-sizing: border-box;
    }

`