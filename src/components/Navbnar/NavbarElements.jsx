import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
 justify-content: space-between;
 // z-index: 10;
 color: #fff;
 height: 70px;
 display: flex;
 align-items: center;
//  padding-top:20px;
` 

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family:regularFont;
font-size:16px;
@media screen and (max-width: 1000px) {
    font-size:12px;
}
@media screen and (max-width: 850px) {
    font-size:10px;
}
&.active {
    text-decoration:underline;
    text-underline-offset: 4px;
    text-decoration-color:#AA323C;
}
`

export const Bars = styled(FaBars)`
display: none;
color: rgba(8, 7, 7, 0.700);

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;
}
`

export const InfoContainer = styled.div`
// background-color:white;
padding-top:6px;
padding-bottom:6px;
@media screen and (max-width: 768px) {
    display: none;
    
}
`


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`
