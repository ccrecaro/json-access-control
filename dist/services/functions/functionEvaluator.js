"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionEvaluator = void 0;
function functionEvaluator(functionId, inputs, request) {
    var result;
    switch (functionId) {
        case DAYTIME_DURATION_EQUAL:
            result = argumentsEqual(inputs, request.value);
            break;
        default:
            break;
    }
}
exports.functionEvaluator = functionEvaluator;
//# sourceMappingURL=functionEvaluator.js.map