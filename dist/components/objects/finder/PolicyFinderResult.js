"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyFinderResult = void 0;
class PolicyFinderResult {
    constructor(policy, result, status) {
        this._policy = policy;
        this._result = result;
        this._status = status;
    }
    getPolicy() {
        return this._policy;
    }
    set policy(policy) {
        this._policy = policy;
    }
    getResult() {
        return this._result;
    }
    set result(result) {
        this._result = result;
    }
    getStatus() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
exports.PolicyFinderResult = PolicyFinderResult;
//# sourceMappingURL=PolicyFinderResult.js.map