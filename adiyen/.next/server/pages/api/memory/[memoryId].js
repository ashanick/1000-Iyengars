"use strict";
(() => {
var exports = {};
exports.id = 477;
exports.ids = [477];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3255:
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ 5482:
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
function handler({ query: { memoryId  }  }, res) {
    var searchString = "OPTIONAL MATCH (n:Memories {memid: '" + memoryId + "'}) RETURN n";
    // console.log(' 🤳🤳🤳 Memory Id Api 888888 =====: ', memoryId, 'String', searchString)
    var i = 1;
    var memoryDetail = [];
    // session.run(`OPTIONAL MATCH (m:Memories {id: '$memoryId}') RETURN m`)
    session.run(`OPTIONAL MATCH (n:Memories {memid: 'kuppuswamyWriting'}) RETURN n`).then(function(result) {
        // console.log('Success')
        if (result.records.length === 0) {
            res.status(201).json({
                message: "Sorry"
            });
        } else {
            result.records.forEach(function(record) {
                if (i === 1) {
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
                    });
                }
            });
        }
        // console.log('MemoryDetails : ', memoryDetail)
        res.status(200).json({
            data: memoryDetail
        });
    }).catch(function(error) {
    // console.log("Ha ha what da ya do??", error)
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5482));
module.exports = __webpack_exports__;

})();