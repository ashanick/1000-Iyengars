import _ from "lodash";
var neo4j = require('neo4j-driver');
var driver = neo4j.driver(
    "neo4j+s://6c5afb5b.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0")
  );

var session = driver.session();
export default function handler({query: {searchPath}}, res) {
    console.log('Boom Boom Boom +++ V2 Boom : ', searchPath)
    const xx = searchPath.split('+')
    console.log('XX ', xx[0])
    var searchStatement = 'Optional MATCH (m:Member)';
    // XX[0] part name
    if (xx[0] !== '') {
      searchStatement = searchStatement + " WHERE m.name contains '" + xx[0]+"'"
    } 
    // xx 1 ancestry
    if (xx[1] !== '') {
      searchStatement = searchStatement + " WHERE m.name contains '" + xx[1]+"'"
    }
    searchStatement = searchStatement + ' Return m'
    console.log('Where Clause Name : ', searchStatement)
    var membersList  = []
    session
      .run(`${searchStatement}`)
      .then(function(result){
        console.log('In success')
        console.log('Length ' , result.records.length)
        if (result.records.length > 1) {
          result.records.forEach(function(record){
              console.log('Record : ', record._fields[0].properties.name)
              membersList.push({
                  id: record._fields[0].properties.name,
                  name: record._fields[0].properties.name,
                  imageURL: record._fields[0].properties.imageURL
              })
          })
        }
        const membersData = {members: _.uniqBy(membersList, "id")}
        // console.log('Members ', membersData)
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