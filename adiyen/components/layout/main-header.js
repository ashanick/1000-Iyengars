import Link from "next/link";

import Image from "next/image";

import classes from './main-header.module.css'

function MainHeader() {
    const imagePath = '/images/Iyengars logo.png'

    return  (
        <header className={classes.header} >
            <div className={classes.headermenu}>
        
                <Link href="/">
                    <a>
                        <div className={classes.image}>
                            <Image  
                                src={imagePath}
                                alt="1000+ Iyengars"
                                width={200}
                                height={150}
                                layout='responsive'
                            />
                           <p style={{color: 'white'}}>Compendium of Iyengars
                            </p>                         
                        </div>
                    </a>
                </Link>
                
                <nav className={classes.navigation}>
                    <ul className={classes.links}>
                        <li>
                            <Link href="/clans">Clans</Link>
                        </li>
                        <li>
                            <Link href="/search-links">Links</Link>
                        </li>

                        <li> 
                            <Link href="/contactus">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* <NewSearch /> */}
        </header>
    )
}

export default MainHeader