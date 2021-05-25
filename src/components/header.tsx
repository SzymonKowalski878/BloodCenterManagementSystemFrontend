import styled from '@emotion/styled';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const Head = styled.nav`
    background: linear-gradient(90deg, rgb(110,94,254 0%), rgba(73,63,252,1) 100%);
    height:15vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:0.8rem;
`;
const Navlogo = styled.h1`
    color: #fff;
    justify-self: start;
    margin-left: 1rem;
    cursor: pointer;
`;
const Switch = styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
    margin-left: 2rem; 
`;
const FontChanger = styled.button`  
    margin-left: 0.5rem;
    border: none;
    background: transparent;
    color: white;
    border-radius: 20px;
    cursor:pointer;
`;

const Label = styled.label `
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.7rem;
    input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: gray;
        background-image: url("../assets/sun.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 1.7rem;
      }
      
      span:before {
        position: absolute;
        content: "";
        height: 1.3rem;
        width: 1.3rem;
        left: 0.2rem;
        bottom: 0.2rem;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
      
      input:checked + span {
        background-color: #2196f3;
        background-image: url("../assets/moon.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
      }
      
      input:focus + span {
        box-shadow: 0 0 1px #2196f3;
      }
      
      input:checked + span:before {
        -webkit-transform: translateX(1.3rem);
        -ms-transform: translateX(1.3rem);
        transform: translateX(1.3rem);
      }
`;


const MenuItem = styled.div`
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
    color: white;
    padding: 0.5rem;
    border-radius: 10px;
    margin: 0 7px;
    @media only screen and (max-width: 1308px) {
        .menuItem{
          text-align: center;
          color: white;
          padding: 0;
          top: 1.5em;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 75%;
    z-index:12;
    >a{
        text-decoration: none;
        margin-right: 1rem;
    }
    @media only screen and (max-width: 1308px) {
        position: absolute;
        display: none;
        list-style: none;
        background-color: red;
        left: 0;
        top: 15vh;
        text-align:center;
        width: 100%;
        padding: 0;
        margin-top: 0;
    }
`;

const Controls = styled.div`
    @media only screen and (max-width: 1308px) {
        display: none;
    }
`;

const HamburgerMenu = styled.button`
    display: none;
    @media only screen and (max-width: 1308px) {
        display: block;
        font-size: 1.3rem;
        background-color: transparent;
        border: none;
        outline: none;
        top: 0.3rem;
        right: 1rem;
        color: white;
        margin-right: 4vw;
    }
`;

interface HeaderProps {
    isDarkColor: boolean,
    changeColor: ()=>void,
    changeSize: (event: any)=>void,
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const color: string =  props.isDarkColor===false?"red":"darkred";
    const isMobile:boolean= useMediaQuery('only screen and (max-width: 1308px)');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [isMobile]);
    
    return  <Head style={{backgroundColor:color}}>
                <Navlogo>
                    RCKiK
                </Navlogo>
                <Controls>
                    <Switch>
                        <Label>
                            <input type="checkbox" defaultChecked={props.isDarkColor} onChange={props.changeColor} />
                            <span></span>
                        </Label>
                        <FontChanger onClick={props.changeSize} value="2" style={{fontSize:2+'vh'}}>aA</FontChanger>
                        <FontChanger onClick={props.changeSize} value="3" style={{fontSize:3+'vh'}}>aA</FontChanger>
                        <FontChanger onClick={props.changeSize} value="4" style={{fontSize:4+'vh'}}>aA</FontChanger>
                    </Switch>       
                </Controls>
                <NavLinks style={isOpen?{display: 'block'}:{}} onClick={() => {setIsOpen(false)}}>
                {MenuItems.map((item, index) => {
                    return (
                        (!localStorage.getItem("IsLoggedIn")&&item.role=="NotLogged")||localStorage.getItem("Role")==item.role||item.role=="None"?(
                            <Link to={item.url}>
                                <MenuItem>
                                    <li key={index}>
                                        {item.title}
                                    </li>
                                </MenuItem>
                            </Link>
                        ):""
                       
                    )
                })}
                </NavLinks>
                <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FontAwesomeIcon icon= {faTimes} />:<FontAwesomeIcon icon={faBars} />}
                </HamburgerMenu>
            </Head>;
}

export default Header;