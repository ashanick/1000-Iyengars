import Link from "next/link"
import classes from './memories-item.module.css'
import Image from 'next/image'

function MemoriesItem(props) {
    const {id, title, excerpt, imageURL} = props.items
    console.log('Memories Item : ', imageURL)
    const imagePath = `/${imageURL}`
    // const imagePath='/images/memories/AdityaUpsideDownBhindi.jpg'
    const linkPath = `/memory/indiv-memory/${id}`
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image 
                            src={imagePath}
                            alt={title}
                            width={250}
                            height={250}
                            Layout='responsive'
                        />
                    </div>
                    <div className={classes.content}>
                        <h4>{title}</h4>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default MemoriesItem