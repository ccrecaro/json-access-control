"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permitOverridesCombiningAlgorithm = void 0;
function permitOverridesCombiningAlgorithm(request, elements) {
    var atLeastOneErrorD = false;
    var atLeastOneErrorP = false;
    var atLeastOneErrorDP = false;
    var atLeastOneDeny = false;
    for (let i = 0; i < elements.length; i++) {
        let decision = elements[i].evaluate(request);
        if (decision == DecisionResult.DENY) {
            atLeastOneDeny = true;
            continue;
        }
        if (decision == DecisionResult.PERMIT) {
            return DecisionResult.PERMIT;
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
    if (atLeastOneErrorP && (atLeastOneErrorD || atLeastOneDeny)) {
        return DecisionResult.INDETERMINATE_DP;
    }
    if (atLeastOneErrorP) {
        return DecisionResult.INDETERMINATE_P;
    }
    if (atLeastOneDeny) {
        return DecisionResult.DENY;
    }
    if (atLeastOneErrorD) {
        return DecisionResult.INDETERMINATE_D;
    }
    return DecisionResult.NOT_APPLICABLE;
}
exports.permitOverridesCombiningAlgorithm = permitOverridesCombiningAlgorithm;
//# sourceMappingURL=PermitOverrides.js.map