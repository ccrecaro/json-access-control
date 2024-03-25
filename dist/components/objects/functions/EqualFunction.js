"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EqualFunction = void 0;
const Functions_1 = require("../../../constants/Functions");
const FunctionEx_1 = require("../expression/FunctionEx");
const EvaluationResult_1 = require("../result/EvaluationResult");
class EqualFunction extends FunctionEx_1.FunctionEx {
    constructor(functionId) {
        super(functionId);
    }
    evaluateFunction(inputs, request) {
        var argValues = new Array(inputs.length);
        var result = this.evalArgs(inputs, request, argValues);
        var evalResult = false;
        if (result != null)
            return result;
        if (typeof argValues[1] === "string" && argValues[1] === "Any") {
            return new EvaluationResult_1.EvaluationResult(false, true, "boolean", null, null);
        }
        if (this.functionId == Functions_1.STRING_EQUAL_IGNORE_CASE_EQUAL) {
            evalResult = argValues[0].toString().toLowerCase() === argValues[1].toString().toLowerCase();
        }
        else {
            evalResult = argValues[0] === argValues[1];
        }
        return new EvaluationResult_1.EvaluationResult(false, evalResult, "boolean", null, null);
    }
}
exports.EqualFunction = EqualFunction;
//# sourceMappingURL=EqualFunction.js.map