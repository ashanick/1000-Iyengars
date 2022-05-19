import { useRouter } from 'next/router';
import useSWR from 'swr'
import AllUsersGraph from '../../components/overlayGraph/allusers-graph';
import classes from '../../styles/indivuser.module.css'
import UsersGrid from '../../components/users/users-grid';

const fetcher = async(url) => {
    console.log('Search In fetcher U1 U2', url)
    const res = await fetch(url)
    const data = await res.json()
    console.log('In fetcher U1 U2', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

function SearchConnections(){
    const router = useRouter()
    const searchPath = router.query.slug
    console.log('Search Connections Api : ', searchPath)
    var isLoading = true
    if(searchPath === null){
        return(
            <div>Please send good request</div>
        )
    }

    const {data, error} = useSWR(
        ()=> searchPath && `/api/userconnection/${searchPath}`,
        fetcher
    )

    if (data){
        isLoading = false
        const tempData = data.membersData
        console.log('Members : ', data, 'Temp Data : ', tempData)
        console.log ('Gently .. comin in OR NOT:', data.membersData)
    }

    if (isLoading){
        return (
            <div>Please wait loading 🤳🤳💥💥💥💥💥</div>
        )
    }

    return (
        <div className={classes.user__main}>
            <div className={classes.users__grid}>
                
               {  
                   <UsersGrid items={tempData} />
               } 
            </div>
            <div >
                {data && 
                <AllUsersGraph items={data.data} />
                }
            </div>
        </div>
    )
}

export default SearchConnections