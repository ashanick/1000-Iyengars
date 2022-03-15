import _ from "lodash";
var neo4j = require('neo4j-driver');
var driver = neo4j.driver(
    "neo4j+s://6c5afb5b.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0")
  );

var session = driver.session();

export default function handler({query: {alphaId}}, res){
    console.log('💥💥💥😁😁😁Aplha', alphaId)
    var whereClause = "WHERE m.name starts with 'A' OR m.name starts with 'B' OR m.name starts with 'C' or m.name starts with 'D'"
    if (alphaId === 'eh') {
        whereClause = "WHERE m.name starts with 'E' OR m.name starts with 'F' OR m.name starts with 'G' or m.name starts with 'H'"
    }
    if (alphaId === 'il') {
        whereClause = "WHERE m.name starts with 'I' OR m.name starts with 'J' OR m.name starts with 'K' or m.name starts with 'L'"
    }
    if (alphaId === 'mp') {
        whereClause = "WHERE m.name starts with 'M' OR m.name starts with 'N' OR m.name starts with 'O' or m.name starts with 'P'"
    }
    if (alphaId === 'qt') {
        whereClause = "WHERE m.name starts with 'Q' OR m.name starts with 'R' OR m.name starts with 'S' or m.name starts with 'T'"
    }
    if (alphaId === 'uz') {
        whereClause = "WHERE m.name starts with 'U' OR m.name starts with 'V' OR m.name starts with 'W' or m.name starts with 'X' OR m.name starts with 'Y' or m.name starts with 'Z'"
    }

    var membersList = []
    session
        .run(`Optional MATCH (m:Member) ${whereClause}  Return m`)
        .then(function(result){
            result.records.forEach(function(record){
                console.log('Fields 0', record._fields[0])
                membersList.push({
                    id: record._fields[0].properties.name,
                    name: record._fields[0].properties.name,
                    imageURL: record._fields[0].properties.imageURL
                })
            })
           const membersData = {members: _.uniqBy(membersList, "id")}
           if (membersList){
                res.status(200)
                    .json({membersData: membersData})
           } else {
               res.status(201)
                .json({message: "Ioyooo"})
           }
        })
        .catch(function(error){
            console.log('Hey error : ', error)
        })
}