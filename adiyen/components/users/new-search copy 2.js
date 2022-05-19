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

    const [nameSearchBy, setNameSearchBy] = useState(true)
    const [filterBy, setFilterBy] = useState(false)
    const [otherSearchBy, setOtherSearchBy] = useState(false)

    console.log('Cities : ', citiesData.data)
    console.log('Education : ', educationData.data)

    function submitHandler(event){
        event.preventDefault()
        const memberSearch = inputRef.current.value
        const strLength = inputRef.current.value.length
        const citySelected = cityInputRef.current.value
        console.log('Submit : ', memberSearch, strLength, citySelected)
        if (memberSearch && strLength > 2) {
            const tempMemberType = typeNameInputRef.current.value
            console.log('Form ', inputRef.current.value, tempMemberType, strLength)
            const fullPath = `/users/memberSearch/${memberSearch}/${tempMemberType}`
            router.push(fullPath)
        } else {
            console.log('Kolaveri Kolaveri Di')
        }
    }   

    const handleCheckNameSearch =(e)=> {
        setNameSearchBy(e.target.checked)
        console.log('Here we are', e.target.checked)
    }

    const handleOtherFilter =(e)=> {
        setFilterBy(e.target.checked)
        console.log('Here we are', e.target.checked)
    }

    const handleCheckOtherSearch =(e)=> {
        setOtherSearchBy(e.target.checked)
        console.log('Here we are', e.target.checked)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.searchcontent}>
                <div className={classes.controlsearch}>
                    <label htmlFor="namesearch"><h3>Search By</h3></label>
                        <input 
                            type="checkbox"
                            id="namesearch"
                            name="namesearch"
                            value="Search"
                            checked={nameSearchBy}
                            onChange={(e)=>handleCheckNameSearch(e)} 
                        />
                </div>

                <div className={classes.multiplesearch}>
                    <div className={classes.control}>
                        <h3>Name</h3>
                        <input 
                            type="text"
                            id="searchuser"
                            placeholder='Enter 4 letters of name'
                            aria-label='Enter 4 letters of name' 
                            ref={inputRef}
                            />
                            <label htmlFor="typename" className={classes.labelinput}>Letters</label>
                            <select id='typename' ref={typeNameInputRef}>
                                <option value='Contains'>Contains</option>
                                <option value='Starts'>Starts With</option>
                                <option value='Ends'>Ends With</option>
                            </select>
                    </div>
                    <div className={classes.control}>
                        <h3>Alphabet</h3>
                        <div className={classes.contentalpha}>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/ad">A--D</Link>
                            </h4>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/eh">E--H</Link>
                            </h4>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/il">I--L</Link>
                            </h4>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/mp">M--P</Link>
                            </h4>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/qt">Q--T</Link>
                            </h4>
                            <h4 className={classes.alpha}>
                                <Link href="/users/alpha/uz">U--Z</Link>
                            </h4>
                        </div>
                    </div>  
                </div>          
            </div>
            <div className={classes.searchcontent}>
            <div className={classes.controlsearch}>
                    <h3 style={{color: 'red', marginLeft: '5px', marginRight: '5px'}}> EITHER</h3>
                    <label htmlFor="othersearch"><h3>Search By</h3></label>
                        <input 
                            type="checkbox"
                            id="othersearch"
                            name="othersearch"
                            value="Search"
                            checked={otherSearchBy}
                            onChange={(e)=>handleCheckOtherSearch(e)} 
                        />
                        <h3 style={{color: 'red', marginLeft: '5px', marginRight: '5px'}}> OR</h3>
                        <label htmlFor="filter"><h3>Add Filter</h3></label>
                        <input 
                            type="checkbox"
                            id="filter"
                            name="filter"
                            value="Search"
                            checked={filterBy}
                            onChange={(e)=>handleOtherFilter(e)} 
                        />
                </div>
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
                </div>
                <div className={classes.multiplesearch}>
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