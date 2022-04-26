import { useRouter } from 'next/router';
import useSWR from 'swr'

// import AllUsersGraph from '../../components/overlayGraph/allusers-graph'
import IndivUser from '../../components/users/indiv-user';
import classes from '../../styles/indivuser.module.css'
// import MemoriesGrid from '../../components/memories/memories-grid'

const fetcher = async(url) => {
    console.log('In fetcher')
    const res = await fetch(url)
    const data = await res.json()
    console.log('In fetcher ', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

function UserDetailPage () {
    const router = useRouter()
    const userName = router.query.userName
    console.log('Query router Aiyaa', router.query)
    console.log('User Detail, Part 1', userName)
    if (userName === null) {
        return (
            <div>Please send user request with correct credentials</div>
        )
    }

    const {data, error} = useSWR(
        ()=> userName && `/api/users/${userName}`,
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

    // console.log('After fetching Member Data', data.member.member[0].id)
    // console.log('After fetching graph data', data.data)
    return (
    <div>
        <div>
            {data &&
                <div>
                    <IndivUser key={data.member.member[0].id} 
                        name={data.member.member[0].id} 
                        ecdescrition={data.member.member[0].ecdescription}
                        imageUrl={data.member.member[0].imageURL}
                        items={data.member}
                        />
                </div>
            } 
        </div>
        <div>
                Paranoia
        </div>
        <div>
            Memories
        {/* <div>
            { data.memories &&   
                <MemoriesGrid items={data.memories} />
            }
        </div> */}
        </div>
    </div>
    )

}


export default UserDetailPage