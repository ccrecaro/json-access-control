"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyIdentifier = void 0;
class PolicyIdentifier {
    constructor(policyIdReference, policySetIdReference) {
        this._policyIdReference = policyIdReference;
        this._policySetIdReference = policySetIdReference;
    }
    getPolicyIdReference() {
        return this._policyIdReference;
    }
    set policyIdReference(policyIdReferences) {
        this._policyIdReference = policyIdReferences;
    }
    getPolicySetIdReference() {
        return this._policySetIdReference;
    }
    set policySetIdReference(policySetIdReferences) {
        this._policySetIdReference = policySetIdReferences;
    }
}
exports.PolicyIdentifier = PolicyIdentifier;
//# sourceMappingURL=PolicyIdentifier.js.map