//// [exportAsNamespace_missingEmitHelpers.ts]
//// [a.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
//// [b.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "ns", {
    enumerable: !0,
    get: function() {
        return _a;
    }
});
var _a = /*#__PURE__*/ require("@swc/helpers/_/_interop_require_wildcard")._(require("./a"));
 // Error
