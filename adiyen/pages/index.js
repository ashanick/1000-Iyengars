import Head from "next/head"
import HomePageComponent from "../components/homepage"
// import useSWR from "swr"
// import UsersGrid from "../components/users/users-grid"
// const fetcher = async(url) => {
//     console.log('in fetcher all clans')
//     const res = await fetch(url)
//     const data = await res.json()
//     if (!data || res.status != 200) {
//         throw new Error(data.message)
//     }
//     console.log('Fetched Data : ', data)

//     return data
// }

function HomePage(){
    // const {data, error} = useSWR(
    //     ()=>`/api/allclans`, fetcher
    // )
    
    // if (!data) {
    //     return <div>Error .. Please try again</div>
    // }
    // console.log('=🤳🤳🤳', data, error)
    return (
        <div>
            <Head>
                <title>Iyengars</title>
                <meta 
                    name="description" 
                    content="Find and connect with the greater Iyengars and their extended families" />
            </Head>
            <HomePageComponent />

            {/* <UsersGrid items={data.membersData} /> */}
        </div>
    )
}

export default HomePage