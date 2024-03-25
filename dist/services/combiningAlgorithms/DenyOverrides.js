"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denyOverridesCombiningAlgorithm = void 0;
// Usando any por simplicidad pero luego cambiarlo por lo correcto
function denyOverridesCombiningAlgorithm(request, elements) {
    var atLeastOneErrorD = false;
    var atLeastOneErrorP = false;
    var atLeastOneErrorDP = false;
    var atLeastOnePermit = false;
    for (let i = 0; i < elements.length; i++) {
        let decision = elements[i].evaluate(request);
        if (decision == DecisionResult.DENY) {
            return DecisionResult.DENY;
        }
        if (decision == DecisionResult.PERMIT) {
            atLeastOnePermit = true;
            continue;
        }
        if (decision == DecisionResult.NOT_APPLICABLE) {
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_D) {
            atLeastOneErrorD = true;
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_P) {
            atLeastOneErrorP = true;
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_DP) {
            atLeastOneErrorDP = true;
            continue;
        }
    }
    if (atLeastOneErrorDP) {
        return DecisionResult.INDETERMINATE_DP;
    }
    if (atLeastOneErrorD && (atLeastOneErrorP || atLeastOnePermit)) {
        return DecisionResult.INDETERMINATE_DP;
    }
    if (atLeastOneErrorD) {
        return DecisionResult.INDETERMINATE_D;
    }
    if (atLeastOnePermit) {
        return DecisionResult.PERMIT;
    }
    if (atLeastOneErrorP) {
        return DecisionResult.INDETERMINATE_P;
    }
    return DecisionResult.NOT_APPLICABLE;
}
exports.denyOverridesCombiningAlgorithm = denyOverridesCombiningAlgorithm;
//# sourceMappingURL=DenyOverrides.js.map