import { useRef } from "react";

import classes from '../users/new-search.module.css'
import Button from '../ui/button'
import citiesData from '../../data/cities.json'
import educationData from '../../data/education.json'

function SearchForm(props) {

    var searchtype = true
    
    var inputRef = useRef()
    var cityInputRef = useRef()
    var ancestryInputRef = useRef()
    var professionInputRef = useRef()
    var educationInputRef = useRef()
    var ancestralVillage = []

    if (props.type === 'connections') {
        searchtype = false
    }

    console.log('New Search Props : ', searchtype, props.type)
    if (citiesData) {
        ancestralVillage = citiesData.data.filter(cc => cc.aVillage === "true")
        // console.log('Av', ancestralVillage)

    }
    console.log('Search Form', props)

    function formSubmitHandler(event){
        event.preventDefault()
        const partName = inputRef.current.value
        const strLength = inputRef.current.value.length
        const citySelected = cityInputRef.current.value
        const ancestry = ancestryInputRef.current.value
        const profession = professionInputRef.current.value
        const education = educationInputRef.current.value

        console.log('Submit ss: ', partName, strLength, citySelected)
        const searchPath = `${partName}+${ancestry}+${citySelected}+${education}+${profession}`
        console.log('Form submitted : ', searchPath)
        props.returnHandler(searchPath)
    }

    function handleReset(){
        console.log('Clear all submited options')
        inputRef.current.value=""
        cityInputRef.current.value = ""
        ancestryInputRef.current.value = ""
        professionInputRef.current.value = ""
        educationInputRef.current.value = ""
    }

    return (
        <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="typename" className={classes.labelinput}>
                    <h3 style={{marginRight: '2px', color: 'red'}}>Name</h3>
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
                    <h3 style={{marginRight: '2px', color: 'red'}}>Ancestral Village</h3>
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
                    <h3 style={{marginRight: '2px', color: 'red'}}>City</h3>
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
                    <h3 style={{marginRight: '2px', color: 'red'}}>Education</h3>
                </label>
                <select id='educationName' ref={educationInputRef}>
                    {
                        educationData.data.map(city => {
                            return (
                                <option key = {city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor="professionName" className={classes.labelinput} >
                    <h3 style={{marginRight: '2px', color: 'red'}}>Profession</h3>
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
            {searchtype && 
            <div className={classes.formsubmitbutton}>
                <Button >Find </Button>
            </div>
            }
            {!searchtype && 
            <div className={classes.formsubmitbutton}>
                <Button >Connections</Button>
            </div>
            }
        </form>

        <div className={classes.formreset}>
            <div className={classes.formresetbutton}>
                <Button 
                    onClick={handleReset}>
                        Reset Search
                </Button>
            </div>
            {/* <div><h2>OR</h2></div>
            <div className={classes.formresetbutton}>
                <Button 
                    onClick={handleReset}>
                        Search Connections Between People
                </Button>
            </div> */}
        </div>
        </div>
    )
}

export default SearchForm