import Image from 'next/image'
import Link from 'next/link';

import classes from './grid-item.module.css'

function GridItem(props) {
    const {id, name, imageURL} = props
    const imagePath=`/${imageURL}`
    console.log('Grid Item : ', props)
    const linkPath = `/users/${name}`
    return (
        <li className={classes.grid}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image  
                            src={imagePath}
                            alt={name}
                            width={150}
                            height={150}
                            layout='responsive'
                            />
                    </div>
                    <div className={classes.content}>
                        <h3>{name}</h3>
                    </div>
            </a>
            </Link>
        </li>
    )
}

export default GridItem