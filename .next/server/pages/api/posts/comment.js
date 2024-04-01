"use strict";
(() => {
var exports = {};
exports.id = 3697;
exports.ids = [3697];
exports.modules = {

/***/ 8054:
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = "mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority";
const options = {};
let client;
let clientPromise;

if (false) {}

if (false) {} else {
  // In production mode, it's best to not use a global variable.
  client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
  clientPromise = client.connect();
} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);

/***/ }),

/***/ 8854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);



async function handler(req, res) {
  const {
    id
  } = req.body;
  var data = req.body;
  delete data.id;
  delete data.avatar;
  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  const db = client.db("anje");

  try {
    // Update the post's comments array
    const su = await db.collection("posts").updateOne({
      _id: new bson__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)
    }, {
      $push: {
        comments: data
      }
    });
    console.log(su);
    res.status(200).json({
      message: "Comment added successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      message: "Houve um erro! " + error
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8854));
module.exports = __webpack_exports__;

})();