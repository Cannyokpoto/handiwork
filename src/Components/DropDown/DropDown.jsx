import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PHOTOS from '../images';
import './DropDown.css';

const DropDownStyle = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: var(--energyWhite);
    padding: 20px 20px 0 0;
    position: absolute;
    top: 97px;
    left: 15vw;
    z-index: 30;

    

    .left{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 50px;

        .top{
            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;

            ul{
                width: 20%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                h5{
                    font-size: 17px;
                    border-bottom: 1px var(--myGrey) solid;
                }

                li{
                    list-style: none;

                    a{
                       text-decoration: none;
                       color: var(--energyBlack);
                       font-size: 15px;

                       &:hover{
                            color: var(--energyRed);
                        }
                    }
                }
            }
        }
    }

        .advert{
            width: 100%;
            height: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img{
                width: 100%;
                height: 100%;
            }
        }
    

    .right{
        width: 37%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;

        ul{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            h5{
                font-size: 17px;
                border-bottom: 1px var(--myGrey) solid;
            }

            li{
                list-style: none;

                a{
                    text-decoration: none;
                    color: var(--energyBlack);
                    font-size: 15px;

                    &:hover{
                        color: var(--energyRed);
                    }
                }
            }
        }
    }

`;

function DropDown() {

    const [dropDown, setDropDown] = useState(true);


  return (
    <DropDownStyle className={ dropDown ? "show" : "hide-field show" } 
    onMouseOver={() => setDropDown(true)}
    onMouseLeave={() => setDropDown(false)}>
      <div className='left'>
        <div className='top'>
            <ul className='category'>
                <h5>Fashion</h5>
                <li><Link to="/" onClick={() => setDropDown(false)}>Men</Link></li>
                <li><Link to="/">Women</Link></li>
            </ul>

            <ul className='category'>
                <h5>Technician</h5>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>

            <ul className='category'>
                <h5>Hospitality</h5>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>

            <ul className='category'>
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
        <ul className='category'>
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

        <ul className='category'>
            <h5>Domestic</h5>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </DropDownStyle>
  )
}

export default DropDown
