"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3255:
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ 6765:
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
function handler({ query: { cityName  }  }, res) {
    console.log('Boom Boom : ', cityName);
    const xx = cityName.split('+');
    console.log('XX ', xx);
// const whereClause = "WHERE m.name contains "
// var membersList = []
// session
//     .run(`Optional MATCH (m:Member) ${whereClause} '${letters}' Return m`)
//     .then(function(result){
//         result.records.forEach(function(record){
//             membersList.push({
//                 id: record._fields[0].properties.name,
//                 name: record._fields[0].properties.name,
//                 imageURL: record._fields[0].properties.imageURL
//             })
//         })
//         const membersData = {members: _.uniqBy(membersList, "id")}
//         console.log('Members ', membersData)
//         if (membersList){
//             res.status(200)
//                 .json({membersData: membersData})
//         } else {
//            res.status(201)
//             .json({message: "Ioyooo"})
//         }
//     })
//     .catch(function(error){
//         console.log('Kolaveri : ', error)
//     })
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6765));
module.exports = __webpack_exports__;

})();