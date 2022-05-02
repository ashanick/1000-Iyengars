import classes from './footer.module.css'

function FooterPage (){
    return (
        <footer className={classes.footer}>
            <div className={classes.footermenu}>
                <div className={classes.footercontentabout}>
                    <h2>Inspiration behind 1000+ Iyengars</h2>
                    Iyengar's Network is a collection the base of which has been drawn from my extended families across Kumbakonam, Kodavasal.
                    Mannargudi, Vaduvoor, Vazhuthoor, and Vippodu.
                    The hompage showcases individuals with at least 4 generations following them. 
                    The search options can be used individually or combined for a more targeted search.
                </div>
                <div className={classes.footercontentothers}>
                    <h2>Important Facts</h2>
                    <ul>
                        <li>Member privacy maintained as requested.</li>
                        <li>Do reach out to add, change, or remove details about members.</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage