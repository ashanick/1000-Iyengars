import Image from 'next/image';
import classes from './indiv-memory-detail.module.css'

function IndivMemoryDetail(props){
    const {id, name, date, heading1, title, imageURL, bannerimageURL} = props.items[0]
    // console.log('Indiv Memory Details : ', props.items[0].name)
    return (
        <div>
            <div className={classes.image} >
                <Image
                    src={'/' + bannerimageURL}
                    alt={name}
                    width={1600}
                    height={400}
                    layout='responsive'
                />
            </div>
            <div>
            <Image
                    src={'/images/reel1.png'}
                    alt={name}
                    width={150}
                    height={150}
                    layout='responsive'
                />
            </div>
            <div className={classes.image__name}>
                <h1>{title} BY :- </h1> 
                <h1 style={{color: 'red'}}> {name}</h1>
                <h1> -- Year : {date}</h1>
            </div>  
            <div>
                <h3>heading1</h3>
                <p>description1</p>
            </div>
            <div>
                <h3>heading2</h3>
                <p>description2</p>
            </div>
            <div>
                <h3>heading3</h3>
                <p>description3</p>
            </div>
        </div>
    )
}

export default IndivMemoryDetail