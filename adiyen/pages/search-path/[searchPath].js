import { useRouter } from 'next/router';
import useSWR from 'swr'
import UsersGrid from '../../components/users/users-grid'

const fetcher = async(url) => {
    console.log('Search In fetcher')
    const res = await fetch(url)
    const data = await res.json()
    console.log('In fetcher City Name', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

function SearchAll (){
    const router = useRouter()
    const searchPath = router.query.searchPath
    var members = []

    console.log('Query router Aiyaa', router.query)
    console.log('User Detail, Part 2', searchPath)
    if (searchPath === null) {
        return (
            <div>Please send city request with correct credentials</div>
        )
    }

    const {data, error} = useSWR(
        ()=> searchPath && `/api/commonSearch/${searchPath}`,
        fetcher
    )

    if (error) {
        return (
            <div><h1>Something went wrong .... Please try again</h1></div>
        )
    }

    if (!data) {
        return (
            <div>Why so impossible?</div>
        )
    }

    console.log('Kolaveri Data1 ', data)
    members = data

    console.log('Members asearchlpha ', members)

    return (
        <div>
            <h1>Common Search</h1>
            {members && 
                <UsersGrid items={members.membersData} />
            }
        </div>
    )
}

export default SearchAll