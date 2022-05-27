(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7856:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__57EcY",
	"footermenu": "footer_footermenu__K6KMd",
	"footercontentabout": "footer_footercontentabout__697_L",
	"footercontentothers": "footer_footercontentothers__P5SKJ",
	"fcopy": "footer_fcopy__0lcdU",
	"icons__main": "footer_icons__main__6_RFv",
	"icons_images": "footer_icons_images__mAQJQ",
	"image__icon": "footer_image__icon__1PwSl"
};


/***/ }),

/***/ 1055:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-header_header__LZcDE",
	"headermenu": "main-header_headermenu__m96rK",
	"links": "main-header_links__JPa3N",
	"image": "main-header_image__UUaNG",
	"logo": "main-header_logo__OP4Mb",
	"navigation": "main-header_navigation__5rVha"
};


/***/ }),

/***/ 9476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/layout/main-header.module.css
var main_header_module = __webpack_require__(1055);
var main_header_module_default = /*#__PURE__*/__webpack_require__.n(main_header_module);
;// CONCATENATED MODULE: ./components/layout/main-header.js




function MainHeader() {
    const imagePath = '/images/Iyengars logo.png';
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (main_header_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (main_header_module_default()).headermenu,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (main_header_module_default()).image,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: imagePath,
                                    alt: "1000+ Iyengars",
                                    width: 200,
                                    height: 150,
                                    layout: "responsive"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "Compendium of Iyengars"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: (main_header_module_default()).navigation,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (main_header_module_default()).links,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/clans",
                                    children: "Clans"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/search-links",
                                    children: "Links"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/contactus",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const main_header = (MainHeader);

// EXTERNAL MODULE: ./components/layout/footer.module.css
var footer_module = __webpack_require__(7856);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/layout/footer-page.js



// import Image from 'next/image';
function FooterPage() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).footermenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footercontentabout,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Acknowledgements"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                style: {
                                    border: '1px solid red'
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: '/viewclans/Kodavasal',
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Kodavasal Family Tree, Mrs. Kumuda and Mr. Seshadri Sreenivasan"
                                            })
                                        })
                                    }, "kodavasal"),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: '/viewclans/Kumbakonam',
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Kumbakonam C.L.Rangaswami Family Tree, Kuppuswamy"
                                            })
                                        })
                                    }, "kumbakonam"),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: '/viewclans/Vamsa2',
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "R.S.Kuppuswamy Family Stories, Babchi Vaidehi"
                                            })
                                        })
                                    }, "vamsa2"),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: '/viewclans/Vamsa1',
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Vazhyutoor Dikshitar Vamsa from 1700"
                                            })
                                        })
                                    }, "vamsa1")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footercontentothers,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "More Info"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                style: {
                                    border: '1px solid red'
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "How to contribute"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Contact Us"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default()).fcopy,
                children: "Copyrights Reserved @Asha Sundararajan"
            })
        ]
    }));
}
/* harmony default export */ const footer_page = (FooterPage);

;// CONCATENATED MODULE: ./components/layout/layout.js

// This is like Main Navigation from Igenie -Nov 2021
// import { useState } from 'react';


// import Nav from './nav';
function Layout(props) {
    // const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(main_header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                style: {
                    border: '1px solid red'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_page, {})
        ]
    }));
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Genius"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "NextJS Events"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,676,664,675], () => (__webpack_exec__(9476)));
module.exports = __webpack_exports__;

})();