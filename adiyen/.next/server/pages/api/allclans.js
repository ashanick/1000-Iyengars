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
exports.id = "pages/api/allclans";
exports.ids = ["pages/api/allclans"];
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

/***/ "(api)/./pages/api/allclans.js":
/*!*******************************!*\
  !*** ./pages/api/allclans.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler(req, res) {\n    console.log('In Clans');\n    var membersList = [];\n    session.run(\"MATCH (n:Member)-[k:PARENT_OF*4]->(f:Member) RETURN n order by n.name\").then(function(result) {\n        result.records.forEach(function(record) {\n            // console.log('Record : ', record._fields[0])\n            membersList.push({\n                id: record._fields[0].properties.name,\n                name: record._fields[0].properties.name,\n                imageURL: record._fields[0].properties.imageURL\n            });\n        });\n        const membersData = {\n            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, \"id\")\n        };\n        res.json({\n            membersData: membersData\n        });\n    }).catch(function(error) {\n        console.log('Opps sorry budda mil gaya :', error);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsY2xhbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNCO0FBRXRCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjO0FBQ2xDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU0sQ0FDckIsQ0FBdUMsd0NBQ3ZDRixLQUFLLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQU8sUUFBRSxDQUE2QztBQUczRSxHQUFHLENBQUNDLE9BQU8sR0FBR0gsTUFBTSxDQUFDRyxPQUFPO1NBRW5CQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVU7SUFDdEIsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCTixPQUFPLENBQ0ZPLEdBQUcsQ0FBQyxDQUF1RSx3RUFDM0VDLElBQUksQ0FBQyxRQUFRLENBQUNDLE1BQU0sRUFBQyxDQUFDO1FBQ25CQSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLENBQUM7WUFDcEMsRUFBOEM7WUFDOUNOLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7Z0JBQ2RDLEVBQUUsRUFBRUYsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNDLElBQUk7Z0JBQ3JDQSxJQUFJLEVBQUVMLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDQyxJQUFJO2dCQUN2Q0MsUUFBUSxFQUFFTixNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ0UsUUFBUTtZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQUNELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQUNDO1lBQUFBLE9BQU8sRUFBRTFCLG9EQUFRLENBQUNZLFdBQVcsRUFBRSxDQUFJO1FBQUMsQ0FBQztRQUMxREgsR0FBRyxDQUFDbUIsSUFBSSxDQUFDLENBQUNIO1lBQUFBLFdBQVcsRUFBRUEsV0FBVztRQUFBLENBQUM7SUFDdkMsQ0FBQyxFQUNBSSxLQUFLLENBQUMsUUFBUSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztRQUNuQnBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZCLDhCQUFFbUIsS0FBSztJQUNwRCxDQUFDO0FBQ1QsQ0FBQztBQUVELGlFQUFldkIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkaXllbi8uL3BhZ2VzL2FwaS9hbGxjbGFucy5qcz83ZTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbnZhciBuZW80aiA9IHJlcXVpcmUoJ25lbzRqLWRyaXZlcicpO1xyXG52YXIgZHJpdmVyID0gbmVvNGouZHJpdmVyKFxyXG4gICAgXCJuZW80aitzOi8vNmM1YWZiNWIuZGF0YWJhc2VzLm5lbzRqLmlvXCIsXHJcbiAgICBuZW80ai5hdXRoLmJhc2ljKFwibmVvNGpcIiwgXCJrWFF2VThhZU5kcmVENkxlRWRTUHRBMjlUbHdIejJMZ3ZOMk9vTTJicmwwXCIpXHJcbiAgKTtcclxuXHJcbnZhciBzZXNzaW9uID0gZHJpdmVyLnNlc3Npb24oKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbiBDbGFucycpXHJcbiAgICB2YXIgbWVtYmVyc0xpc3QgPSBbXVxyXG4gICAgc2Vzc2lvbiBcclxuICAgICAgICAucnVuKFwiTUFUQ0ggKG46TWVtYmVyKS1bazpQQVJFTlRfT0YqNF0tPihmOk1lbWJlcikgUkVUVVJOIG4gb3JkZXIgYnkgbi5uYW1lXCIpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgICAgcmVzdWx0LnJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWNvcmQpe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1JlY29yZCA6ICcsIHJlY29yZC5fZmllbGRzWzBdKVxyXG4gICAgICAgICAgICAgICAgbWVtYmVyc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVUkw6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMuaW1hZ2VVUkxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlcnNEYXRhID0ge21lbWJlcnM6IF8udW5pcUJ5KG1lbWJlcnNMaXN0LCBcImlkXCIpfVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVtYmVyc0RhdGE6IG1lbWJlcnNEYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcHBzIHNvcnJ5IGJ1ZGRhIG1pbCBnYXlhIDonLCBlcnJvcilcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIl8iLCJuZW80aiIsInJlcXVpcmUiLCJkcml2ZXIiLCJhdXRoIiwiYmFzaWMiLCJzZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZW1iZXJzTGlzdCIsInJ1biIsInRoZW4iLCJyZXN1bHQiLCJyZWNvcmRzIiwiZm9yRWFjaCIsInJlY29yZCIsInB1c2giLCJpZCIsIl9maWVsZHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImltYWdlVVJMIiwibWVtYmVyc0RhdGEiLCJtZW1iZXJzIiwidW5pcUJ5IiwianNvbiIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/allclans.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allclans.js"));
module.exports = __webpack_exports__;

})();