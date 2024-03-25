"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionEx = void 0;
const Functions_1 = require("../../../constants/Functions");
const EqualFunction_1 = require("../functions/EqualFunction");
class FunctionEx {
    constructor(functionId) {
        this._functionId = functionId;
    }
    get functionId() {
        return this._functionId;
    }
    set functionId(id) {
        this._functionId = id;
    }
    execute() {
    }
    evaluateFunction(inputs, request) {
        var fnc;
        switch (this._functionId) {
            case Functions_1.STRING_EQUAL:
            case Functions_1.DATE_EQUAL:
                fnc = new EqualFunction_1.EqualFunction(this._functionId);
                return fnc.evaluateFunction(inputs, request);
            //TODO: ASI CON TODOS
            //asdjaskdj
            default:
                return null;
        }
    }
    evalArgs(inputs, request, args) {
        let i = 0;
        for (let input of inputs) {
            let result = input.evaluate(request);
            if (result != null) {
                if (result.isIndeterminate) {
                    return result;
                }
                args[i] = result.value;
            }
        }
        //si todo sale bien, no retorna error
        return null;
    }
    //do nothing
    evaluate(request) {
        return null;
    }
}
exports.FunctionEx = FunctionEx;
//# sourceMappingURL=FunctionEx.js.map