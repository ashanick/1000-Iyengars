import Link from "next/link";
import { useRef } from "react";

import Button from '../ui/button'
import classes from './users-search.module.css'
import citiesData from '../../data/cities.json'
import educationData from '../../data/education.json'
import { useRouter } from "next/router";

function UsersSearch() {
    const router = useRouter()
    console.log('Cities : ', citiesData.data)
    console.log('Education : ', educationData.data)
    const typeNameInputRef = useRef()
    const inputRef = useRef()

    function submitHandler(event){
        event.preventDefault()
        const memberSearch = inputRef.current.value
        const strLength = inputRef.current.value.length
        if (memberSearch && strLength > 3) {
            const tempMemberType = typeNameInputRef.current.value
            console.log('Form ', inputRef.current.value, tempMemberType, strLength)
            const fullPath = `/users/memberSearch/${memberSearch}/${tempMemberType}`
            router.push(fullPath)
        } else {
            console.log('Kolaveri Kolaveri Di')
        }

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Search our compendium</h2>
            <hr style={{marginTop: '-10px', padding: '0 20px', border: '1px solid red'}}></hr>

            <div className={classes.control}>
                <h3>By Name</h3>
                <input 
                    type="text"
                    id="searchuser"
                    placeholder='Enter 4 letters of name'
                    aria-label='Enter 4 letters of name' 
                    ref={inputRef}
                    />
                <div className={classes.control}>
                    <label htmlFor="typename">Letters</label>
                    <select id='typename' ref={typeNameInputRef}>
                        <option value='Contains'>Contains</option>
                        <option value='Starts'>Starts With</option>
                        <option value='Ends'>Ends With</option>
                    </select>
                </div>
            </div>
            <hr style={{marginTop: '-10px', padding: '0 20px', border: '1px solid red'}}></hr>
            <p>List of users by Alphabet</p>
            <div className={classes.contentalpha}>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/ad">A--D</Link>
                </h3>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/eh">E--H</Link>
                </h3>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/il">I--L</Link>
                </h3>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/mp">M--P</Link>
                </h3>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/qt">Q--T</Link>
                </h3>
                <h3 className={classes.alpha}>
                    <Link href="/users/alpha/uz">U--Z</Link>
                </h3>
            </div>
            <hr style={{marginTop: '-10px', border: '1px solid red'}}></hr>
            {/* <div className={classes.control}>
                <label htmlFor='member'>Find Member</label>
                <input type="text" name='member' onChange={memberChange}/>
            </div> */}
                
            {/* <div className={classes.control}>
                <p>Connections with Individuals</p>
                <p>Person1</p>
                Person2
            </div> */}
            {/* <div className={classes.herocontent}>
                City: Drop down box   Choose from: Lived In, Worked at, Born in
            </div>

            <p>Education</p>
            <p>Work Place</p> */}

        <Button>Find members</Button>
        </form>
    )
}

export default UsersSearch