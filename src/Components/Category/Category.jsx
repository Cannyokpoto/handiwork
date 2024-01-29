import React, { useState } from 'react'
import { MdVerified } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import styled from 'styled-components';
import { CategoryData, Artisans, } from '../Assets/Data';

const CategoryStyle = styled.div`
    height: 100%;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    
     h1{
        font-size: 30px;
        text-align: center;
        color: var(--energyBlack);
        font-weight: 500;
    }

    .category-names{
        height: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        margin-top: 30px;

        button{
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: transparent;
            color: var(--energyGrey);
            position: relative;

            &:focus{
                border: none;
                outline: none;
                color: var(--energyRed);
                border-bottom: solid 4px var(--energyRed);
            }


            /* &::after{
                content: "";
                width: 70%;
                height: 3px;
                position: absolute;
                bottom: -7px;
                left: 20%;
                background-color: var(--energyRed); */
            }

        .btn.active{
                color: var(--energyRed);
            }
        }

        
    }

    .categories{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        border: 1px solid var(--energyLightGrey);
        gap: 20px;
        padding: 30px 0 30px 0;
        margin-top: 30px;

        .category{
            height: 370px;
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border: 1px solid var(--energyLightGrey);
            box-shadow: var(--boxShadow);

            .photo{
                height: 35%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: var(--energyGrey);
                position: relative;

                img{
                    height: 80%;
                    width: 30%;
                    border-radius: 50%;
                }

                .ver-badge{
                    font-size: 20px;
                    position: absolute;
                    right: 107px;
                    bottom: 27px;
                    color: var(--energyWhite);
                    z-index: 4;
                }
            }

            .details{
                height: 60%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                

                h5{
                    font-size: 15px;
                    font-weight: 500;
                }

                h6{
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--energyRed);
                }

                h3{
                    font-size: 25px;
                }

                p{
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--energyGrey);
                    position: relative;
                    bottom: 20px;
                }

                .stars{
                    height: 30px;
                    width: 60%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    color: var(--energyYellow);
                    font-size: 20px;
                    position: relative;
                    bottom: 20px;
                }
            }
        }
    }

`;



function Category() {

    const [myCategory, setMyCategory] = useState(Artisans);


    let categories = [ 'Artisans', 'Technicians', 'Beauticians' ];

    const filterResult = (selected) =>{
        const result=CategoryData.filter((currentCategory)=>{
            return currentCategory.category===selected;
        });

        setMyCategory(result);

        console.log(myCategory);
    };


  return (
    <CategoryStyle>
        <h1>Services by Category</h1>

        <div className='category-names'>
            
            {
                categories.map((category, idx) =>{
                    

                    return(
                        <button 
                        className={`btn ${myCategory?.includes(category) ? "active" : ""}` } 
                        onClick={() => filterResult(category)}
                        key={`categories-${idx}`}
                        >{category}</button>
                    )
                })
            }
        </div>

        <div className='categories'>
            {
                myCategory.map((cat) =>{
                    const{id, image, name, skill, no_off_jobs} = cat;
                    return(
                        <div className="category" key={id}>
                            <div className='photo'>
                                <img src={image} alt="" />
                                <MdVerified className='ver-badge' />
                            </div>

                            <div className="details">
                                <h5>{name}</h5>
                                <h6>{skill}</h6>
                                <h3>{no_off_jobs}+</h3>
                                <p>Jobs Executed</p>
                            
                                <div className="stars">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </CategoryStyle>

  )
}

export default Category
