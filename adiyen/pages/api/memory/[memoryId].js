import _ from "lodash";
var neo4j = require('neo4j-driver');
var driver = neo4j.driver(
    "neo4j+s://6c5afb5b.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0")
  );

var session = driver.session();

export default function handler({query: {memoryId}}, res) {
    var searchString = "OPTIONAL MATCH (n:Memories {memid: '" + memoryId + "'}) RETURN n"
    // console.log(' 🤳🤳🤳 Memory Id Api 888888 =====: ', memoryId, 'String', searchString)
    var i = 1;
    var memoryDetail = []
    // session.run(`OPTIONAL MATCH (m:Memories {id: '$memoryId}') RETURN m`)
    session
    .run(`OPTIONAL MATCH (n:Memories {memid: 'kuppuswamyWriting'}) RETURN n`)
    .then(function(result){
        // console.log('Success')
        if (result.records.length === 0) {
            res.status(201).json({message: "Sorry"})
        } else {
            result.records.forEach(function(record){
                if (i === 1){
                    i++;
                    // console.log('Record :', record._fields[0])
                    memoryDetail.push({
                        id: record._fields[0].properties.memid,
                        name: record._fields[0].properties.name,
                        imageURL: record._fields[0].properties.imageURL,
                        heading1: record._fields[0].properties.heading1,
                        heading2: record._fields[0].properties.heading2,
                        heading3: record._fields[0].properties.heading3,
                        description1: record._fields[0].properties.description1,
                        description2: record._fields[0].properties.description2,
                        description3: record._fields[0].properties.description3,
                        title: record._fields[0].properties.title,
                        bannerimageURL: record._fields[0].properties.bannerimageURL,
                        date: record._fields[0].properties.date
                    })
                }
            })
        }
        // console.log('MemoryDetails : ', memoryDetail)
        res.status(200)
            .json({data: memoryDetail})
    })
    .catch(function(error){
        // console.log("Ha ha what da ya do??", error)
    })
}