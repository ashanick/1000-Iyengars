"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/alpha/[alphaId]";
exports.ids = ["pages/api/alpha/[alphaId]"];
exports.modules = {

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "neo4j-driver":
/*!*******************************!*\
  !*** external "neo4j-driver" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ "(api)/./pages/api/alpha/[alphaId].js":
/*!**************************************!*\
  !*** ./pages/api/alpha/[alphaId].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler({ query: { alphaId  }  }, res) {\n    console.log('💥💥💥😁😁😁Aplha', alphaId);\n    var whereClause = \"WHERE m.name starts with 'A' OR m.name starts with 'B' OR m.name starts with 'C' or m.name starts with 'D'\";\n    if (alphaId === 'eh') {\n        whereClause = \"WHERE m.name starts with 'E' OR m.name starts with 'F' OR m.name starts with 'G' or m.name starts with 'H'\";\n    }\n    if (alphaId === 'il') {\n        whereClause = \"WHERE m.name starts with 'I' OR m.name starts with 'J' OR m.name starts with 'K' or m.name starts with 'L'\";\n    }\n    if (alphaId === 'mp') {\n        whereClause = \"WHERE m.name starts with 'M' OR m.name starts with 'N' OR m.name starts with 'O' or m.name starts with 'P'\";\n    }\n    if (alphaId === 'qt') {\n        whereClause = \"WHERE m.name starts with 'Q' OR m.name starts with 'R' OR m.name starts with 'S' or m.name starts with 'T'\";\n    }\n    if (alphaId === 'uz') {\n        whereClause = \"WHERE m.name starts with 'U' OR m.name starts with 'V' OR m.name starts with 'W' or m.name starts with 'X' OR m.name starts with 'Y' or m.name starts with 'Z'\";\n    }\n    var membersList = [];\n    session.run(`Optional MATCH (m:Member) ${whereClause}  Return m`).then(function(result) {\n        result.records.forEach(function(record) {\n            console.log('Fields 0', record._fields[0]);\n            membersList.push({\n                id: record._fields[0].properties.name,\n                name: record._fields[0].properties.name,\n                imageURL: record._fields[0].properties.imageURL\n            });\n        });\n        const membersData = {\n            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, \"id\")\n        };\n        if (membersList) {\n            res.status(200).json({\n                membersData: membersData\n            });\n        } else {\n            res.status(201).json({\n                message: \"Ioyooo\"\n            });\n        }\n    }).catch(function(error) {\n        console.log('Hey error : ', error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL2FkaXllbi8uL3BhZ2VzL2FwaS9hbHBoYS9bYWxwaGFJZF0uanM/ZjhjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbnZhciBuZW80aiA9IHJlcXVpcmUoJ25lbzRqLWRyaXZlcicpO1xyXG52YXIgZHJpdmVyID0gbmVvNGouZHJpdmVyKFxyXG4gICAgXCJuZW80aitzOi8vNmM1YWZiNWIuZGF0YWJhc2VzLm5lbzRqLmlvXCIsXHJcbiAgICBuZW80ai5hdXRoLmJhc2ljKFwibmVvNGpcIiwgXCJrWFF2VThhZU5kcmVENkxlRWRTUHRBMjlUbHdIejJMZ3ZOMk9vTTJicmwwXCIpXHJcbiAgKTtcclxuXHJcbnZhciBzZXNzaW9uID0gZHJpdmVyLnNlc3Npb24oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoe3F1ZXJ5OiB7YWxwaGFJZH19LCByZXMpe1xyXG4gICAgY29uc29sZS5sb2coJ/CfkqXwn5Kl8J+SpfCfmIHwn5iB8J+YgUFwbGhhJywgYWxwaGFJZClcclxuICAgIHZhciB3aGVyZUNsYXVzZSA9IFwiV0hFUkUgbS5uYW1lIHN0YXJ0cyB3aXRoICdBJyBPUiBtLm5hbWUgc3RhcnRzIHdpdGggJ0InIE9SIG0ubmFtZSBzdGFydHMgd2l0aCAnQycgb3IgbS5uYW1lIHN0YXJ0cyB3aXRoICdEJ1wiXHJcbiAgICBpZiAoYWxwaGFJZCA9PT0gJ2VoJykge1xyXG4gICAgICAgIHdoZXJlQ2xhdXNlID0gXCJXSEVSRSBtLm5hbWUgc3RhcnRzIHdpdGggJ0UnIE9SIG0ubmFtZSBzdGFydHMgd2l0aCAnRicgT1IgbS5uYW1lIHN0YXJ0cyB3aXRoICdHJyBvciBtLm5hbWUgc3RhcnRzIHdpdGggJ0gnXCJcclxuICAgIH1cclxuICAgIGlmIChhbHBoYUlkID09PSAnaWwnKSB7XHJcbiAgICAgICAgd2hlcmVDbGF1c2UgPSBcIldIRVJFIG0ubmFtZSBzdGFydHMgd2l0aCAnSScgT1IgbS5uYW1lIHN0YXJ0cyB3aXRoICdKJyBPUiBtLm5hbWUgc3RhcnRzIHdpdGggJ0snIG9yIG0ubmFtZSBzdGFydHMgd2l0aCAnTCdcIlxyXG4gICAgfVxyXG4gICAgaWYgKGFscGhhSWQgPT09ICdtcCcpIHtcclxuICAgICAgICB3aGVyZUNsYXVzZSA9IFwiV0hFUkUgbS5uYW1lIHN0YXJ0cyB3aXRoICdNJyBPUiBtLm5hbWUgc3RhcnRzIHdpdGggJ04nIE9SIG0ubmFtZSBzdGFydHMgd2l0aCAnTycgb3IgbS5uYW1lIHN0YXJ0cyB3aXRoICdQJ1wiXHJcbiAgICB9XHJcbiAgICBpZiAoYWxwaGFJZCA9PT0gJ3F0Jykge1xyXG4gICAgICAgIHdoZXJlQ2xhdXNlID0gXCJXSEVSRSBtLm5hbWUgc3RhcnRzIHdpdGggJ1EnIE9SIG0ubmFtZSBzdGFydHMgd2l0aCAnUicgT1IgbS5uYW1lIHN0YXJ0cyB3aXRoICdTJyBvciBtLm5hbWUgc3RhcnRzIHdpdGggJ1QnXCJcclxuICAgIH1cclxuICAgIGlmIChhbHBoYUlkID09PSAndXonKSB7XHJcbiAgICAgICAgd2hlcmVDbGF1c2UgPSBcIldIRVJFIG0ubmFtZSBzdGFydHMgd2l0aCAnVScgT1IgbS5uYW1lIHN0YXJ0cyB3aXRoICdWJyBPUiBtLm5hbWUgc3RhcnRzIHdpdGggJ1cnIG9yIG0ubmFtZSBzdGFydHMgd2l0aCAnWCcgT1IgbS5uYW1lIHN0YXJ0cyB3aXRoICdZJyBvciBtLm5hbWUgc3RhcnRzIHdpdGggJ1onXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVtYmVyc0xpc3QgPSBbXVxyXG4gICAgc2Vzc2lvblxyXG4gICAgICAgIC5ydW4oYE9wdGlvbmFsIE1BVENIIChtOk1lbWJlcikgJHt3aGVyZUNsYXVzZX0gIFJldHVybiBtYClcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICByZXN1bHQucmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmllbGRzIDAnLCByZWNvcmQuX2ZpZWxkc1swXSlcclxuICAgICAgICAgICAgICAgIG1lbWJlcnNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVVJMOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLmltYWdlVVJMXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIGNvbnN0IG1lbWJlcnNEYXRhID0ge21lbWJlcnM6IF8udW5pcUJ5KG1lbWJlcnNMaXN0LCBcImlkXCIpfVxyXG4gICAgICAgICAgIGlmIChtZW1iZXJzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcclxuICAgICAgICAgICAgICAgICAgICAuanNvbih7bWVtYmVyc0RhdGE6IG1lbWJlcnNEYXRhfSlcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSlcclxuICAgICAgICAgICAgICAgIC5qc29uKHttZXNzYWdlOiBcIklveW9vb1wifSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGV5IGVycm9yIDogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxufSJdLCJuYW1lcyI6WyJfIiwibmVvNGoiLCJyZXF1aXJlIiwiZHJpdmVyIiwiYXV0aCIsImJhc2ljIiwic2Vzc2lvbiIsImhhbmRsZXIiLCJxdWVyeSIsImFscGhhSWQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwid2hlcmVDbGF1c2UiLCJtZW1iZXJzTGlzdCIsInJ1biIsInRoZW4iLCJyZXN1bHQiLCJyZWNvcmRzIiwiZm9yRWFjaCIsInJlY29yZCIsIl9maWVsZHMiLCJwdXNoIiwiaWQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImltYWdlVVJMIiwibWVtYmVyc0RhdGEiLCJtZW1iZXJzIiwidW5pcUJ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/alpha/[alphaId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/alpha/[alphaId].js"));
module.exports = __webpack_exports__;

})();