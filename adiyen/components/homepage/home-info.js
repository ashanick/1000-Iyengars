import classes from './home-info.module.css'
import Image from 'next/image';

function HomeInfoSection(){
    return (
        <div className={classes.color2}>
            <h2>Information on our platform</h2>
            <div className={classes.main__class__bottom}>
                <div className={classes.bottom__content}>
                    <h3>Individual Details and Connections</h3>
                    <div className={classes.bottom__left__parts}>
                        <div className={classes.bottom__detail}>
                            <div className={classes.bottom__image}>
                                <h4>How any 2 people are related?</h4>
                                <p>Select any two names and you can find their closest link.</p>
                                <Image
                                src={'/images/hp-connections.jpg' }
                                alt={"Asha Sundararajan"}
                                width={200}
                                height={200}
                                layout='responsive'
                                />
                            </div>
                        </div>
                        <div className={classes.bottom__detail}>
                            <div className={classes.bottom__image}>
                                <h4>8-Generational details</h4>
                                <p>Ancestral link goes 8 generations in any direction</p>
                                <Image
                                src={'/images/hp-connections.jpg' }
                                alt={"Asha Sundararajan"}
                                width={150}
                                height={150}
                                layout='responsive'
                                />
                            </div>
                        </div>
                        <div className={classes.bottom__detail}>
                            <div className={classes.bottom__image}>
                                <h4>Tagging people through pictures</h4>
                                <p>Pictures and memory stories connect people</p>
                                <Image
                                src={'/images/hp-connections.jpg' }
                                alt={"Asha Sundararajan"}
                                width={150}
                                height={150}
                                layout='responsive'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bottom__content__right}>
                    <h3>Multiple and Combination Searches</h3>
                    <div className={classes.bottom__indiv__content}>
                            <p>You can search by partial names, cities, profession, 
                            education, ancestral villages or any combination thereof. In particular,</p>
                            <ul>
                                <li>Partial name</li>
                                <li>Cities lived in or worked at</li>
                                <li>Education</li>
                                <li>Profession</li>
                                <li>Ancestral villages</li>
                            </ul>
                        </div>   
                </div>
            </div>
            {/* <div className={classes.main__class__bottom}> 
                <div className={classes.bottom__content}>
                    <h3>Individual Details and Connections</h3>
                    <div className={classes.bottom__detail}>
                        <div className={classes.bottom__image}>
                        <h4>How any 2 people are related?</h4>
                            <Image
                            src={'/images/hp-connections.jpg' }
                            alt={"Asha Sundararajan"}
                            width={150}
                            height={150}
                            layout='responsive'
                            />
                        </div>
                        <div className={classes.bottom__image}>
                            <h4>8-Generation details tagging people</h4>
                            <Image
                            src={'/images/hp-connections.jpg' }
                            alt={"Asha Sundararajan"}
                            width={150}
                            height={150}
                            layout='responsive'
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.bottom__content__right}>
                    <h3>Multiple and Combination Searches</h3>
                    <div className={classes.bottom__detail}>
                        <div className={classes.bottom__image}>
                            <Image
                            src={'/images/hp-search.jpg' }
                            alt={"Asha Sundararajan"}
                            width={150}
                            height={150}
                            layout='responsive'
                            />
                        </div>
                        <div className={classes.bottom__indiv__content}>
                            <p>You can search by partial names, cities, profession, 
                            education, ancestral villages or any combination thereof. In particular,</p>
                            <ul>
                                <li>Part name</li>
                                <li>Cities lived in or worked at</li>
                                <li>Education</li>
                                <li>Profession</li>
                                <li>Ancestral villages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HomeInfoSection