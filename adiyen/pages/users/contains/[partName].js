import { useRouter } from 'next/router';
import useSWR from 'swr'
import UsersGrid from '../../../components/users/users-grid'

const fetcher = async(url) => {
    console.log('In fetcher')
    const res = await fetch(url)
    const data = await res.json()
    console.log('In fetcher PartName', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

function SearchByContains (){
    const router = useRouter()
    const partName = router.query.partName
    var members = []

    console.log('Query router Aiyaa', router.query)
    console.log('User Detail, Part 1', partName)
    if (partName === null) {
        return (
            <div>Please send user request with correct credentials</div>
        )
    }

    const {data, error} = useSWR(
        ()=> partName && `/api/contains/${partName}`,
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
            <h1>Part Name Search</h1>
            {members && 
                <UsersGrid items={members.membersData} />
            }
        </div>
    )
}

export default SearchByContains