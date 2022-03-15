import _ from "lodash";
var neo4j = require('neo4j-driver');
var driver = neo4j.driver(
    "neo4j+s://6c5afb5b.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0")
  );

var session = driver.session();
export default function handler({query: {letters}}, res) {
    console.log('Boom Boom : ', letters)
    const whereClause = "WHERE m.name Ends With "
    var membersList = []
    session
        .run(`Optional MATCH (m:Member) ${whereClause} '${letters}' Return m`)
        .then(function(result){
            result.records.forEach(function(record){
                membersList.push({
                    id: record._fields[0].properties.name,
                    name: record._fields[0].properties.name,
                    imageURL: record._fields[0].properties.imageURL
                })
            })
            const membersData = {members: _.uniqBy(membersList, "id")}
            console.log('Members ', membersData)
            if (membersList){
                res.status(200)
                    .json({membersData: membersData})
            } else {
               res.status(201)
                .json({message: "Ioyooo"})
            }
        })
        .catch(function(error){
            console.log('Kolaveri : ', error)
        })
}