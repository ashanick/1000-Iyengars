import { useRouter } from 'next/router';
import useSWR from 'swr'
import Head from "next/head"

import AllUsersGraph from '../../components/overlayGraph/allusers-graph'
import IndivUser from '../../components/users/indiv-user';
import classes from '../../components/users/indiv-user.module.css'
// import FamilyTree from '../../components/familytree'
import MemoriesGrid from '../../components/memories/memories-grid';
import PhotoGrid from '../../components/memories/photo-grid';
import NewSearch from '../../components/users/new-search';

const fetcher = async(url) => {
    // console.log('In fetcher')
    const res = await fetch(url)
    const data = await res.json()
    // console.log('In fetcher ', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

function UserDetailPage () {
    const router = useRouter()
    const userName = router.query.userName
    var memoryState = false
    var photoState = false
    // console.log('Query router Aiyaa', router.query)
    // console.log('User Detail, Part 1', userName)
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
            <div>Please Wait Fetching Data =🤳🤳 ... Free Database 😎 ... And Large ... 🙌🙌🙌🙌</div>
        )
    }

    // console.log('After fetching Member Data', data.member.member[0].id)

    console.log('After fetching graph Photo Gallery', data.photoGallery.photoList.length)
    console.log('Details : ', data.member.member)
    if (data.memories.memories.length > 0) {
        memoryState = true
    } 
    if (data.photoGallery.photoList.length){
        photoState = true
    }

    return (
        <div>
            <Head>
                <title>Iyengars</title>
                <meta 
                    name="description" 
                    content="Find and connect with the greater Iyengars and their extended families" />
            </Head>
            <NewSearch />
             <hr style={{border: '1px solid red'}}/>
            <div className={classes.user__main}> 
                <div className={classes.user}>
                    {data &&
                        <div>
                            <IndivUser key={data.member.member[0].id} 
                                id={data.member.member[0].id}
                                name={data.member.member[0].id} 
                                ecdescrition={data.member.member[0].ecdescription}
                                imageUrl={data.member.member[0].imageURL}
                                items={data.member}
                                spouse={data.member.member[0].spouse}
                                />
                        </div>
                    } 
                </div>
                <div className={classes.indivuser__right}> 
                    {data && 
                    <AllUsersGraph items={data.data} />
                    }
                    {/* <FamilyTree /> */}
                    <div className={classes.user__rightband}>
                        <h4>Education: {data.member.member[0].education}</h4>
                    </div>
                    <div className={classes.user__rightband}>
                        <h4>Profession</h4>
                        <h4>Hobbies</h4>
                    </div>
                    <div className={classes.user__description}>
                        <h3>Early Description</h3>
                        {data.member.member[0].earlydescription}
                    </div>
                    <div className={classes.user__description}>
                        <h3>Adult Description</h3>
                        {data.member.member[0].adultdescription}
                    </div>
                    
                    {/* {memoryState && 
                        <div> */}
                            <h2>Down Memory Lane</h2>
                            <MemoriesGrid items={data.memories} />
                        {/* </div> */}
                    {/* } */}
                    <h2>Photo Gallery</h2>
                    { photoState &&
                        <PhotoGrid items={data.photoGallery} />
                    }
                </div>
            </div>
        </div>
    )

}


export default UserDetailPage