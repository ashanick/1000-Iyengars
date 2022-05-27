import Head from "next/head"

import HomePageComponent from "../components/homepage"
import NewSearch from "../components/users/new-search"
import VillagesGrid from "../components/villages/villages-grid"
import WelcomeBanner from "../components/homepage/welcome"

function HomePage(){

    return (
        <div>
            <Head>
                <title>Iyengars</title>
                <meta 
                    name="description" 
                    content="Find and connect with the greater Iyengars and their extended families" />
            </Head>
            <WelcomeBanner />
            <NewSearch type = "common"/>
            {/* <hr style={{border: '1px solid red'}}/> */}
            <HomePageComponent />
            {/* <h2>Ancestral town and villages represented here</h2> */}
            {/* {
                ancestralVillage &&
                <VillagesGrid items={ancestralVillage} />
            } */}
        </div>
    )
}

export default HomePage