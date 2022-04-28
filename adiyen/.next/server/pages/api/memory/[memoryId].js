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
exports.id = "pages/api/memory/[memoryId]";
exports.ids = ["pages/api/memory/[memoryId]"];
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

/***/ "(api)/./pages/api/memory/[memoryId].js":
/*!****************************************!*\
  !*** ./pages/api/memory/[memoryId].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar neo4j = __webpack_require__(/*! neo4j-driver */ \"neo4j-driver\");\nvar driver = neo4j.driver(\"neo4j+s://6c5afb5b.databases.neo4j.io\", neo4j.auth.basic(\"neo4j\", \"kXQvU8aeNdreD6LeEdSPtA29TlwHz2LgvN2OoM2brl0\"));\nvar session = driver.session();\nfunction handler({ query: { memoryId  }  }, res) {\n    var searchString = \"OPTIONAL MATCH (n:Memories {memid: '\" + memoryId + \"'}) RETURN n\";\n    console.log(' 🤳🤳🤳 Memory Id Api 888888 =====: ', memoryId, 'String', searchString);\n    var i = 1;\n    var memoryDetail = [];\n    // session.run(`OPTIONAL MATCH (m:Memories {id: '$memoryId}') RETURN m`)\n    session.run(`OPTIONAL MATCH (n:Memories {memid: 'kuppuswamyWriting'}) RETURN n`).then(function(result) {\n        console.log('Success');\n        if (result.records.length === 0) {\n            res.status(201).json({\n                message: \"Sorry\"\n            });\n        } else {\n            result.records.forEach(function(record) {\n                if (i === 1) {\n                    i++;\n                    // console.log('Record :', record._fields[0])\n                    memoryDetail.push({\n                        id: record._fields[0].properties.memid,\n                        name: record._fields[0].properties.name,\n                        imageURL: record._fields[0].properties.imageURL,\n                        heading1: record._fields[0].properties.heading1,\n                        heading2: record._fields[0].properties.heading2,\n                        heading3: record._fields[0].properties.heading3,\n                        description1: record._fields[0].properties.description1,\n                        description2: record._fields[0].properties.description2,\n                        description3: record._fields[0].properties.description3,\n                        title: record._fields[0].properties.title\n                    });\n                }\n            });\n        }\n        console.log('MemoryDetails : ', memoryDetail);\n        res.status(200).json({\n            data: memoryDetail\n        });\n    }).catch(function(error) {\n        console.log(\"Ha ha what da ya do??\", error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVtb3J5L1ttZW1vcnlJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNCO0FBQ3RCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjO0FBQ2xDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU0sQ0FDckIsQ0FBdUMsd0NBQ3ZDRixLQUFLLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQU8sUUFBRSxDQUE2QztBQUczRSxHQUFHLENBQUNDLE9BQU8sR0FBR0gsTUFBTSxDQUFDRyxPQUFPO0FBRWIsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxFQUFFLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFDLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZELEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLENBQXNDLHdDQUFHRixRQUFRLEdBQUcsQ0FBYztJQUNyRkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBbUMsNkNBQUVKLFFBQVEsRUFBRSxDQUFRLFNBQUVFO0lBQ3JFLEdBQUcsQ0FBQ0csQ0FBQyxHQUFHLENBQUM7SUFDVCxHQUFHLENBQUNDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsRUFBd0U7SUFDeEVULE9BQU8sQ0FDTlUsR0FBRyxFQUFFLGlFQUFpRSxHQUN0RUMsSUFBSSxDQUFDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLENBQUM7UUFDbkJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7UUFDckIsRUFBRSxFQUFFSyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzlCVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztnQkFBQUEsT0FBTyxFQUFFLENBQU87WUFBQSxDQUFDO1FBQzNDLENBQUMsTUFBTSxDQUFDO1lBQ0pMLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSyxPQUFPLENBQUMsUUFBUSxDQUFDQyxNQUFNLEVBQUMsQ0FBQztnQkFDcEMsRUFBRSxFQUFFWCxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7b0JBQ1RBLENBQUM7b0JBQ0QsRUFBNkM7b0JBQzdDQyxZQUFZLENBQUNXLElBQUksQ0FBQyxDQUFDO3dCQUNmQyxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDQyxLQUFLO3dCQUN0Q0MsSUFBSSxFQUFFTixNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ0UsSUFBSTt3QkFDdkNDLFFBQVEsRUFBRVAsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNHLFFBQVE7d0JBQy9DQyxRQUFRLEVBQUVSLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDSSxRQUFRO3dCQUMvQ0MsUUFBUSxFQUFFVCxNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ0ssUUFBUTt3QkFDL0NDLFFBQVEsRUFBRVYsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNNLFFBQVE7d0JBQy9DQyxZQUFZLEVBQUVYLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDTyxZQUFZO3dCQUN2REMsWUFBWSxFQUFFWixNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQ1EsWUFBWTt3QkFDdkRDLFlBQVksRUFBRWIsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUNTLFlBQVk7d0JBQ3ZEQyxLQUFLLEVBQUVkLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDVSxLQUFLO29CQUM3QyxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNEM0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBa0IsbUJBQUVFLFlBQVk7UUFDNUNMLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFDVEMsSUFBSSxDQUFDLENBQUNrQjtZQUFBQSxJQUFJLEVBQUV6QixZQUFZO1FBQUEsQ0FBQztJQUNsQyxDQUFDLEVBQ0EwQixLQUFLLENBQUMsUUFBUSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztRQUNuQjlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCLHdCQUFFNkIsS0FBSztJQUM5QyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkaXllbi8uL3BhZ2VzL2FwaS9tZW1vcnkvW21lbW9yeUlkXS5qcz80NzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxudmFyIG5lbzRqID0gcmVxdWlyZSgnbmVvNGotZHJpdmVyJyk7XHJcbnZhciBkcml2ZXIgPSBuZW80ai5kcml2ZXIoXHJcbiAgICBcIm5lbzRqK3M6Ly82YzVhZmI1Yi5kYXRhYmFzZXMubmVvNGouaW9cIixcclxuICAgIG5lbzRqLmF1dGguYmFzaWMoXCJuZW80alwiLCBcImtYUXZVOGFlTmRyZUQ2TGVFZFNQdEEyOVRsd0h6Mkxndk4yT29NMmJybDBcIilcclxuICApO1xyXG5cclxudmFyIHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcih7cXVlcnk6IHttZW1vcnlJZH19LCByZXMpIHtcclxuICAgIHZhciBzZWFyY2hTdHJpbmcgPSBcIk9QVElPTkFMIE1BVENIIChuOk1lbW9yaWVzIHttZW1pZDogJ1wiICsgbWVtb3J5SWQgKyBcIid9KSBSRVRVUk4gblwiXHJcbiAgICBjb25zb2xlLmxvZygnIPCfpLPwn6Sz8J+ksyBNZW1vcnkgSWQgQXBpIDg4ODg4OCA9PT09PTogJywgbWVtb3J5SWQsICdTdHJpbmcnLCBzZWFyY2hTdHJpbmcpXHJcbiAgICB2YXIgaSA9IDE7XHJcbiAgICB2YXIgbWVtb3J5RGV0YWlsID0gW11cclxuICAgIC8vIHNlc3Npb24ucnVuKGBPUFRJT05BTCBNQVRDSCAobTpNZW1vcmllcyB7aWQ6ICckbWVtb3J5SWR9JykgUkVUVVJOIG1gKVxyXG4gICAgc2Vzc2lvblxyXG4gICAgLnJ1bihgT1BUSU9OQUwgTUFUQ0ggKG46TWVtb3JpZXMge21lbWlkOiAna3VwcHVzd2FteVdyaXRpbmcnfSkgUkVUVVJOIG5gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcycpXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogXCJTb3JyeVwifSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQucmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHJlY29yZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZWNvcmQgOicsIHJlY29yZC5fZmllbGRzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeURldGFpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubWVtaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVUkw6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMuaW1hZ2VVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcxOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLmhlYWRpbmcxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nMjogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5oZWFkaW5nMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzM6IHJlY29yZC5fZmllbGRzWzBdLnByb3BlcnRpZXMuaGVhZGluZzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uMTogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5kZXNjcmlwdGlvbjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uMjogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5kZXNjcmlwdGlvbjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uMzogcmVjb3JkLl9maWVsZHNbMF0ucHJvcGVydGllcy5kZXNjcmlwdGlvbjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmQuX2ZpZWxkc1swXS5wcm9wZXJ0aWVzLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01lbW9yeURldGFpbHMgOiAnLCBtZW1vcnlEZXRhaWwpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAgIC5qc29uKHtkYXRhOiBtZW1vcnlEZXRhaWx9KVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYSBoYSB3aGF0IGRhIHlhIGRvPz9cIiwgZXJyb3IpXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbIl8iLCJuZW80aiIsInJlcXVpcmUiLCJkcml2ZXIiLCJhdXRoIiwiYmFzaWMiLCJzZXNzaW9uIiwiaGFuZGxlciIsInF1ZXJ5IiwibWVtb3J5SWQiLCJyZXMiLCJzZWFyY2hTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaSIsIm1lbW9yeURldGFpbCIsInJ1biIsInRoZW4iLCJyZXN1bHQiLCJyZWNvcmRzIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJmb3JFYWNoIiwicmVjb3JkIiwicHVzaCIsImlkIiwiX2ZpZWxkcyIsInByb3BlcnRpZXMiLCJtZW1pZCIsIm5hbWUiLCJpbWFnZVVSTCIsImhlYWRpbmcxIiwiaGVhZGluZzIiLCJoZWFkaW5nMyIsImRlc2NyaXB0aW9uMSIsImRlc2NyaXB0aW9uMiIsImRlc2NyaXB0aW9uMyIsInRpdGxlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/memory/[memoryId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/memory/[memoryId].js"));
module.exports = __webpack_exports__;

})();