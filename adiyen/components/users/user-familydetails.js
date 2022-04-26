import classes from './user-familydetails.module.css'
import Card from '../ui/card'
import Image from 'next/image';

function UserFamilyDetails(props) {
    console.log('Details : ', props)
    return (
        <li className={classes.detailitem}>
            <Card className={classes.detailitemcontent}>
                <div className="userdetail__image">
                    <img 
                        src={'/' + props.parent.imageURL} 
                        alt={props.parent.name} 
                        width={80}
                        height={80}
                        layout='responsive'
                    />
                </div>
                <h4>{props.type}</h4>
                {props.parent.name}
            </Card>
        </li>
    )
}

export default UserFamilyDetails