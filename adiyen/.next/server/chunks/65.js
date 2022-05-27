exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 5639:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "allusers-graph_item__LzCLy"
};


/***/ }),

/***/ 1065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _allusers_graph_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5639);
/* harmony import */ var _allusers_graph_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_allusers_graph_module_css__WEBPACK_IMPORTED_MODULE_2__);



const NoSSRForceGraph = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\overlayGraph\\allusers-graph.js -> " + "../../lib/NoSSRForceGraph"
        ]
    },
    ssr: false
});
function AllUsersGraph(props) {
    const graphData = props.items;
    // console.log('All Users Graph , ', props.items)
    if (!graphData) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Opps waiting"
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_allusers_graph_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
        children: graphData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoSSRForceGraph, {
            nodeAutoColorBy: "__typename",
            nodeLabel: "id",
            width: 1000,
            height: 400,
            graphData: graphData
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllUsersGraph);


/***/ })

};
;