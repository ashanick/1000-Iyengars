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
exports.id = "pages/api/contains/[letters]";
exports.ids = ["pages/api/contains/[letters]"];
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

/***/ "(api)/./pages/api/contains/[letters].js":
/*!*****************************************!*\
  !*** ./pages/api/contains/[letters].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler({ query: { letters  }  }, res) {\n    console.log('Boom Boom : ', letters);\n    const whereClause = \"WHERE m.name contains \";\n    var membersList = [];\n    session.run(`Optional MATCH (m:Member) ${whereClause} '${letters}' Return m`).then(function(result) {\n        result.records.forEach(function(record) {\n            membersList.push({\n                id: record._fields[0].properties.name,\n                name: record._fields[0].properties.name,\n                imageURL: record._fields[0].properties.imageURL\n            });\n        });\n        const membersData = {\n            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, \"id\")\n        };\n        console.log('Members ', membersData);\n        if (membersList) {\n            res.status(200).json({\n                membersData: membersData\n            });\n        } else {\n            res.status(201).json({\n                message: \"Ioyooo\"\n            });\n        }\n    }).catch(function(error) {\n        console.log('Kolaveri : ', error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFpbnMvW2xldHRlcnNdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQjtBQUN0QixHQUFHLENBQUNDLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBYztBQUNsQyxHQUFHLENBQUNDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRSxNQUFNLENBQ3JCLENBQXVDLHdDQUN2Q0YsS0FBSyxDQUFDRyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFPLFFBQUUsQ0FBNkM7QUFHM0UsR0FBRyxDQUFDQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0csT0FBTztBQUNiLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLENBQUFBLEtBQUssRUFBRSxDQUFDQyxDQUFBQSxPQUFPLEdBQUMsR0FBQyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN0REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxlQUFFSCxPQUFPO0lBQ25DLEtBQUssQ0FBQ0ksV0FBVyxHQUFHLENBQXdCO0lBQzVDLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQlIsT0FBTyxDQUNGUyxHQUFHLEVBQUUsMEJBQTBCLEVBQUVGLFdBQVcsQ0FBQyxFQUFFLEVBQUVKLE9BQU8sQ0FBQyxVQUFVLEdBQ25FTyxJQUFJLENBQUMsUUFBUSxDQUFDQyxNQUFNLEVBQUMsQ0FBQztRQUNuQkEsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUNDLE1BQU0sRUFBQyxDQUFDO1lBQ3BDTixXQUFXLENBQUNPLElBQUksQ0FBQyxDQUFDO2dCQUNkQyxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDQyxJQUFJO2dCQUNyQ0EsSUFBSSxFQUFFTCxNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ0MsSUFBSTtnQkFDdkNDLFFBQVEsRUFBRU4sTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNFLFFBQVE7WUFDbkQsQ0FBQztRQUNMLENBQUM7UUFDRCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDQztZQUFBQSxPQUFPLEVBQUU1QixvREFBUSxDQUFDYyxXQUFXLEVBQUUsQ0FBSTtRQUFDLENBQUM7UUFDMURILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVUsV0FBRWUsV0FBVztRQUNuQyxFQUFFLEVBQUViLFdBQVcsRUFBQyxDQUFDO1lBQ2JKLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLEVBQ1RDLElBQUksQ0FBQyxDQUFDSjtnQkFBQUEsV0FBVyxFQUFFQSxXQUFXO1lBQUEsQ0FBQztRQUN4QyxDQUFDLE1BQU0sQ0FBQztZQUNMakIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsRUFDWkMsSUFBSSxDQUFDLENBQUNDO2dCQUFBQSxPQUFPLEVBQUUsQ0FBUTtZQUFBLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUMsRUFDQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7UUFDbkJ2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFhLGNBQUVzQixLQUFLO0lBQ3BDLENBQUM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRpeWVuLy4vcGFnZXMvYXBpL2NvbnRhaW5zL1tsZXR0ZXJzXS5qcz83YzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxudmFyIG5lbzRqID0gcmVxdWlyZSgnbmVvNGotZHJpdmVyJyk7XHJcbnZhciBkcml2ZXIgPSBuZW80ai5kcml2ZXIoXHJcbiAgICBcIm5lbzRqK3M6Ly82YzVhZmI1Yi5kYXRhYmFzZXMubmVvNGouaW9cIixcclxuICAgIG5lbzRqLmF1dGguYmFzaWMoXCJuZW80alwiLCBcImtYUXZVOGFlTmRyZUQ2TGVFZFNQdEEyOVRsd0h6Mkxndk4yT29NMmJybDBcIilcclxuICApO1xyXG5cclxudmFyIHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHtxdWVyeToge2xldHRlcnN9fSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQm9vbSBCb29tIDogJywgbGV0dGVycylcclxuICAgIGNvbnN0IHdoZXJlQ2xhdXNlID0gXCJXSEVSRSBtLm5hbWUgY29udGFpbnMgXCJcclxuICAgIHZhciBtZW1iZXJzTGlzdCA9IFtdXHJcbiAgICBzZXNzaW9uXHJcbiAgICAgICAgLnJ1bihgT3B0aW9uYWwgTUFUQ0ggKG06TWVtYmVyKSAke3doZXJlQ2xhdXNlfSAnJHtsZXR0ZXJzfScgUmV0dXJuIG1gKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIHJlc3VsdC5yZWNvcmRzLmZvckVhY2goZnVuY3Rpb24ocmVjb3JkKXtcclxuICAgICAgICAgICAgICAgIG1lbWJlcnNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVVJMOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLmltYWdlVVJMXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJzRGF0YSA9IHttZW1iZXJzOiBfLnVuaXFCeShtZW1iZXJzTGlzdCwgXCJpZFwiKX1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lbWJlcnMgJywgbWVtYmVyc0RhdGEpXHJcbiAgICAgICAgICAgIGlmIChtZW1iZXJzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcclxuICAgICAgICAgICAgICAgICAgICAuanNvbih7bWVtYmVyc0RhdGE6IG1lbWJlcnNEYXRhfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpXHJcbiAgICAgICAgICAgICAgICAuanNvbih7bWVzc2FnZTogXCJJb3lvb29cIn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLb2xhdmVyaSA6ICcsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcbn0iXSwibmFtZXMiOlsiXyIsIm5lbzRqIiwicmVxdWlyZSIsImRyaXZlciIsImF1dGgiLCJiYXNpYyIsInNlc3Npb24iLCJoYW5kbGVyIiwicXVlcnkiLCJsZXR0ZXJzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIndoZXJlQ2xhdXNlIiwibWVtYmVyc0xpc3QiLCJydW4iLCJ0aGVuIiwicmVzdWx0IiwicmVjb3JkcyIsImZvckVhY2giLCJyZWNvcmQiLCJwdXNoIiwiaWQiLCJfZmllbGRzIiwicHJvcGVydGllcyIsIm5hbWUiLCJpbWFnZVVSTCIsIm1lbWJlcnNEYXRhIiwibWVtYmVycyIsInVuaXFCeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contains/[letters].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contains/[letters].js"));
module.exports = __webpack_exports__;

})();