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
    var greatGrandChildren = []
    var greatGreatGrandChildren = []
    var greatGreatGreatGrandChildren = []
    var parents = []
    var grandParent = []
    var greatGrandParent = []
    var greatGreatGrandParent = []
    var greatGreatGreatGrandParent = []
    var siblings = []
    var memoriesList = []
    var parentArray = ["Parent1", "Parent2", "Parent3", "Parent4","Parent5", "Parent6", "Parent7", "Parent8"]
    var writeTarget = ""
    var prevLength = 0
    var tempIndex = 0
    var firstNode = true
    var people = false
    var nodeType = "user"
    
    session
    .run(`OPTIONAL MATCH pathmem = (b:Member {name: '${userName}'}) - [r:MEMORY_OWN] ->(o:Memories) 
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
                    // console.log('Memory field 1 & 4: ', record._fields[1])
                   
                    if (record._fields[4]) {
                        if (record._fields[4] !== null && record._fields[5].type ===  "MEMORY_OWN") {
                            // console.log('Field 4 Relations: ', record._fields[4])
                            memoriesList.push({
                                id: record._fields[4].end.properties.memid,
                                title: record._fields[4].end.properties.title,
                                imageURL: record._fields[4].end.properties.imageURL,
                                excerpt: record._fields[4].end.properties.excerpt
                            })
                        }
                    }
                    // if (record._fields[5]) {
                    //     console.log('Field 5 ', record._fields[5])
                    // }

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
                            // __typename: record._fields[1].labels
                            __typename: nodeType
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
                            // console.log("node", writeTarget, record._fields[2].length )
                            if (record._fields[2].length < 3) {
                                userNodes.push({
                                    id: writeTarget,
                                    name: writeTarget,
                                    // __typename: record._fields[2].labels
                                    __typename: nodeType
                                })
                                userLinks.push({
                                    source: parentArray[tempIndex],
                                    target: writeTarget
                                })
                            }

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
                                    nodeType="children"
                                } 
                                if (record._fields[3][0] === "outgoing" ){
                                    // console.log('Parents : ', record._fields[2].end)
                                    parents.push({
                                        name: record._fields[2].end.properties.name,
                                        imageURL: record._fields[2].end.properties.imageURL 
                                    })
                                    nodeType="parent"
                                }
                            }
        
                            if (record._fields[2].length === 2) {
                                if (record._fields[3][0] === "incoming"){
                                    grandChildren.push ({
                                        name: record._fields[2].end.properties.name,
                                        imageURL: record._fields[2].end.properties.imageURL 
                                    })
                                    nodeType="grandChildren"
                                }   
                                if (record._fields[3][0] === "outgoing"){
                                    grandParent.push({
                                        name: record._fields[2].end.properties.name,
                                        imageURL: record._fields[2].end.properties.imageURL 
                                    })
                                    nodeType="grandParent"
                                }
                            }

                            if (record._fields[2].length === 3) {
                                // console.log('Field length = 3 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                                if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming"){
                                    greatGrandChildren.push ({
                                        name: record._fields[2].end.properties.name
                                    })
                                    nodeType="greatGrandChildren"
                                }   
                                if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing"){
                                    greatGrandParent.push({
                                        name: record._fields[2].end.properties.name 
                                    })
                                    nodeType="greatGrandParent"
                                }
                            }

                            if (record._fields[2].length === 4) {
                                // console.log('Field length = 4 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                                if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming" && record._fields[3][3] === "incoming"){
                                    // console.log('GGC')
                                    greatGreatGrandChildren.push ({
                                        name: record._fields[2].end.properties.name
                                    })
                                    nodeType="greatGreatGrandChildren"
                                }   
                                if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing" && record._fields[3][3] === "outgoing"){
                                    // console.log('GGP Push')
                                    greatGreatGrandParent.push({
                                        name: record._fields[2].end.properties.name 
                                    })
                                    nodeType="greatGreatGrandParent"
                                }
                            }
                            if (record._fields[2].length === 5) {
                                // console.log('Field length = 4 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                                if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming" && record._fields[3][3] === "incoming" && record._fields[3][4] === "incoming"){
                                    // console.log('GGC')
                                    greatGreatGreatGrandChildren.push ({
                                        name: record._fields[2].end.properties.name
                                    })
                                    nodeType="greatGreatGreatGrandChildren"
                                }   
                                if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing" && record._fields[3][3] === "outgoing" && record._fields[3][4] === "outgoing"){
                                    // console.log('GGP Push')
                                    greatGreatGreatGrandParent.push({
                                        name: record._fields[2].end.properties.name 
                                    })
                                    nodeType="greatGreatGreatGrandParent"
                                }
                            }
                        }

                        if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "incoming" && record._fields[2].length === 2) {
                            // console.log('Sibling, ', record._fields[3])
                            // console.log('Sibling, ', record._fields[2])
                            siblings.push({
                                name: record._fields[2].end.properties.name 
                            })
                            nodeType="siblings"
                        }
                        if (record._fields[2].length === 2) {
                        }
                    }
                })
            }
            
            const data =  {nodes:_.uniqBy(userNodes, "id"),
                    links: userLinks
                    }
            // console.log('Data : ', data)
            
            const member = {member: memberDetail, 
                children:_.uniqBy( children, "name"), grandChildren: _.uniqBy(grandChildren, "name"), 
                parents: _.uniqBy(parents, "name"), grandParent: _.uniqBy(grandParent, "name"),
                greatGrandParent: _.uniqBy(greatGrandParent, "name"), greatGrandChildren: _.uniqBy(greatGrandChildren, "name"),
                greatGreatGrandParent: _.uniqBy(greatGreatGrandParent, "name"), greatGreatGrandChildren: _.uniqBy(greatGreatGrandChildren, "name"),
                greatGreatGreatGrandParent: _.uniqBy(greatGreatGreatGrandParent, "name"), greatGreatGreatGrandChildren: _.uniqBy(greatGreatGreatGrandChildren, "name"),
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