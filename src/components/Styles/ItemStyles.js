import styled from "styled-components";


export const Imagen = styled.img`
margin-left: 20px;
`

export const H3 = styled.h3`
color: #0FF2B2;
`

export const Div = styled.div`
 border: 0.5px solid #1DA1F2;
 
    :focus{
        outline: none;
    }
    :hover{
        border: 3px solid #1DA1F2;;
        //background-color:rgba(217, 78, 90,0.24);
        box-shadow: 5px 5px rgba(101, 101, 101,0.40);
    }
`

export const H5 = styled.h5`
//color: #3B2C73;
color: #9C1BF2;
color: white;
`

export const Span = styled.span`
background-color: #0FF2B2;
padding: 3px;
font-weight: lighter;
color: #D94E5A;
border-radius: 3px;
`

export const Button = styled.button`
background-color: #9C1BF2;
padding: 3px;
border: none;
font-weight: lighter;
color: #fff;
border-radius: 5px;
text-transform: uppercase;
box-shadow: 3px 3px #852BC1;
cursor: pointer;
    :focus{
        outline: none;
    
    }
    :hover{
        background-color: #D94E5A;
        box-shadow: -3px -3px #B3414B;
        outline: 0;
        transition: 0.3s linear;
        
    }
`

