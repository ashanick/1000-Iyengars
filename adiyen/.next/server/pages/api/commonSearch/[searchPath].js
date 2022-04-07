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
exports.id = "pages/api/commonSearch/[searchPath]";
exports.ids = ["pages/api/commonSearch/[searchPath]"];
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

/***/ "(api)/./pages/api/commonSearch/[searchPath].js":
/*!************************************************!*\
  !*** ./pages/api/commonSearch/[searchPath].js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler({ query: { searchPath  }  }, res) {\n    console.log('Boom Boom Boom +++ V2 Boom : ', searchPath);\n    const xx = searchPath.split('+');\n    console.log('XX ', xx[0]);\n    var searchStatement = 'Optional MATCH (m:Member)';\n    // XX[0] part name\n    if (xx[0] !== '') {\n        searchStatement = searchStatement + \" WHERE m.name contains '\" + xx[0] + \"'\";\n    }\n    // xx 1 ancestry\n    if (xx[1] !== '') {\n        searchStatement = searchStatement + \" WHERE m.name contains '\" + xx[1] + \"'\";\n    }\n    searchStatement = searchStatement + ' Return m';\n    console.log('Where Clause Name : ', searchStatement);\n    var membersList = [];\n    session.run(`${searchStatement}`).then(function(result) {\n        console.log('In success');\n        console.log('Length ', result.records.length);\n        if (result.records.length > 1) {\n            result.records.forEach(function(record) {\n                console.log('Record : ', record._fields[0].properties.name);\n                membersList.push({\n                    id: record._fields[0].properties.name,\n                    name: record._fields[0].properties.name,\n                    imageURL: record._fields[0].properties.imageURL\n                });\n            });\n        }\n        const membersData = {\n            members: lodash__WEBPACK_IMPORTED_MODULE_0___default().uniqBy(membersList, \"id\")\n        };\n        // console.log('Members ', membersData)\n        if (membersList) {\n            res.status(200).json({\n                membersData: membersData\n            });\n        } else {\n            res.status(201).json({\n                message: \"Ioyooo\"\n            });\n        }\n    }).catch(function(error) {\n        console.log('Kolaveri : ', error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbW9uU2VhcmNoL1tzZWFyY2hQYXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0I7QUFDdEIsR0FBRyxDQUFDQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsa0NBQWM7QUFDbEMsR0FBRyxDQUFDQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTSxDQUNyQixDQUF1Qyx3Q0FDdkNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBTyxRQUFFLENBQTZDO0FBRzNFLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHSCxNQUFNLENBQUNHLE9BQU87QUFDYixRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxDQUFBQSxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsVUFBVSxHQUFDLEdBQUMsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQStCLGdDQUFFSCxVQUFVO0lBQ3ZELEtBQUssQ0FBQ0ksRUFBRSxHQUFHSixVQUFVLENBQUNLLEtBQUssQ0FBQyxDQUFHO0lBQy9CSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFLLE1BQUVDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQ0UsZUFBZSxHQUFHLENBQTJCO0lBQ2pELEVBQWtCO0lBQ2xCLEVBQUUsRUFBRUYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFFLEdBQUUsQ0FBQztRQUNqQkUsZUFBZSxHQUFHQSxlQUFlLEdBQUcsQ0FBMEIsNEJBQUdGLEVBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBRztJQUM1RSxDQUFDO0lBQ0QsRUFBZ0I7SUFDaEIsRUFBRSxFQUFFQSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBRSxDQUFDO1FBQ2pCRSxlQUFlLEdBQUdBLGVBQWUsR0FBRyxDQUEwQiw0QkFBR0YsRUFBRSxDQUFDLENBQUMsSUFBRSxDQUFHO0lBQzVFLENBQUM7SUFDREUsZUFBZSxHQUFHQSxlQUFlLEdBQUcsQ0FBVztJQUMvQ0osT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBc0IsdUJBQUVHLGVBQWU7SUFDbkQsR0FBRyxDQUFDQyxXQUFXLEdBQUksQ0FBQyxDQUFDO0lBQ3JCVixPQUFPLENBQ0pXLEdBQUcsSUFBSUYsZUFBZSxJQUN0QkcsSUFBSSxDQUFDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLENBQUM7UUFDckJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVk7UUFDeEJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBR08sTUFBTSxDQUFDQyxPQUFPLENBQUNDLE1BQU07UUFDN0MsRUFBRSxFQUFFRixNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzlCRixNQUFNLENBQUNDLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLENBQUM7Z0JBQ3BDWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXLFlBQUVXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDQyxJQUFJO2dCQUMxRFYsV0FBVyxDQUFDVyxJQUFJLENBQUMsQ0FBQztvQkFDZEMsRUFBRSxFQUFFTCxNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ0MsSUFBSTtvQkFDckNBLElBQUksRUFBRUgsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNDLElBQUk7b0JBQ3ZDRyxRQUFRLEVBQUVOLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDSSxRQUFRO2dCQUNuRCxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7UUFDRCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDQztZQUFBQSxPQUFPLEVBQUUvQixvREFBUSxDQUFDZ0IsV0FBVyxFQUFFLENBQUk7UUFBQyxDQUFDO1FBQzFELEVBQXVDO1FBQ3ZDLEVBQUUsRUFBRUEsV0FBVyxFQUFDLENBQUM7WUFDYk4sR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsRUFDVEMsSUFBSSxDQUFDLENBQUNKO2dCQUFBQSxXQUFXLEVBQUVBLFdBQVc7WUFBQSxDQUFDO1FBQ3hDLENBQUMsTUFBTSxDQUFDO1lBQ0pwQixHQUFHLENBQUN1QixNQUFNLENBQUMsR0FBRyxFQUNiQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRSxDQUFRO1lBQUEsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztRQUNuQjFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWEsY0FBRXlCLEtBQUs7SUFDdEMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGl5ZW4vLi9wYWdlcy9hcGkvY29tbW9uU2VhcmNoL1tzZWFyY2hQYXRoXS5qcz8zMjI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxudmFyIG5lbzRqID0gcmVxdWlyZSgnbmVvNGotZHJpdmVyJyk7XHJcbnZhciBkcml2ZXIgPSBuZW80ai5kcml2ZXIoXHJcbiAgICBcIm5lbzRqK3M6Ly82YzVhZmI1Yi5kYXRhYmFzZXMubmVvNGouaW9cIixcclxuICAgIG5lbzRqLmF1dGguYmFzaWMoXCJuZW80alwiLCBcImtYUXZVOGFlTmRyZUQ2TGVFZFNQdEEyOVRsd0h6Mkxndk4yT29NMmJybDBcIilcclxuICApO1xyXG5cclxudmFyIHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHtxdWVyeToge3NlYXJjaFBhdGh9fSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQm9vbSBCb29tIEJvb20gKysrIFYyIEJvb20gOiAnLCBzZWFyY2hQYXRoKVxyXG4gICAgY29uc3QgeHggPSBzZWFyY2hQYXRoLnNwbGl0KCcrJylcclxuICAgIGNvbnNvbGUubG9nKCdYWCAnLCB4eFswXSlcclxuICAgIHZhciBzZWFyY2hTdGF0ZW1lbnQgPSAnT3B0aW9uYWwgTUFUQ0ggKG06TWVtYmVyKSc7XHJcbiAgICAvLyBYWFswXSBwYXJ0IG5hbWVcclxuICAgIGlmICh4eFswXSAhPT0gJycpIHtcclxuICAgICAgc2VhcmNoU3RhdGVtZW50ID0gc2VhcmNoU3RhdGVtZW50ICsgXCIgV0hFUkUgbS5uYW1lIGNvbnRhaW5zICdcIiArIHh4WzBdK1wiJ1wiXHJcbiAgICB9IFxyXG4gICAgLy8geHggMSBhbmNlc3RyeVxyXG4gICAgaWYgKHh4WzFdICE9PSAnJykge1xyXG4gICAgICBzZWFyY2hTdGF0ZW1lbnQgPSBzZWFyY2hTdGF0ZW1lbnQgKyBcIiBXSEVSRSBtLm5hbWUgY29udGFpbnMgJ1wiICsgeHhbMV0rXCInXCJcclxuICAgIH1cclxuICAgIHNlYXJjaFN0YXRlbWVudCA9IHNlYXJjaFN0YXRlbWVudCArICcgUmV0dXJuIG0nXHJcbiAgICBjb25zb2xlLmxvZygnV2hlcmUgQ2xhdXNlIE5hbWUgOiAnLCBzZWFyY2hTdGF0ZW1lbnQpXHJcbiAgICB2YXIgbWVtYmVyc0xpc3QgID0gW11cclxuICAgIHNlc3Npb25cclxuICAgICAgLnJ1bihgJHtzZWFyY2hTdGF0ZW1lbnR9YClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW4gc3VjY2VzcycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xlbmd0aCAnICwgcmVzdWx0LnJlY29yZHMubGVuZ3RoKVxyXG4gICAgICAgIGlmIChyZXN1bHQucmVjb3Jkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICByZXN1bHQucmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZCA6ICcsIHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubmFtZSlcclxuICAgICAgICAgICAgICBtZW1iZXJzTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZVVSTDogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5pbWFnZVVSTFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZW1iZXJzRGF0YSA9IHttZW1iZXJzOiBfLnVuaXFCeShtZW1iZXJzTGlzdCwgXCJpZFwiKX1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWVtYmVycyAnLCBtZW1iZXJzRGF0YSlcclxuICAgICAgICBpZiAobWVtYmVyc0xpc3Qpe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcclxuICAgICAgICAgICAgICAgIC5qc29uKHttZW1iZXJzRGF0YTogbWVtYmVyc0RhdGF9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKVxyXG4gICAgICAgICAgICAuanNvbih7bWVzc2FnZTogXCJJb3lvb29cIn0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0tvbGF2ZXJpIDogJywgZXJyb3IpXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbIl8iLCJuZW80aiIsInJlcXVpcmUiLCJkcml2ZXIiLCJhdXRoIiwiYmFzaWMiLCJzZXNzaW9uIiwiaGFuZGxlciIsInF1ZXJ5Iiwic2VhcmNoUGF0aCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ4eCIsInNwbGl0Iiwic2VhcmNoU3RhdGVtZW50IiwibWVtYmVyc0xpc3QiLCJydW4iLCJ0aGVuIiwicmVzdWx0IiwicmVjb3JkcyIsImxlbmd0aCIsImZvckVhY2giLCJyZWNvcmQiLCJfZmllbGRzIiwicHJvcGVydGllcyIsIm5hbWUiLCJwdXNoIiwiaWQiLCJpbWFnZVVSTCIsIm1lbWJlcnNEYXRhIiwibWVtYmVycyIsInVuaXFCeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/commonSearch/[searchPath].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/commonSearch/[searchPath].js"));
module.exports = __webpack_exports__;

})();