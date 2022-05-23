import classes from './homepage.module.css'
import Image from 'next/image';

function HomeTopSection(){
    const imagePath = 'images/member/AshaSundararajan.JPG'
    return (
        <div className={classes.main__class}>
            <div className={classes.main__left}>
                <div className={classes.image}>
                    <Image
                    src={'/' + imagePath}
                    alt={"Asha Sundararajan"}
                    width={400}
                    height={500}
                    layout='responsive'
                    placeholder='empty'
                    />
                </div>
                <h3>Ms. Asha Sundararajan</h3>
                <p style={{color: 'white'}}>Environmentalist, Educator, Entrepreneur</p>
            </div>
            <div className={classes.main__center}>
                <h1 style={{color: 'blue'}}>Welcome to 1000+ Iyengars</h1>
                <h3>The Cauvery Delta Iyengars: How many degrees of seperation</h3>
                <p>We have a compendium of members from Kodavasal, Kumbakonam, Mannargudi, Sri Rangam, Vaduvoor, Vazhutoor, and Vippodu. 
                        Our oldest member Vijaya Dikshithar also know as Yagna Dikshithar from Vazhuthur can be traced to 1700. The Clans page showcases members 5+ generations.</p>
                        <h4>Please reach out to add, change, or remove any details you do not feel comfortable sharing</h4>
                <p>In 1953, my uncle Dr. Gopalachari (only child), an only child, married my aunt Saroja (extended family). For years, he was not sure who was related to her,
                and ended up treating patients all calling him, "atimber." 
                Truly, if and when you meet another Iyengar, or someone married to an Iyengar, dig deep. There will be no more than 3 degrees
                of seperation between the two of you.</p>
                <hr style={{border: '1px solid red'}}/>
                <p>1000+ dreams is my
                    journey of finding joyful and inspirational stories of my ancestors. I grew up in a large extemded family, 
                    but am aware of the inquisitive drive our far-flung next generation has about "Where do I come from?" I wanted to go beyond ancestry and genie or
                    other sites that give you just a family tree, name, a face, and a few details. I wanted to be able to:
                </p>
                    <ul>
                        <li>Build a network not a family tree of Iyengars and their families, including our non-iyengar loved ones.</li>
                        <li>Find links between 2 people (Use Connections)</li>
                        <li>Immortalize funny, fascinating, amazing, endearing, and inspiring memories</li>
                        <li>Share stories and tag people</li>
                    </ul>
                    {/* <h1 style={{color: 'blue'}}>T1000+ Iyengars and their ancestral generations</h1> */}
            </div>
            {/* <div className={classes.main__right}>
                <div className={classes.main__icons}>
                    <h3>Welcome to 1000+ Iyengars</h3>
                    <p>We have a compendium of members from Kodavasal, Kumbakonam, Mannargudi, Sri Rangam, Vaduvoor, Vazhutoor, and Vippodu. 
                        Our oldest member can be traced to 1876.</p>
                    <p style={{textAlign: 'center'}}>I hope that you are able to find information you are seeking for. </p>
                    <hr style={{border: '1px solid red'}}/>
                    <div className={classes.icons__main}>
                        <div className={classes.icons_images}>
                            <div className={classes.image__icon}>
                                <Image
                                src={'/images/smile.png' }
                                alt={"Asha Sundararajan"}
                                width={150}
                                height={150}
                                layout='responsive'
                                />
                            </div>
                        </div>
                        <div className={classes.icons_images}>
                            <div className={classes.image__icon}>
                                <Image
                                src={'/images/sad.png' }
                                alt={"Asha Sundararajan"}
                                width={100}
                                height={100}
                                layout='responsive'
                                />
                            </div>
                        </div>
                    </div>  
                    <h3>Please reach out to add, change, or remove any details you do not feel comfortable sharing</h3>
                </div> 
            </div>     */}
        </div>
    )
}

export default HomeTopSection