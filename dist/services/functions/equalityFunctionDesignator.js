"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalityFunctionDesignator = void 0;
const EqualityFunctions_1 = require("./EqualityFunctions");
function equalityFunctionDesignator(functionId, arg1, arg2) {
    switch (functionId) {
        case "urn:oasis:names:tc:xacml:3.0:function:string-equal-ignore-case":
            return (0, EqualityFunctions_1.stringEqualIgnoreCase)(arg1, arg2);
        default:
            return (0, EqualityFunctions_1.argumentsgEqual)(arg1, arg2);
    }
}
exports.equalityFunctionDesignator = equalityFunctionDesignator;
//# sourceMappingURL=equalityFunctionDesignator.js.map