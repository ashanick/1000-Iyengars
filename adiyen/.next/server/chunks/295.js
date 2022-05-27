exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 7754:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "photo-grid_grid__FfOXx"
};


/***/ }),

/***/ 3827:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "photo-item_post__CY9rg",
	"image": "photo-item_image__3DN6l"
};


/***/ }),

/***/ 7295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ photo_grid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/memories/photo-grid.module.css
var photo_grid_module = __webpack_require__(7754);
var photo_grid_module_default = /*#__PURE__*/__webpack_require__.n(photo_grid_module);
// EXTERNAL MODULE: ./components/memories/photo-item.module.css
var photo_item_module = __webpack_require__(3827);
var photo_item_module_default = /*#__PURE__*/__webpack_require__.n(photo_item_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/memories/photo-item.js



function PhotoItem(props) {
    const { id , title , imageURL  } = props.items;
    // console.log('Photo Item Props', props.items)
    const imagePath = `/${imageURL}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (photo_item_module_default()).post,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (photo_item_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: imagePath,
                    alt: title,
                    width: 300,
                    height: 300,
                    layout: "responsive",
                    placeholder: "empty"
                })
            })
        ]
    }));
}
/* harmony default export */ const photo_item = (PhotoItem);

;// CONCATENATED MODULE: ./components/memories/photo-grid.js



function PhotoGrid(props) {
    const { photoList  } = props.items;
    // console.log('In Photo Grid: See ' , props)
    if (!photoList) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Please add photos"
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (photo_grid_module_default()).grid,
        children: photoList.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(photo_item, {
                items: p
            }, p.title)
        )
    }));
}
/* harmony default export */ const photo_grid = (PhotoGrid);


/***/ })

};
;