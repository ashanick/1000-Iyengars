import { useRouter } from "next/router";

import SearchForm from "../searches/search-form";

function NewSearch(){
    var router = useRouter()

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
        <form className={classes.form} onSubmit={submitHandler}>
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
            <div className={classes.formsubmitbutton}>
                <Button >Find </Button>
            </div>
        </form>

        <div className={classes.formreset}>
            <div className={classes.formresetbutton}>
                <Button 
                    onClick={handleReset}>
                        Reset Search
                </Button>
            </div>
            <div><h2>OR</h2></div>
            <div className={classes.formresetbutton}>
                <Button 
                    onClick={handleReset}>
                        Search Connections Between People
                </Button>
            </div>
        </div>
        </div>
    )
}

export default NewSearch