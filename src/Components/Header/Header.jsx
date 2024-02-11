import React from "react";
import { useState } from "react";
import PHOTOS from "../images/index";
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import '../DropDown/DropDown.css';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Signup, Login } from "../LoginSignup/LoginSignup";
import SearchBar from "../SearchBar/SearchBar";



function Header(){

    //Mobile Navbar

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    //Change Header color

    // const [color, setColor] = useState("wt");


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


        return(
            
            <div className='header-bg'>
                <div className="logo">
                    <img src={ PHOTOS.LOGO } alt="logo" />

                    <div className="nav-icons" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>

                {/* desktopNav navigation */}

                <nav className='desktopNavNew desktopNav'>
                    <ul className="myNav">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/market-place" 
                        onClick={handleClick}
                        onMouseEnter={() => setDropDown(true)}
                        onMouseLeave={() => setDropDown(false)}
                        >Market Place</NavLink></li>
                        <li><NavLink to="/about" onClick={handleClick}>About Us</NavLink></li>
                    </ul>

                    <div className="engage">
                        <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                        <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                    </div>
                </nav>

                {/*Sign Up form */}

                { signup ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSignup} className="close-modal" />

                        <Signup />
                    </div>
                </div> : ""}


                {/*Login form */}
                
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

                <IoIosSearch onClick={toggleSearch} className="search-wt" />

                {/*Search Bar*/}

                { search ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSearch} className="close-modal" />

                        <SearchBar />
                    </div>
                </div> : ""}

                {/*Dropdown Menu*/}

                { dropDown ?
                    <div className={ dropDown ? "show" : "hide-field" } 
                    onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                    <div className='left'>
                        <div className='top'>
                            <ul>
                                <h5>Fashion</h5>
                                <li><Link to="/" onClick={() => setDropDown(false)}>Men</Link></li>
                                <li><Link to="/">Women</Link></li>
                            </ul>

                            <ul>
                                <h5>Technician</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>

                            <ul>
                                <h5>Hospitality</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>

                            <ul>
                                <h5>Logistics</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </div>

                        <div className='advert'>
                            <img src={ PHOTOS.Advert } alt="advert" />
                        </div>
                    </div>

                    <div className='right'>
                        <ul>
                            <h5>Automobile</h5>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>

                        <ul>
                            <h5>Domestic</h5>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                    </div>
                    : "" }
            </div>
        )
};


export default Header;