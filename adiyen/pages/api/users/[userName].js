import _ from "lodash";
var neo4j = require('neo4j-driver');
var driver = neo4j.driver(
    "neo4j+s://6c5afb5b.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0")
  );

var session = driver.session();

export default function handler({query: {userName}}, res) {
    console.log(' 🤳🤳🤳User Name Api 6666 =====: ', userName)

    var userNodes = []
    var userLinks = []
    var memberDetail = []
    var children = []
    var grandChildren = []
    var parents = []
    var grandParent = []
    var siblings = []
    var memoriesList = []
    var parentArray = ["Parent1", "Parent2", "Parent3", "Parent4","Parent5", "Parent6", "Parent7", "Parent8"]
    var writeTarget = ""
    var prevLength = 0
    var tempIndex = 0
    var firstNode = true
    var people = false
    
    session
    .run(`OPTIONAL MATCH pathmem = (b:Member {name: '${userName}'}) - [r:OWNS] -(m:Memory) 
        OPTIONAL MATCH (m:Member {name: '${userName}'}) 
        OPTIONAL MATCH path=(n:Member {name: '${userName}'})-[:PARENT_OF*1..5]-(p) 
        WITH pathmem, r, m, n, path, range(0,length(path)-1) as index  
        Return m, n, path, [i in index | CASE WHEN nodes(path)[i] = startNode(RELATIONSHIPS(path)[i]) THEN 'incoming' ELSE 'outgoing' END ] as directions, pathmem, r`)    
    .then(function(result){
            console.log('Got it Records')

            if (result.records.length === 0){
                res.status(201).json({message: "Opps Not Found"})
            } else {
                result.records.forEach(function(record){

                    if (record._fields[4]) {
                        if (record._fields[4] !== null && record._fields[5].type ===  "OWNS") {
                            console.log('Field 4 Relations: ', record._fields[4])
                            memoriesList.push({
                                title: record._fields[4].end.properties.title,
                                imageURL: record._fields[4].end.properties.imageURL,
                                description1: record._fields[4].end.properties.description1
                            })
                        }
                    }
                    if (record._fields[5]) {
                        console.log('Field 5 ', record._fields[5])
                    }

                    if ( firstNode){
                        firstNode = false
                        prevLength = 0

                        memberDetail.push({
                            id: record._fields[1].properties.name,
                            name: record._fields[1].properties.name,
                            imageURL: record._fields[1].properties.imageURL,
                        })
                        userNodes.push({
                            id: record._fields[1].properties.name,
                            name: record._fields[1].properties.name,
                            __typename: record._fields[1].labels
                        })
                        parentArray[0] = record._fields[1].properties.name
                    }

                    if (record._fields[2]){
                        tempIndex = record._fields[2].length -1

                        if (prevLength < record._fields[2].length) {
                            writeTarget = record._fields[2].end.properties.name
                            prevLength = record._fields[2].length
                        }

                        if (prevLength === record._fields[2].length) {
                            // console.log('Source : ', parentArray[tempIndex])
                            // console.log('Target : ', writeTarget)
                            userNodes.push({
                                id: writeTarget,
                                name: writeTarget,
                                __typename: record._fields[2].labels
                            })
                            userLinks.push({
                                source: parentArray[tempIndex],
                                target: writeTarget
                            })

                            prevLength = 0
                            parentArray[record._fields[2].length] = writeTarget
                        }

                        if (prevLength > record._fields[2].length) {
                            console.log('How did this happen')
                        }

                        people = false
                        if (record._fields[3].length === 1) {
                            people = true
                        } else {
                            if (record._fields[3][0] === record._fields[3][1]) {
                                people = true
                            }
                        }
                        
                        if (people) {
                            if (record._fields[2].length === 1) {
                                if (record._fields[3][0] === "incoming"){
                                    children.push ({
                                        name: record._fields[2].end.properties.name
                                    })
                                } 
                                if (record._fields[3][0] === "outgoing" ){
                                    parents.push({
                                        name: record._fields[2].end.properties.name 
                                    })
                                }
                            }
        
                            if (record._fields[2].length === 2) {
                                if (record._fields[3][0] === "incoming"){
                                    grandChildren.push ({
                                        name: record._fields[2].end.properties.name
                                    })
                                }   
                                if (record._fields[3][0] === "outgoing"){
                                    grandParent.push({
                                        name: record._fields[2].end.properties.name 
                                    })
                                }
                            }
                        }

                        if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "incoming" && record._fields[2].length === 2) {
                            console.log('Sibling, ', record._fields[3])
                            console.log('Sibling, ', record._fields[2])
                            siblings.push({
                                name: record._fields[2].end.properties.name 
                            })
                        }
                        if (record._fields[2].length === 2) {
                        }
                    }
                })
            }
            const data =  {nodes:_.uniqBy(userNodes, "id"),
                    links: userLinks
                    }
            const member = {member: memberDetail, 
                    children:_.uniqBy( children, "name"), grandChildren: _.uniqBy(grandChildren, "name"), 
                    parents: _.uniqBy(parents, "name"), grandParent: _.uniqBy(grandParent, "name"),
                    siblings: _.uniqBy(siblings, "name")
                }
            const memories = {memories: _.uniqBy(memoriesList, "title")}
            // console.log('Children ', children, grandChildren, 'GrandChildren : ')
            // console.log('Parent : ', parents, 'Grandparent ', grandParent)
            // console.log('Siblings ', siblings)
            // console.log('Memories : ', memories)
            console.log('En Fin With Individual User: 🙌🙌🙌🙌💥💥💥💥💥💥😎😎😎😎😎 ')
            if (firstNode) {
                res.status(201).json({message: "Opps Not Found"})
            } else {
                res.json({data: data, member: member, memories: memories})
            }
        }) .catch(function(error){
            console.log("Hey airaaa", error);
        });
  }