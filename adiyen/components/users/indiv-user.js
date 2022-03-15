import { map } from 'lodash';
import Image from 'next/image';
import classes from './indiv-user.module.css'

function IndivUser(props) {
    const {member, name,  children, grandChildren, grandParents, parents, siblings} = props.items

    if(name === '' ) {
        return (
            <div>Some Loading Error ... Please try again</div>
        )
    }

    var i = 1
    var addComma = ', '
    var parentsList = ' '
    var siblingsList = ' '
    console.log('Parents ', parents)
    if (parents) {
        parents.map((parent)=>{
            console.log('i, ', parent.name)
            parentsList = parentsList + parent.name 
            if (i < parents.length) {
                parentsList = parentsList + addComma
            } 
            i++
        })
        console.log('Parent List = ', parentsList)
    }

    i = 1;
    console.log('Siblings ', siblings)
    if (siblings) {
        siblings.map((sibling)=>{
            console.log('i, ', sibling.name)
            siblingsList = siblingsList + sibling.name 
            if (i < siblings.length) {
                siblingsList = siblingsList + ', '
            } 
            i++
        })
        // console.log('Sibling List = ', parentsList)
    }

    return (
        <div className={classes.indivuser}>
            {member.map(indiv=> 
            <div>
                <div className={classes.image}>
                    <Image
                    src={'/' + indiv.imageURL}
                    alt={indiv.name}
                    width={200}
                    height={200}
                    layout='responsive'
                    />
                </div>
                <div className={classes.content}>
                    <h1>{indiv.name}</h1>
                </div>
            </div>
            )}
            <div className={classes.content}>
                <h1>{name}</h1>
                <div className={classes.children}>
                    <h3>Parents: </h3>{parentsList}
                </div>
                {grandParents && 
                <p>Grandparents: </p> }
                <div className={classes.children}>
                <h3>Siblings: </h3>{siblingsList}
                </div>
                <div className={classes.children}>
                    <p>Children: </p>
                    {children.map (c =>
                        <p key={c.name}> {c.name}</p> 
                    )}
                </div>

                <div className={classes.children}>
                    <p>Grand Children: </p>
                    {grandChildren.map (c =>
                        <p key={c.name}> {c.name}</p> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default IndivUser