import { useRouter } from "next/router";
import SearchForm from "../components/searches/search-form"

function SearchLinks(){
    var router = useRouter()
    
    function getvalues(e){
        const searchPath = `/linksUser1/${e}`
        console.log('Search Links In Search Links Pages function get values', searchPath)   
        router.push(searchPath)
    }

    return (
        <div>
            <SearchForm type="connections" returnHandler={(e)=>getvalues(e)}/>
        </div>
    )
}

export default SearchLinks