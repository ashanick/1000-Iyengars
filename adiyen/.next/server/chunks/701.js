exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 697:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "grid-item_grid__H0gbF",
	"image": "grid-item_image__0PNd_",
	"content": "grid-item_content__7kEYD",
	"showButtonDetails": "grid-item_showButtonDetails__Utsbr"
};


/***/ }),

/***/ 5349:
/***/ ((module) => {

// Exports
module.exports = {
	"users": "users-grid_users__0ytq8"
};


/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ users_grid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/users/grid-item.module.css
var grid_item_module = __webpack_require__(697);
var grid_item_module_default = /*#__PURE__*/__webpack_require__.n(grid_item_module);
;// CONCATENATED MODULE: ./components/users/grid-item.js




function GridItem(props) {
    const { id , name , imageURL , listType , user1  } = props;
    const imagePath = `/${imageURL}`;
    // console.log('Grid Item : ', props)
    var linkPath = `/users/${name}`;
    if (listType === 'connections') {
        linkPath = `/linksUser2/${name}`;
    }
    if (listType === 'user2') {
        linkPath = `/search-connections/${user1}+${name}`;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (grid_item_module_default()).grid,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: linkPath,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (grid_item_module_default()).image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: imagePath,
                            alt: name,
                            width: 150,
                            height: 150,
                            layout: "responsive",
                            placeholder: "empty"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (grid_item_module_default()).content,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        })
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const grid_item = (GridItem);

// EXTERNAL MODULE: ./components/users/users-grid.module.css
var users_grid_module = __webpack_require__(5349);
var users_grid_module_default = /*#__PURE__*/__webpack_require__.n(users_grid_module);
;// CONCATENATED MODULE: ./components/users/users-grid.js



function UsersGrid(props) {
    const members = props.items.members;
    const listType = props.listType;
    const user1 = props.user1;
    // console.log('Users List Type ', listType, 'User1', user1)
    if (!members) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Auhhgg Error ... No Members Found Yetttt"
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (users_grid_module_default()).users,
        children: members.map((member)=>/*#__PURE__*/ jsx_runtime_.jsx(grid_item, {
                id: member.id,
                name: member.name,
                imageURL: member.imageURL,
                ecdescription: member.ecdescription,
                listType: listType,
                user1: user1
            }, member.id)
        )
    }));
}
/* harmony default export */ const users_grid = (UsersGrid);


/***/ })

};
;