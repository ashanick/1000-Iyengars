import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import classes from './new-search.module.css'
import Button from '../ui/button'
import citiesData from '../../data/cities.json'
import educationData from '../../data/education.json'

function NewSearch(){
    var router = useRouter()
    var inputRef = useRef()
    var cityInputRef = useRef()
    var ancestryInputRef = useRef()
    var professionInputRef = useRef()
    var educationInputRef = useRef()
    var ancestralVillage = []

    if (citiesData) {
        ancestralVillage = citiesData.data.filter(cc => cc.aVillage === "true")
        console.log('Av', ancestralVillage)

    }

    console.log('Cities : ', citiesData.data)
    console.log('Education : ', educationData.data)

    function submitHandler(event){
        event.preventDefault()
        const partName = inputRef.current.value
        const strLength = inputRef.current.value.length
        const citySelected = cityInputRef.current.value
        const ancestry = ancestryInputRef.current.value
        const profession = professionInputRef.current.value
        const education = educationInputRef.current.value

        console.log('Submit ss: ', partName, strLength, citySelected)
        const searchPath = `/search-path/${partName}+${ancestry}+${citySelected}+${education}+${profession}`
        router.push(searchPath)
    }  
    
    function clearHandle(){
        console.log('Clear')
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
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
            <div className={classes.control}>
                <label htmlFor="ancestryVillage" className={classes.labelinput}>
                    <h3 style={{marginRight: '2px'}}>Ancestral Village</h3>
                </label>
                <select id='ancestryVillage' ref={ancestryInputRef}>
                    {
                        ancestralVillage.map(city => {
                            return (
                                <option key = {city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor="cityname" className={classes.labelinput} >
                    <h3 style={{marginRight: '2px'}}>City</h3>
                </label>
                <select id='cityname' ref={cityInputRef}>
                    {
                        citiesData.data.map(city => {
                            return (
                                <option key = {city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor="educationName" className={classes.labelinput} >
                    <h3 style={{marginRight: '2px'}}>Education</h3>
                </label>
                <select id='educationName' ref={educationInputRef}>
                    {
                        citiesData.data.map(city => {
                            return (
                                <option key = {city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor="professionName" className={classes.labelinput} >
                    <h3 style={{marginRight: '2px'}}>Profession</h3>
                </label>
                <select id='professionName' ref={professionInputRef}>
                    {
                        citiesData.data.map(city => {
                            return (
                                <option key = {city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={classes.control}>
                <Button>Find </Button>
            </div>
            <div className={classes.control}>
                <button style={{backgroundColor: 'red'}} onClick={clearHandle}>Clear </button>
            </div>
        </form>
    )
}

export default NewSearch