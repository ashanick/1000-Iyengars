import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import classes from './new-search.module.css'
import Button from '../ui/button'
import citiesData from '../../data/cities.json'
import educationData from '../../data/education.json'

function NewSearch(){
    const router = useRouter()
    const typeNameInputRef = useRef()
    const inputRef = useRef()
    const cityInputRef = useRef()

    console.log('Cities : ', citiesData.data)
    console.log('Education : ', educationData.data)

    function submitHandler(event){
        event.preventDefault()
        const memberSearch = inputRef.current.value
        const strLength = inputRef.current.value.length
        const citySelected = cityInputRef.current.value
        console.log('Submit : ', memberSearch, strLength, citySelected)
        if (memberSearch && strLength > 2) {
            console.log('Form ')
            const fullPath = `/users/contains/${memberSearch}`
            router.push(fullPath)
        } else {
            console.log('Kolaveri Kolaveri Di')
        }
    }   

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.searchcontent}>
                <div className={classes.multiplesearch}>
                    <div className={classes.control}>
                        <label htmlFor="typename" className={classes.labelinput}>
                            <h3 style={{marginRight: '2px'}}>Name</h3>
                        </label>
                        <input 
                            type="text"
                            id="searchuser"
                            placeholder='Enter 3 letters'
                            aria-label='Enter 3 letters' 
                            ref={inputRef}
                            />
                            
                    </div>
                </div>          
            </div>
            <div className={classes.searchcontent}>
                <div className={classes.multiplesearch}>
                    <div>
                    Ancestry
                    </div>
                    <div>
                        <label htmlFor="cityname" >City</label>
                        <select id='cityname' ref={cityInputRef}>
                            {
                                citiesData.data.map(city => {
                                    return (
                                        <option value={city.name}>{city.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div>
                        Profession
                    </div>
                    <div>
                        Education
                    </div>
                </div>
            </div>
            <Button>Find members</Button>
        </form>
    )
}

export default NewSearch