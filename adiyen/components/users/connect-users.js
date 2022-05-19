import { useRef } from 'react'
import classes from './connect-users.module.css'
import '../users/new-search'

function ConnectUsers (props){
    console.log('Connect Users ', props)
    const inputUser1 = useRef()
    const typeNameInputRef1 = useRef()
    const inputUser2 = useRef()
    const typeNameInputRef2 = useRef()

    function formSubmitHandler(event){
        event.preventDefault()
        const tempUser1 = inputUser1.current.value
    }


    return (
        <div>
            <NewSearch />
        </div>
    )
}

export default ConnectUsers