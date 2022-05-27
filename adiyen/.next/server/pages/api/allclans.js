"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3255:
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ 1133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var neo4j = __webpack_require__(3255);
var driver = neo4j.driver("neo4j+s://6c5afb5b.databases.neo4j.io", neo4j.auth.basic("neo4j", "kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0"));
var session = driver.session();
function handler(req, res) {
    // console.log('In Clans')
    var membersList = [];
    session.run("MATCH (n:Member)-[k:PARENT_OF*4]->(f:Member) RETURN n order by n.name").then(function(result) {
        result.records.forEach(function(record) {
            // console.log('Record : ', record._fields[0])
            membersList.push({
                id: record._fields[0].properties.name,
                name: record._fields[0].properties.name,
                imageURL: record._fields[0].properties.imageURL
            });
        });
        const membersData = {
            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, "id")
        };
        res.json({
            membersData: membersData
        });
    }).catch(function(error) {
        res.status(201).json({
            message: 'Error'
        });
    // console.log('Opps sorry budda mil gaya :', error)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1133));
module.exports = __webpack_exports__;

})();