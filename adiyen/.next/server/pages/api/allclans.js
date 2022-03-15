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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler(req, res) {\n    console.log('In Clans');\n    var membersList = [];\n    session.run(\"MATCH (n:Member)-[k:PARENT_OF*4]->(f:Member) RETURN n order by n.name\").then(function(result) {\n        result.records.forEach(function(record) {\n            console.log('Record : ', record._fields[0]);\n            membersList.push({\n                id: record._fields[0].properties.name,\n                name: record._fields[0].properties.name,\n                imageURL: record._fields[0].properties.imageURL\n            });\n        });\n        const membersData = {\n            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, \"id\")\n        };\n        res.json({\n            membersData: membersData\n        });\n    }).catch(function(error) {\n        console.log('Opps sorry budda mil gaya :', error);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsY2xhbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNCO0FBRXRCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjO0FBQ2xDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU0sQ0FDckIsQ0FBdUMsd0NBQ3ZDRixLQUFLLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQU8sUUFBRSxDQUE2QztBQUczRSxHQUFHLENBQUNDLE9BQU8sR0FBR0gsTUFBTSxDQUFDRyxPQUFPO1NBRW5CQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVU7SUFDdEIsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCTixPQUFPLENBQ0ZPLEdBQUcsQ0FBQyxDQUF1RSx3RUFDM0VDLElBQUksQ0FBQyxRQUFRLENBQUNDLE1BQU0sRUFBQyxDQUFDO1FBQ25CQSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLENBQUM7WUFDcENSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVcsWUFBRU8sTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQztZQUN6Q1AsV0FBVyxDQUFDUSxJQUFJLENBQUMsQ0FBQztnQkFDZEMsRUFBRSxFQUFFSCxNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVHLFVBQVUsQ0FBQ0MsSUFBSTtnQkFDckNBLElBQUksRUFBRUwsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFRyxVQUFVLENBQUNDLElBQUk7Z0JBQ3ZDQyxRQUFRLEVBQUVOLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUcsVUFBVSxDQUFDRSxRQUFRO1lBQ25ELENBQUM7UUFDTCxDQUFDO1FBQ0QsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFFMUIsb0RBQVEsQ0FBQ1ksV0FBVyxFQUFFLENBQUk7UUFBQyxDQUFDO1FBQzFESCxHQUFHLENBQUNtQixJQUFJLENBQUMsQ0FBQ0g7WUFBQUEsV0FBVyxFQUFFQSxXQUFXO1FBQUEsQ0FBQztJQUN2QyxDQUFDLEVBQ0FJLEtBQUssQ0FBQyxRQUFRLENBQUNDLEtBQUssRUFBQyxDQUFDO1FBQ25CcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkIsOEJBQUVtQixLQUFLO0lBQ3BELENBQUM7QUFDVCxDQUFDO0FBRUQsaUVBQWV2QixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRpeWVuLy4vcGFnZXMvYXBpL2FsbGNsYW5zLmpzPzdlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxudmFyIG5lbzRqID0gcmVxdWlyZSgnbmVvNGotZHJpdmVyJyk7XHJcbnZhciBkcml2ZXIgPSBuZW80ai5kcml2ZXIoXHJcbiAgICBcIm5lbzRqK3M6Ly82YzVhZmI1Yi5kYXRhYmFzZXMubmVvNGouaW9cIixcclxuICAgIG5lbzRqLmF1dGguYmFzaWMoXCJuZW80alwiLCBcImtYUXZVOGFlTmRyZUQ2TGVFZFNQdEEyOVRsd0h6Mkxndk4yT29NMmJybDBcIilcclxuICApO1xyXG5cclxudmFyIHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc29sZS5sb2coJ0luIENsYW5zJylcclxuICAgIHZhciBtZW1iZXJzTGlzdCA9IFtdXHJcbiAgICBzZXNzaW9uIFxyXG4gICAgICAgIC5ydW4oXCJNQVRDSCAobjpNZW1iZXIpLVtrOlBBUkVOVF9PRio0XS0+KGY6TWVtYmVyKSBSRVRVUk4gbiBvcmRlciBieSBuLm5hbWVcIilcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICByZXN1bHQucmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjb3JkIDogJywgcmVjb3JkLl9maWVsZHNbMF0pXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVSTDogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5pbWFnZVVSTFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVyc0RhdGEgPSB7bWVtYmVyczogXy51bmlxQnkobWVtYmVyc0xpc3QsIFwiaWRcIil9XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW1iZXJzRGF0YTogbWVtYmVyc0RhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09wcHMgc29ycnkgYnVkZGEgbWlsIGdheWEgOicsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiXyIsIm5lbzRqIiwicmVxdWlyZSIsImRyaXZlciIsImF1dGgiLCJiYXNpYyIsInNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1lbWJlcnNMaXN0IiwicnVuIiwidGhlbiIsInJlc3VsdCIsInJlY29yZHMiLCJmb3JFYWNoIiwicmVjb3JkIiwiX2ZpZWxkcyIsInB1c2giLCJpZCIsInByb3BlcnRpZXMiLCJuYW1lIiwiaW1hZ2VVUkwiLCJtZW1iZXJzRGF0YSIsIm1lbWJlcnMiLCJ1bmlxQnkiLCJqc29uIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/allclans.js\n");

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