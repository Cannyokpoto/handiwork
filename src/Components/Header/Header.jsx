import React from "react";
import { useState } from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Signup, Login } from "../LoginSignup/LoginSignup";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";


const HeaderStyle = styled.div` 
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 15;



    .logo{
        width: 15%;
        height: 65%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        img{
            width: 70%;
            height: 50%;
        }

        .nav-icons{
            display: none;

            i{
                color: var(--energyWhite);
                font-size: 30px;
                cursor: pointer;
            }
        } 
    }


        .desktopNav{
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 50px;

            .myNav{
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                gap: 15px;
                align-items: center;

                li{
                    list-style: none;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    a{
                        height: 100%;
                        color: var(--energyWhite);
                        font-size: 17px;
                        font-weight: 500;
                        text-decoration: none;
                        padding: 5px;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        &:hover{
                            color: var(--energyRed);
                        }
                    }

                    a.active{
                        color: var(--energyRed);
                    }
                }

            }

            .engage{
                width: 20%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                gap: 20px;
                align-items: center;


                button{
                    background-color: var(--myGrey);
                    color: var(--energyWhite);
                    width: 45%;
                    height: 40px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    border-radius: 3px;
                    border: none;
                    cursor: pointer;
                }
            }
        } 

        .mobile-navbar{
            display: none;
        }

        .search{
        font-size: 30px;
        position: relative;
        right: 100px;
        color: var(--energyWhite);
        z-index: -3;
        cursor: pointer;
    }




@media (max-width: 500px){


    .desktopNav{
        display: none;
    }


    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
    .logo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img{
            width: 30%;
            height: 50%;
        }
        .nav-icons{
            display: block;

            i{
                color: var(--energyWhite);
                font-size: 30px;
                cursor: pointer;
            }
        }
    }
    


    .mobile-navbar{
        display: flex;
        flex-direction: column;
        position: absolute;
        gap: 50px;
        top: 0;
        padding-left: 15px;
        padding-top: 20px;
        width: 70vw;
        height: 100vh;
        background-color: var(--energyWhite);
        box-shadow: var(--boxShadow);
        left: -100%;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: all .7s ease-in-out;

        .mobile-navbar-items{
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;

            a{
                width: 90%;
                background-color: var(--energyWhite);
                color: var(--energyBlack);
                height: 40px;
                font-size: 17px;
                text-decoration: none;
                display: flex;
                align-items: center;
                padding-left: 10px;
                }
        }

        .engage{
            height: 50px;
            width: 40%;
            display: flex;
            flex-direction: column;

            button{
                width: 100%;
                background-color: var(--energyRed);
                color: white;
                height: 100%;
                font-size: 17px;
                text-decoration: none;
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-radius: 5px;
                border-radius: 10px;
            }
        }
    }
    

    .mobile-navbar.mobile-navbar-open{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        position: fixed;
        left: 0;
    }



}
`;

function Header(){

    //Mobile Navbar

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    //header color

    const [color, setColor] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >= 70){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    //Signup

    const [signup , setSignup] = useState(false);
        const toggleSignup = () => {
        setSignup(!signup);
    };

    if(signup) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }


      //Login

        const [login, setLogin] = useState(false);
        const toggleLogin = () => {
            setLogin(!login);
    };

    if(login) {
        document.body.classList.add('active-modal2')
        } else {
        document.body.classList.remove('active-modal2')
        }

    //SearchBar

    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(!search);
    };

    if(search) {
        document.body.classList.add('active-modal3')
        } else {
        document.body.classList.remove('active-modal3')
        }

    //DropDown
    const [dropDown, setDropDown] = useState(false);

    const handleSetDropDown = () =>{
        setDropDown(!dropDown)
    }


        return(
            
            <HeaderStyle className={color ? 'header-bg' : 'header'}>
                <div className="logo">
                    <img src={ color ? PHOTOS.LOGO_B : PHOTOS.LOGO } alt="logo" />

                    <div className="nav-icons" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>

                {/* desktopNav navigation */}

                <nav className={color ? 'desktopNavNew' : 'desktopNav'}>
                    <ul className="myNav">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li onMouseOver={handleSetDropDown}
                        onMouseOut={handleSetDropDown}><NavLink to="/men" onClick={handleClick}>Market Place</NavLink>
                        { dropDown ? <DropDown /> : "" }
                        </li>
                        <li><NavLink to="/women" onClick={handleClick}>About Us</NavLink></li>
                    </ul>

                    <div className="engage">
                        <button onClick={toggleLogin}>Login</button>
                        <button onClick={toggleSignup}>Sign Up</button>
                    </div>
                </nav>


                { signup ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSignup} className="close-modal" />

                        <Signup />
                    </div>
                </div> : ""}

                
                { login ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleLogin} className="close-modal" />

                        <Login />
                    </div>
                </div> : ""}
                

                {/* mobile-navigation */}

                <nav className={click ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>

                    <ul className="mobile-navbar-items">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/men" onClick={handleClick}>Market Place</NavLink></li>
                        <li><NavLink to="/women" onClick={handleClick}>About Us</NavLink></li>
                    </ul>

                    <div className="engage">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </nav>

                <IoIosSearch onClick={toggleSearch} className={color ? "search-wt" : "search"} />

                { search ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSearch} className="close-modal" />

                        <SearchBar />
                    </div>
                </div> : ""}
            </HeaderStyle>
        )
};


    

export default Header ;