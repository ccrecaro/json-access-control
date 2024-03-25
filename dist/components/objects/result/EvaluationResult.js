"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationResult = void 0;
class EvaluationResult {
    constructor(isIndeterminate, value, dataType, status, matchResult) {
        this._isIndeterminate = isIndeterminate;
        this._value = value;
        this._dataType = dataType;
        this._status = status;
        this._matchResult = matchResult;
    }
    get matchResult() {
        return this._matchResult;
    }
    set matchResult(result) {
        this._matchResult = result;
    }
    get isIndeterminate() {
        return this._isIndeterminate;
    }
    set isIndeterminate(isInd) {
        this._isIndeterminate = isInd;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get dataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
exports.EvaluationResult = EvaluationResult;
//# sourceMappingURL=EvaluationResult.js.map