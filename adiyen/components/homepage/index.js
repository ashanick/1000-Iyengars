import classes from './homepage.module.css'

import citiesData from '../../data/cities.json'
import VillagesGrid from '../villages/villages-grid';
import HomeTopSection from './home-top';
import HomeInfoSection from './home-info'

function HomePageComponent(){

    var ancestralVillage = []
    if (citiesData) {
        ancestralVillage = citiesData.data.filter(cc => cc.aVillage === "true" && cc.name !== "None")
    }
    
    return (
    <div>
        <HomeTopSection />
        <HomeInfoSection />
        <div className={classes.main__av}>
            <div className={classes.main_av__header}>
                <h3>Ancestral Villages covered here, and some current visits</h3>
            </div>
            <div>
                <VillagesGrid items={ancestralVillage} />
            </div>
        </div>
        
    </div>
    )
}

export default HomePageComponent