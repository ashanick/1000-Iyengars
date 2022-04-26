// import { map } from 'lodash';
// import React from 'react';
import Image from 'next/image';
import classes from './indiv-user.module.css'
import FamilyTree from '../familytree';
import Card from '../ui/card'
import UserFamilyDetails from './user-familydetails';

function IndivUser(props) {
    const {member, name,  children, grandChildren, grandParents, parents, siblings} = props.items

    if(name === '' ) {
        return (
            <div>Some Loading Error ... Please try again</div>
        )
    }

    var i = 1
    var addComma = ', '
    var parentsList = ''
    var siblingsList = ''
    var childrenList = ''
    var grandChildrenList =  ''
    // console.log('Parents ', parents)
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

    i = 1;
    console.log('Children ', children)
    if (children) {
        console.log('In Children')
    }
    if (children) {
        children.map((child)=>{
            // console.log('i, ', i, ' Lenghth', children.length, child.name)
            childrenList = childrenList + child.name 
            if (i < children.length) {
                childrenList = childrenList + ', '
            } 
            i++
        })
        // console.log('Sibling List = ', parentsList)
    }

    i = 1;
    console.log('Children ', children)
    if (grandChildren) {
        grandChildren.map((gchild)=>{
            // console.log('i, ', i, ' Lenghth', children.length, child.name)
            grandChildrenList = grandChildrenList + gchild.name 
            if (i < grandChildren.length) {
                grandChildrenList = grandChildrenList + ', '
            } 
            i++
        })
        // console.log('Sibling List = ', parentsList)
    }

    return (
        <div className={classes.indivuser}>
            <div className={classes.indivuser__image}>
                {member.map(indiv=> 
                    <div >
                        <div className={classes.image}>
                            <Image
                            src={'/' + indiv.imageURL}
                            alt={indiv.name}
                            width={300}
                            height={300}
                            layout='responsive'
                            />
                        </div>
                        <div className={classes.content}>
                            <h1>{indiv.name}</h1>
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.content}>
                <div className={classes.userdetailwrap}>
                    <ul className={classes.userdetaillist}>
                        {parents.map(parent => 
                            <UserFamilyDetails 
                                key={parent.name}
                                id={parent.name}
                                type="Parent" 
                                parent={parent}/>
                        )}
                    </ul>
                </div>
            </div>
        </div>
        // <div className={classes.indivuser}>
        //     
        //     <div className={classes.content}>
        //         <h1>{name}</h1>
        //         <div className={classes.children}>
        //             <h3>Parents: </h3>{parentsList}
        //         </div>
        //         {grandParents && 
        //         <p>Grandparents: </p> }
        //         <div className={classes.children}>
        //             <h3>Siblings: </h3>{siblingsList}
        //         </div>

        //         {children && 
        //             <div className={classes.children}>
        //                 <h3>Children: </h3>{childrenList}
        //             </div>
        //         }

        //         {grandChildren && 
        //             <div className={classes.children}>
        //                 <h3>Grand Children: </h3>{grandChildrenList}
        //             </div>
        //         }
        //     </div>
        //     {/* <FamilyTree /> */}
        // </div>
    )
}

export default IndivUser