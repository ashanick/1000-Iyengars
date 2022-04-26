import classes from './footer.module.css'

function FooterPage (){
    return (
        <footer className={classes.footer}>
            <div className={classes.footermenu}>
                <div className={classes.footercontentabout}>
                    Iyengar's Network is a collection the base of which has been drawn from my extended families across Kumbakonam, Kodavasal.
                    Mannargudi, Vaduvoor, Vazhuthoor, and Vippodu.
                </div>
                <div className={classes.footercontentothers}>
                    Fantastic
                </div>
            </div>
        </footer>
    )
}

export default FooterPage