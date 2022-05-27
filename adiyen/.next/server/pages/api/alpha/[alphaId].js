"use strict";
(() => {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3255:
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ 2844:
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
function handler({ query: { alphaId  }  }, res) {
    console.log('💥💥💥😁😁😁Aplha', alphaId);
    var whereClause = "WHERE m.name starts with 'A' OR m.name starts with 'B' OR m.name starts with 'C' or m.name starts with 'D'";
    if (alphaId === 'eh') {
        whereClause = "WHERE m.name starts with 'E' OR m.name starts with 'F' OR m.name starts with 'G' or m.name starts with 'H'";
    }
    if (alphaId === 'il') {
        whereClause = "WHERE m.name starts with 'I' OR m.name starts with 'J' OR m.name starts with 'K' or m.name starts with 'L'";
    }
    if (alphaId === 'mp') {
        whereClause = "WHERE m.name starts with 'M' OR m.name starts with 'N' OR m.name starts with 'O' or m.name starts with 'P'";
    }
    if (alphaId === 'qt') {
        whereClause = "WHERE m.name starts with 'Q' OR m.name starts with 'R' OR m.name starts with 'S' or m.name starts with 'T'";
    }
    if (alphaId === 'uz') {
        whereClause = "WHERE m.name starts with 'U' OR m.name starts with 'V' OR m.name starts with 'W' or m.name starts with 'X' OR m.name starts with 'Y' or m.name starts with 'Z'";
    }
    var membersList = [];
    session.run(`Optional MATCH (m:Member) ${whereClause}  Return m`).then(function(result) {
        result.records.forEach(function(record) {
            console.log('Fields 0', record._fields[0]);
            membersList.push({
                id: record._fields[0].properties.name,
                name: record._fields[0].properties.name,
                imageURL: record._fields[0].properties.imageURL
            });
        });
        const membersData = {
            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, "id")
        };
        if (membersList) {
            res.status(200).json({
                membersData: membersData
            });
        } else {
            res.status(201).json({
                message: "Ioyooo"
            });
        }
    }).catch(function(error) {
        console.log('Hey error : ', error);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2844));
module.exports = __webpack_exports__;

})();