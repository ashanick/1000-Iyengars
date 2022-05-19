import classes from './homepage.module.css'
import Image from 'next/image';
import citiesData from '../../data/cities.json'
import VillagesGrid from '../villages/villages-grid';

function HomePageComponent(){
    const imagePath = 'images/member/AshaSundararajan.JPG'
    var ancestralVillage = []
    if (citiesData) {
        ancestralVillage = citiesData.data.filter(cc => cc.aVillage === "true" && cc.name !== "None")
        // ancestralVillage = tempVillage.data.filter(cc => cc.name !== "None")
        // console.log('Av', ancestralVillage)
    }
    
    return (
    <div>
        <div className={classes.main__class}>
            <div className={classes.main__left}>
                <div className={classes.image}>
                    <Image
                    src={'/' + imagePath}
                    alt={"Asha Sundararajan"}
                    width={400}
                    height={500}
                    layout='responsive'
                    />
                </div>
                <h3>Ms. Asha Sundararajan</h3>
            </div>
            <div className={classes.main__center}>
                <h1 style={{color: 'blue'}}>1000+ Iyengars and their ancestral generations</h1>
                <h3>How many degrees of seperation</h3>
                <p>In 1953, my uncle Dr. Gopalachari, an only child, married my aunt Saroja. For years, he was not sure who was related to her,
                and ended up treating patients all calling him, "atimber." 
                Truly, if and when you meet another Iyengar, or someone married to an Iyengar, dig deep. There will be no more than 3 degrees
                of seperation between the two of you.</p>
                <hr style={{border: '1px solid red'}}/>
                <p>Hi, I am Asha Sundararajan. an educator, environmentalist, and an entrepreneur. 1000+ dreams is my
                    journey of finding joyful and inspirational stories of my ancestors. I wanted to go beyond ancestry and genie or
                    other sites that give you a name and a face. I wanted to be able to:
                </p>
                <ul>
                        <li>Build a network not a family tree of Iyengars and their families, including our non-iyengar loved ones.</li>
                        <li>Find links between 2 people (Use Connections)</li>
                        <li>Share stories and tag people</li>
                    </ul>
            </div>
            <div className={classes.main__right}>
                <div className={classes.main__icons}>
                <h3>Welcome to 1000+ Iyengars</h3>
                    <p>We have a compendium of members from Kodavasal, Kumbakonam, Mannargudi, Sri Rangam, Vaduvoor, Vazhutoor, and Vippodu. 
                        Our oldest member can be traced to 1876.</p>
                    <p style={{textAlign: 'center'}}>I hope that you are able to find information you are seeking for. </p>
                    <hr style={{border: '1px solid red'}}/>
                    <div className={classes.icons_images}>
                        <div className={classes.image}>
                            <Image
                            src={'/images/smile' }
                            alt={"Asha Sundararajan"}
                            width={100}
                            height={100}
                            layout='responsive'
                            />
                    </div>
                    </div>
                    <h3>Please reach out to add, change, or remove any details you do not feel comfortable sharing</h3>
                </div>
            </div>
        </div>
        
        <div className={classes.color2}>
            <h2>Information you can find on our platform</h2>
        <div className={classes.main__class__bottom} >
            
            <div className={classes.bottom__content}>
                <h3>Connections between people spanning 8 generations</h3>
                <div className={classes.image}>
                    <Image
                    src={'/images/hp-connections.jpg' }
                    alt={"Asha Sundararajan"}
                    width={400}
                    height={400}
                    layout='responsive'
                    />
                </div>
               <p> Our very reason for existence, allows you to find the 
                   shortest way that any two people are connected or linked</p>
            </div>
            <div className={classes.bottom__content}>
                <h3>Multiple Cross Searches</h3>
                <Image
                src={'/images/hp-search.jpg' }
                alt={"Asha Sundararajan"}
                width={400}
                height={400}
                layout='responsive'
                />
                <p>You can search by partial names, cities, profession, education, ancestral villages or any combination thereof.</p>
            </div>
            {/* <div className={classes.bottom__content}>
                <h3>Ancestral Villages & Clans</h3>
                <div className={classes.image}>
                    <Image
                    src={'/images/hp-people.jpg' }
                    alt={"Asha Sundararajan"}
                    width={250}
                    height={250}
                    layout='responsive'
                    />
                </div>
                <p>Displays list of members who have at least 4 generations below them.</p>
            </div> */}
            {/* <div className={classes.bottom__content}>
                <h3>Great Great Great Great</h3>
                <h4>Grandparents & Grandchildren</h4>
                <div className={classes.image}>
                    <Image
                    src={'/images/hp-people.jpg' }
                    alt={"Asha Sundararajan"}
                    width={250}
                    height={250}
                    layout='responsive'
                    />
                </div>
                <p>The generational links show other people in your generation.</p>
            </div> */}
        </div>
        </div>
        <div className={classes.main__av}>
            <div className={classes.main_av__header}>
                <h3>Ancestral Villages covered here</h3>
            </div>
            <div>
                <VillagesGrid items={ancestralVillage} />
            </div>
        </div>
    </div>
    )
}

export default HomePageComponent