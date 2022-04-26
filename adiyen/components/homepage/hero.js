import UsersSearch from '../users/users-search'
import classes from './hero.module.css'

function Hero(){
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                Asha Picture here
            </div>
            <div className={classes.herodescription}>
                <h1>Welcome to 1000 Iyengars ++</h1>
                <p>Like most Iyengars, I am </p>
            </div>
        </section>
    )
}

export default Hero