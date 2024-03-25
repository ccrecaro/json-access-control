"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringEqualIgnoreCase = exports.argumentsEqual = void 0;
// Util para las evaluaciones de igualdad de cualquier tipo de elemento
function argumentsEqual(arg1, arg2) {
    return arg1 === arg2;
}
exports.argumentsEqual = argumentsEqual;
function stringEqualIgnoreCase(arg1, arg2) {
    return arg1.toLowerCase() === arg2.toLowerCase();
}
exports.stringEqualIgnoreCase = stringEqualIgnoreCase;
//# sourceMappingURL=EqualityFunctions.js.map