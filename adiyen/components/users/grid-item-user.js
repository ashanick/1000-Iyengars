import Image from 'next/image'
import Link from 'next/link';
import Button from '../ui/button';
import classes from './grid-item.module.css'
import { useRouter } from 'next/router';

function GridItemUser(props) {
    const {id, name, imageURL} = props
    var router = useRouter()
    var showButton = false
    if (listType === 'connections'){
        showButton = true
    }
    const imagePath=`/${imageURL}`
    // console.log('Grid Item : ', props)
    const linkPath = `/users/${name}`

    function submitClick(){

        const searchPath= `/linksUser2/${id}`
        // console.log('Links 2 Search Path', searchPath)
        router.push(searchPath)
    }

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
                    
                    <div className={classes.showButtonDetails}>
                        <Button onClick={submitClick}>Select</Button>
                    </div>
            </a>
            </Link>
        </li>
    )
}

export default GridItemUser