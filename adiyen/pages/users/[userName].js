import { useRouter } from 'next/router';
import useSWR from 'swr'

import AllUsersGraph from '../../components/overlayGraph/allusers-graph'
import IndivUser from '../../components/users/indiv-user';
import classes from '../../components/users/indiv-user.module.css'
// import FamilyTree from '../../components/familytree'
import { Card } from 'material-ui-core';
import MemoriesGrid from '../../components/memories/memories-grid';
import PhotoGrid from '../../components/memories/photo-grid';
// import MemoriesGrid from '../../components/memories/memories-grid'

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
            <div>Please Wait Fetching Data =🤳🤳😎🙌🙌🙌🙌🙌</div>
        )
    }

    // console.log('After fetching Member Data', data.member.member[0].id)

    console.log('After fetching graph Photo Gallery', data.photoGallery.photoList.length)
    if (data.memories.memories.length > 0) {
        memoryState = true
    } 
    if (data.photoGallery.photoList.length){
        photoState = true
    }

    return (
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
                        />
                </div>
            } 
        </div>
        <div className={classes.indivuser__right}> 
            {data && 
            <AllUsersGraph items={data.data} />
            }
            {/* <FamilyTree /> */}
            <Card className={classes.user__rightband}>
                <h4>Education</h4>
                <h4>Profession</h4>
                <h4>Hobbies</h4>
            </Card>
            
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
    )

}


export default UserDetailPage