import React, { useState } from 'react'
import styled from 'styled-components';
import { CategoryData, Artisans, } from '../Assets/Data';
import ServiceProvider from '../ServiceProvider/ServiceProvider';

const TopCategoryStyle = styled.div`
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
                background-color: var(--energyRed); 
            }
            */

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
        gap: 60px;
        padding: 30px 0 30px 0;
        margin-top: 30px;
}

`;



function TopCategory() {

    const [myCategory, setMyCategory] = useState(Artisans);


    let categories = [ 'Artisans', 'Technicians', 'Beauticians' ];

    const filterResult = (selected) =>{
        const result=CategoryData.filter((currentCategory)=>{
            return currentCategory.category===selected;
        });

        setMyCategory(result);

    };


  return (
    <TopCategoryStyle>
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
                        
                            <ServiceProvider 
                                key={id}
                                image={image}
                                name={name}
                                skill={skill}
                                no_off_jobs={no_off_jobs}
                            />

                    )
                })
            }
        </div>
    </TopCategoryStyle>

  )
}

export default TopCategory
