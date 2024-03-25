"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denyUnlessPermitCombiningAlgorithm = void 0;
function denyUnlessPermitCombiningAlgorithm(request, elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].evaluate(request) == DecisionResult.PERMIT) {
            return DecisionResult.PERMIT;
        }
    }
    return DecisionResult.DENY;
}
exports.denyUnlessPermitCombiningAlgorithm = denyUnlessPermitCombiningAlgorithm;
//# sourceMappingURL=DenyUnlessPermit.js.map