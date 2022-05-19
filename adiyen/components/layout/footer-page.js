import classes from './footer.module.css'
import Image from 'next/image';

function FooterPage (){
    return (
        <footer className={classes.footer}>
             <div className={classes.footermenu}> 
                <div className={classes.footercontentabout}>
                    <h2>Acknowledgements</h2>
                    <hr style={{border: '1px solid red'}}/>
                    <ul>
                        <li>Kodavasal Family Tree, Mrs. Kumuda and Mr. Seshadri Sreenivasan</li>
                        <li>Kumbakonam C.L.Rangaswami Family Tree, Kuppuswamy</li>
                        <li>R.S.Kuppuswamy Family Stories, Babchi Vaidehi</li>
                        <li>Vazhyutoor Dikshitar Vamsa from 1700</li>
                    </ul>
                </div>
                <div className={classes.footercontentothers}>
                    <h3>More Info</h3>
                    <hr style={{border: '1px solid red'}}/>
                    <ul>
                        <li>How to contribute</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul> 
                </div>
            </div>
            <div className={classes.fcopy}> 
                Copyrights Reserved @Asha Sundararajan
                {/* <hr style={{border: '1px solid red'}}/> */}
            </div>
        </footer>
    )
}

export default FooterPage