"use strict";
(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3255:
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ 8838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var neo4j = __webpack_require__(3255);
var driver = neo4j.driver("neo4j+s://6c5afb5b.databases.neo4j.io", neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0"));
var session = driver.session();
function handler({ query: { userName  }  }, res) {
    // console.log(' 🤳🤳🤳User Name Api 6666 =====: ', userName)
    var userNodes = [];
    var userLinks = [];
    var memberDetail = [];
    var photoList = [];
    var children = [];
    var grandChildren = [];
    var greatGrandChildren = [];
    var greatGreatGrandChildren = [];
    var greatGreatGreatGrandChildren = [];
    var parents = [];
    var grandParent = [];
    var greatGrandParent = [];
    var greatGreatGrandParent = [];
    var greatGreatGreatGrandParent = [];
    var siblings = [];
    var memoriesList = [];
    var parentArray = [
        "Parent1",
        "Parent2",
        "Parent3",
        "Parent4",
        "Parent5",
        "Parent6",
        "Parent7",
        "Parent8"
    ];
    var writeTarget = "";
    var prevLength = 0;
    var tempIndex = 0;
    var firstNode = true;
    var people = false;
    var nodeType = "user";
    session.run(`OPTIONAL MATCH pathmem = (b:Member {name: '${userName}'}) - [r:MEMORY_OWN] ->(o:Memories) 
        OPTIONAL MATCH pathphoto = (a:Member {name: '${userName}'}) - [w:PHOTO_OWN] ->(q:PhotoGallery)
        OPTIONAL MATCH (m:Member {name: '${userName}'}) 
        OPTIONAL MATCH (j:Details {name: '${userName}'})
        OPTIONAL MATCH pathspouse =(ps:Member {name: '${userName}'})<-[pr:SPOUSE_OF]-(qs:Member)
        OPTIONAL MATCH path=(n:Member {name: '${userName}'})-[:PARENT_OF*1..5]-(p) 
        WITH pathmem, pathphoto, j, q, r, w, m, n, path, pr, ps, qs, range(0,length(path)-1) as index  
        Return m, n, path, [i in index | CASE WHEN nodes(path)[i] = startNode(RELATIONSHIPS(path)[i]) THEN 'incoming' ELSE 'outgoing' END ] as directions, pathmem, r, pathphoto, w, q, j, pr, qs`).then(function(result) {
        // console.log('Got it Records')
        if (result.records.length === 0) {
            res.status(201).json({
                message: "Opps Not Found"
            });
        } else {
            result.records.forEach(function(record) {
                // console.log('Memory field 1 & 4: ', record._fields[1])
                if (record._fields[4]) {
                    if (record._fields[4] !== null && record._fields[5].type === "MEMORY_OWN") {
                        // console.log('Field 4 Relations: ', record._fields[4])
                        memoriesList.push({
                            id: record._fields[4].end.properties.memid,
                            title: record._fields[4].end.properties.title,
                            imageURL: record._fields[4].end.properties.imageURL,
                            excerpt: record._fields[4].end.properties.excerpt
                        });
                    }
                }
                if (record._fields[6]) {
                    if (record._fields[6] !== null && record._fields[7].type === "PHOTO_OWN") {
                        // console.log('Field 7 Photo ', record._fields[7], 'end', record._fields[8].properties)
                        photoList.push({
                            imageURL: record._fields[8].properties.imageURL,
                            pdate: record._fields[8].properties.pdate,
                            id: record._fields[8].properties.id,
                            title: record._fields[8].properties.title
                        });
                    }
                }
                if (firstNode) {
                    firstNode = false;
                    prevLength = 0;
                    var prof = "";
                    var education = "";
                    var school = "";
                    var earlydescription = "";
                    var hobby = "";
                    var spouse = "";
                    var adultdescription = "";
                    var notes = "";
                    var dob = '';
                    if (record._fields[9]) {
                        // console.log('Detail Record : ', record._fields[9])
                        prof = record._fields[9].properties.profession;
                        education = record._fields[9].properties.education;
                        school = record._fields[9].properties.school;
                        earlydescription = record._fields[9].properties.earlydescription;
                        hobby = record._fields[9].properties.hobby;
                        notes = record._fields[9].properties.notes;
                        adultdescription = record._fields[9].properties.adultdescription;
                        if (record._fields[9].properties.dob) {
                            // console.log('DOB Date Field: ', record._fields[9].properties.dob )
                            dob = record._fields[9].properties.dob;
                        }
                    // console.log('String Date : ', dob)
                    // console.log ('Profession : ', prof) 
                    }
                    if (record._fields[10]) {
                        // console.log('Spouse : ', record._fields[10], 'Spise: ', record._fields[11])
                        spouse = record._fields[11].properties.name;
                    }
                    memberDetail.push({
                        id: record._fields[1].properties.name,
                        name: record._fields[1].properties.name,
                        imageURL: record._fields[1].properties.imageURL,
                        profession: prof,
                        education: education,
                        school: school,
                        earlydescription: earlydescription,
                        hobby,
                        spouse,
                        notes,
                        adultdescription,
                        dob
                    });
                    userNodes.push({
                        id: record._fields[1].properties.name,
                        name: record._fields[1].properties.name,
                        // __typename: record._fields[1].labels
                        __typename: nodeType
                    });
                    parentArray[0] = record._fields[1].properties.name;
                }
                if (record._fields[2]) {
                    tempIndex = record._fields[2].length - 1;
                    if (prevLength < record._fields[2].length) {
                        writeTarget = record._fields[2].end.properties.name;
                        prevLength = record._fields[2].length;
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
                            });
                            userLinks.push({
                                source: parentArray[tempIndex],
                                target: writeTarget
                            });
                        }
                        prevLength = 0;
                        parentArray[record._fields[2].length] = writeTarget;
                    }
                    if (prevLength > record._fields[2].length) {
                    // console.log('How did this happen')
                    }
                    people = false;
                    if (record._fields[3].length === 1) {
                        people = true;
                    } else {
                        if (record._fields[3][0] === record._fields[3][1]) {
                            people = true;
                        }
                    }
                    if (people) {
                        if (record._fields[2].length === 1) {
                            if (record._fields[3][0] === "incoming") {
                                children.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "children";
                            }
                            if (record._fields[3][0] === "outgoing") {
                                // console.log('Parents : ', record._fields[2].end)
                                parents.push({
                                    name: record._fields[2].end.properties.name,
                                    imageURL: record._fields[2].end.properties.imageURL
                                });
                                nodeType = "parent";
                            }
                        }
                        if (record._fields[2].length === 2) {
                            if (record._fields[3][0] === "incoming") {
                                grandChildren.push({
                                    name: record._fields[2].end.properties.name,
                                    imageURL: record._fields[2].end.properties.imageURL
                                });
                                nodeType = "grandChildren";
                            }
                            if (record._fields[3][0] === "outgoing") {
                                grandParent.push({
                                    name: record._fields[2].end.properties.name,
                                    imageURL: record._fields[2].end.properties.imageURL
                                });
                                nodeType = "grandParent";
                            }
                        }
                        if (record._fields[2].length === 3) {
                            // console.log('Field length = 3 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                            if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming") {
                                greatGrandChildren.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGrandChildren";
                            }
                            if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing") {
                                greatGrandParent.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGrandParent";
                            }
                        }
                        if (record._fields[2].length === 4) {
                            // console.log('Field length = 4 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                            if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming" && record._fields[3][3] === "incoming") {
                                // console.log('GGC')
                                greatGreatGrandChildren.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGreatGrandChildren";
                            }
                            if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing" && record._fields[3][3] === "outgoing") {
                                // console.log('GGP Push')
                                greatGreatGrandParent.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGreatGrandParent";
                            }
                        }
                        if (record._fields[2].length === 5) {
                            // console.log('Field length = 4 ', record._fields[1], record._fields[2].end.properties.name, record._fields[3])
                            if (record._fields[3][0] === "incoming" && record._fields[3][1] === "incoming" && record._fields[3][2] === "incoming" && record._fields[3][3] === "incoming" && record._fields[3][4] === "incoming") {
                                // console.log('GGC')
                                greatGreatGreatGrandChildren.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGreatGreatGrandChildren";
                            }
                            if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "outgoing" && record._fields[3][2] === "outgoing" && record._fields[3][3] === "outgoing" && record._fields[3][4] === "outgoing") {
                                // console.log('GGP Push')
                                greatGreatGreatGrandParent.push({
                                    name: record._fields[2].end.properties.name
                                });
                                nodeType = "greatGreatGreatGrandParent";
                            }
                        }
                    }
                    if (record._fields[3][0] === "outgoing" && record._fields[3][1] === "incoming" && record._fields[2].length === 2) {
                        // console.log('Sibling, ', record._fields[3])
                        // console.log('Sibling, ', record._fields[2])
                        siblings.push({
                            name: record._fields[2].end.properties.name
                        });
                        nodeType = "siblings";
                    }
                    if (record._fields[2].length === 2) {}
                }
            });
        }
        const data = {
            nodes: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(userNodes, "id"),
            links: userLinks
        };
        // console.log('Details : ', memberDetail)
        const member = {
            member: memberDetail,
            children: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(children, "name"),
            grandChildren: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(grandChildren, "name"),
            parents: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(parents, "name"),
            grandParent: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(grandParent, "name"),
            greatGrandParent: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGrandParent, "name"),
            greatGrandChildren: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGrandChildren, "name"),
            greatGreatGrandParent: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGreatGrandParent, "name"),
            greatGreatGrandChildren: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGreatGrandChildren, "name"),
            greatGreatGreatGrandParent: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGreatGreatGrandParent, "name"),
            greatGreatGreatGrandChildren: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(greatGreatGreatGrandChildren, "name"),
            siblings: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(siblings, "name")
        };
        const memories = {
            memories: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(memoriesList, "title")
        };
        const photoGallery = {
            photoList: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(photoList, "title")
        };
        // console.log('Children ', children, grandChildren, 'GrandChildren : ')
        // console.log('Parent : ', parents, 'Grandparent ', grandParent)
        // console.log('Siblings ', siblings)
        // console.log('Memories : ', memories)
        // console.log('En Fin With Individual User: 🙌🙌🙌🙌💥💥💥💥💥💥😎😎😎😎😎 ')
        if (firstNode) {
            res.status(201).json({
                message: "Opps Not Found"
            });
        } else {
            res.json({
                data: data,
                member: member,
                memories: memories,
                photoGallery: photoGallery
            });
        }
    }).catch(function(error) {
        // console.log("Hey airaaa", error);
        res.status(201).json('Error in finding Data');
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8838));
module.exports = __webpack_exports__;

})();