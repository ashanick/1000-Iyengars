exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 4476:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "new-search_form__C7ySn",
	"wrap__search": "new-search_wrap__search__UxwwY",
	"formreset": "new-search_formreset__VJXvu",
	"control": "new-search_control__eLGSi",
	"labelinput": "new-search_labelinput__doeZY",
	"topcontent": "new-search_topcontent__p9s1M",
	"formsubmitbutton": "new-search_formsubmitbutton__qUBgu",
	"formresetbutton": "new-search_formresetbutton__ZKM9q",
	"main__query": "new-search_main__query__w80Zp",
	"main__querytext": "new-search_main__querytext__xB0Zt",
	"main__query__club": "new-search_main__query__club__vdMqj",
	"h3": "new-search_h3__Gf3uk"
};


/***/ }),

/***/ 8101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ search_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/users/new-search.module.css
var new_search_module = __webpack_require__(4476);
var new_search_module_default = /*#__PURE__*/__webpack_require__.n(new_search_module);
// EXTERNAL MODULE: ./components/ui/button.js
var ui_button = __webpack_require__(6844);
// EXTERNAL MODULE: ./data/cities.json
var cities = __webpack_require__(184);
// EXTERNAL MODULE: ./data/education.json
var education = __webpack_require__(1342);
;// CONCATENATED MODULE: ./data/professionData.json
const professionData_namespaceObject = JSON.parse('{"a":[{"id":"p1","name":"None"},{"id":"p2","name":"Accounts"},{"id":"p11","name":"Computer Engineer"},{"id":"p12","name":"Bachelors Sciences"},{"id":"p13","name":"Business"},{"id":"p14","name":"Crypto"},{"id":"p4","name":"Doctor"},{"id":"p6","name":"Engineer"},{"id":"p3","name":"Entrepreneur"},{"id":"p15","name":"Environmentalist"},{"id":"p5","name":"Finance"},{"id":"p20","name":"Government Service"},{"id":"p19","name":"Homemaker"},{"id":"p7","name":"Journalist"},{"id":"p8","name":"Lawyer"},{"id":"p3","name":"Management"},{"id":"p9","name":"Marketing"},{"id":"p16","name":"Musician"},{"id":"p17","name":"Professor"},{"id":"p18","name":"Teacher"},{"id":"p10","name":"Software Developer"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ui/button.module.css
var button_module = __webpack_require__(3146);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
;// CONCATENATED MODULE: ./components/ui/button-large.js



function ButtonLarge(props) {
    if (props.link) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: props.link,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (button_module_default()).btn,
                children: props.children
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (button_module_default()).btnlarge,
        onClick: props.onClick,
        children: props.children
    }));
}
/* harmony default export */ const button_large = (ButtonLarge);

;// CONCATENATED MODULE: ./components/searches/search-form.js








function SearchForm(props) {
    var searchtype = true;
    var inputRef = (0,external_react_.useRef)();
    var cityInputRef = (0,external_react_.useRef)();
    var ancestryInputRef = (0,external_react_.useRef)();
    var professionInputRef = (0,external_react_.useRef)();
    var educationInputRef = (0,external_react_.useRef)();
    var ancestralVillage = [];
    if (props.type === 'connections') {
        searchtype = false;
    }
    // console.log('New Search Props : ', searchtype, props.type)
    if (cities) {
        ancestralVillage = cities.data.filter((cc)=>cc.aVillage === "true"
        );
    // console.log('Av', ancestralVillage)
    }
    // console.log('Search Form', props)
    function formSubmitHandler(event) {
        event.preventDefault();
        const partName = inputRef.current.value;
        const strLength = inputRef.current.value.length;
        var citySelected = cityInputRef.current.value;
        var ancestry = ancestryInputRef.current.value;
        var profession = professionInputRef.current.value;
        var education = educationInputRef.current.value;
        // console.log('Submit ss: ', partName, strLength, citySelected)
        if (citySelected === "None") {
            citySelected = "";
        }
        if (ancestry === "None") {
            ancestry = "";
        }
        if (citySelected === "None") {
            citySelected = "";
        }
        if (citySelected === "None") {
            citySelected = "";
        }
        const searchPath = `${partName}+${ancestry}+${citySelected}+${education}+${profession}`;
        // console.log('Form submitted : ', searchPath)
        props.returnHandler(searchPath);
    }
    function handleReset() {
        // console.log('Clear all submited options')
        inputRef.current.value = "";
        cityInputRef.current.value = "";
        ancestryInputRef.current.value = "";
        professionInputRef.current.value = "";
        educationInputRef.current.value = "";
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: (new_search_module_default()).form,
                onSubmit: formSubmitHandler,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (new_search_module_default()).wrap__search,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (new_search_module_default()).main__query,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Main Query"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (new_search_module_default()).main__query__club,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (new_search_module_default()).control,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "typename",
                                                        className: (new_search_module_default()).labelinput,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Name"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        id: "searchuser",
                                                        placeholder: "Enter 3 letters",
                                                        "aria-label": "Enter 3 letters",
                                                        ref: inputRef
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (new_search_module_default()).control,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "ancestryVillage",
                                                        className: (new_search_module_default()).labelinput,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Ancestry"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                        id: "ancestryVillage",
                                                        ref: ancestryInputRef,
                                                        children: ancestralVillage.map((city)=>{
                                                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                value: city.name,
                                                                children: city.name
                                                            }, city.name));
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (new_search_module_default()).control,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "cityname",
                                                        className: (new_search_module_default()).labelinput,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "City"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                        id: "cityname",
                                                        ref: cityInputRef,
                                                        children: cities.data.map((city)=>{
                                                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                value: city.name,
                                                                children: city.name
                                                            }, city.name));
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (new_search_module_default()).main__query,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Additional filters"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (new_search_module_default()).main__query__club,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (new_search_module_default()).control,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "educationName",
                                                        className: (new_search_module_default()).labelinput,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Education"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                        id: "educationName",
                                                        ref: educationInputRef,
                                                        children: education/* data.map */.a.map((city)=>{
                                                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                value: city.name,
                                                                children: city.name
                                                            }, city.name));
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (new_search_module_default()).control,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "professionName",
                                                        className: (new_search_module_default()).labelinput,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Profession"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                        id: "professionName",
                                                        ref: professionInputRef,
                                                        children: professionData_namespaceObject.a.map((city)=>{
                                                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                value: city.name,
                                                                children: city.name
                                                            }, city.name));
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    searchtype && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_search_module_default()).formsubmitbutton,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(button_large, {
                            children: "Search any individual criteria in main query or in filters, or combine main with filters "
                        })
                    }),
                    !searchtype && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_search_module_default()).formsubmitbutton,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            children: "Search Connections -- Between any 2 people"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (new_search_module_default()).formreset,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (new_search_module_default()).formresetbutton,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        onClick: handleReset,
                        children: "Reset Search"
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const search_form = (SearchForm);


/***/ })

};
;