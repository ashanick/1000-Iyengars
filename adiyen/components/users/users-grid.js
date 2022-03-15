import GridItem from './grid-item'
import classes from './users-grid.module.css'

function UsersGrid(props) {
    const members = props.items.members
    // console.log('Users Grid ', members)

    if (!members) {
        return (
            <div>Auhhgg Error ... No Members Found Yetttt</div>
        )
    }
    return (
        <ul className={classes.users}>
            {members.map(member => 
                <GridItem
                    key= {member.id}
                    id = {member.id}
                    name={member.name}
                    imageURL={member.imageURL}
                    ecdescription={member.ecdescription}
                />)}
        </ul>
    )
}

export default UsersGrid