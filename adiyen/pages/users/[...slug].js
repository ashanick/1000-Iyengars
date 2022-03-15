import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr'
import UsersGrid from '../../components/users/users-grid';

const fetcher = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log('Hello')
    if (!data || res.status != 200) {
        throw new Error(data.message)
    }
    console.log('In Fetcher Alpha : ', data)
    return data
}

function SlugPage(){
    const router = useRouter()
    const slugQuery = router.query.slug

    if (!slugQuery || slugQuery.length < 2){
        return (
            <div>Opps go back</div>
        )
    }

    var members = []
    var routePath = ''
    var alpha = ""

    if (slugQuery.length > 1){
        alpha = slugQuery[1]
        routePath = slugQuery[0]
        console.log('SlugQuery 0 : ', routePath, 'alp : ', alpha)
    }

    console.log('Route Path : ', routePath)

    const {data, error} = useSWR(
        ()=> alpha && `/api/contains/${alpha}`,
        fetcher
    )
    console.log('Kolaveri Data1 ', data)
    members = data

    console.log('Members asearchlpha ', members)
    
    if (!data) {
        <div>Please wait or retry again ... </div>
    }

    console.log('=🤳🤳🤳Slug Main Branch : ', members )
    return (
        <div>
            {members && 
                <UsersGrid items={members.membersData} />
            }
        </div>
    )
}

export default SlugPage