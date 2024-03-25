"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstApplicableEffectRuleCombiningAlgorithm = void 0;
function firstApplicableEffectRuleCombiningAlgorithm(request, elements) {
    for (let i = 0; i < elements.length; i++) {
        let decision = elements[i].evaluate(request);
        if (decision == DecisionResult.DENY) {
            return DecisionResult.DENY;
        }
        if (decision == DecisionResult.PERMIT) {
            return DecisionResult.PERMIT;
        }
        if (decision == DecisionResult.NOT_APPLICABLE) {
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE) {
            return DecisionResult.INDETERMINATE;
        }
    }
    return DecisionResult.NOT_APPLICABLE;
}
exports.firstApplicableEffectRuleCombiningAlgorithm = firstApplicableEffectRuleCombiningAlgorithm;
//# sourceMappingURL=FirstApplicable.js.map