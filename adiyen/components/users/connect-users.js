import { useRef } from 'react'
import classes from './connect-users.module.css'

function ConnectUsers (props){
    console.log('Connect Users ', props)
    const inputUser1 = useRef()
    const typeNameInputRef1 = useRef()
    const inputUser2 = useRef()
    const typeNameInputRef2 = useRef()

    return (
        <form className={classes.form}>
            <h4> I was curious. How many ways was my son Aditya connected with cousin Nikhil?</h4>
            <hr style={{marginTop: '-10px', padding: '0 10px', border: '2px solid red', width: '112%'}}></hr>
            <div className={classes.controls}>
                <div className={classes.control}>
                <h3>Find Member 1</h3>
                    <input 
                        type="text"
                        id="searchuser"
                        placeholder='Enter 4 letters of name'
                        aria-label='Enter 4 letters of name' 
                        ref={inputUser1}
                        />
                    <div className={classes.options}>
                        <label htmlFor="typename">Letters </label>
                        <select id='typename' ref={typeNameInputRef1}>
                            <option value='Contains' >Contains</option>
                            <option value='Starts' >Starts With</option>
                            <option value='Ends' >Ends With</option>
                        </select>
                    </div>
                </div>
                <div className={classes.control}>
                    <h3>Find Member 2</h3>
                    <input 
                        type="text"
                        id="searchuser"
                        placeholder='Enter 4 letters of name'
                        aria-label='Enter 4 letters of name' 
                        ref={inputUser2}
                        />
                    <div className={classes.options}>
                        <label htmlFor="typename">Letters </label>
                        <select id='typename' ref={typeNameInputRef2}>
                            <option value='Contains'>Contains</option>
                            <option value='Starts'>Starts With</option>
                            <option value='Ends'>Ends With</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ConnectUsers