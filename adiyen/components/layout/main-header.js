import Link from "next/link";
import NewSearch from "../users/new-search";

import classes from './main-header.module.css'

function MainHeader() {


    return  (
        <header className={classes.header} >
            <div className={classes.headermenu}>
                <div className={classes.logo}>
                    <Link href="/">1000+ Iyengars Links</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul className={classes.links}>
                        <div style={{paddingRight: '1rem'}}>
                        {/* <li>
                            <Link href="/aboutus">About</Link>
                        </li>
                        </div>
                        <div style={{paddingRight: '1rem'}}>
                        <li> 
                            <Link href="/contactus">Contact</Link>
                        </li> */}
                        </div>
                        <div style={{paddingRight: '1rem'}}>
                        <li> 
                            <Link href="/search-links">Connections</Link>
                        </li>
                        </div>
                        <div style={{paddingRight: '1rem'}}>
                        <li> 
                            <Link href="/login-members">Additions</Link>
                        </li>
                        </div>
                    </ul>
                </nav>
            </div>
            {/* <NewSearch /> */}
        </header>
    )
}

export default MainHeader