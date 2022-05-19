import { useRouter } from 'next/router';
import useSWR from 'swr'
import UsersGrid from '../../components/users/users-grid'
import classes from '../../styles/indivuser.module.css'

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

function SearchUser2 (){
    const router = useRouter()
    const searchPath = router.query.u1u2
    // console.log('U1U2 from query : ', router.query.U1U2)
    var members = []
    const xx = searchPath.split('+')
    const yy = xx[1]+'+'+xx[2]+'+'+ xx[3]+'+'+xx[4]+'+'+xx[5]
    const user1 = xx[0]
    console.log('Query router Aiyaa xx', )
    // console.log('User Detail, Part 2', searchPath)
    if (searchPath === null) {
        return (
            <div>Please send request with correct credentials</div>
        )
    }

    const {data, error} = useSWR(
        ()=> yy && `/api/commonSearch/${yy}`,
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
            User 1: {user1}, Contine to select User 2
            <div className={classes.users__grid}>
                {members && 
                    <UsersGrid  listType='user2' user1 ={user1}
                        items={members.membersData} />
                }
            </div>

        </div>
    )
}

export default SearchUser2