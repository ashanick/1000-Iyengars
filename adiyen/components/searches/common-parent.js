import SearchForm from "./search-form"

function CommonParentSearch() {
    function getvalues(e){
        // console.log('In function get values', e)   
    }

    return(
        <div>
            Parent Search
            <SearchForm type='common' returnHandler={(e)=>getvalues(e)}/>
        </div>
    )
}

export default CommonParentSearch