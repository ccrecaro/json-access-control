"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyOneApplicablePolicyPolicyCombiningAlogrithm = void 0;
function onlyOneApplicablePolicyPolicyCombiningAlogrithm(request, policies) {
    var atLeastOne = false;
    var selectedPolicy;
    var appResult;
    for (let i = 0; i < policies.length; i++) {
        appResult = policies[i].evaluate(request).matchResult;
        if (appResult == MatchResult.INDETERMINATE) {
            return DecisionResult.INDETERMINATE;
        }
        if (appResult == MatchResult.MATCH) {
            if (atLeastOne) {
                return DecisionResult.INDETERMINATE;
            }
            else {
                atLeastOne = true;
                selectedPolicy = policies[i];
            }
        }
        if (appResult == MatchResult.NO_MATCH) {
            continue;
        }
    }
    if (atLeastOne) {
        return selectedPolicy.evaluate();
    }
    else {
        return DecisionResult.NOT_APPLICABLE;
    }
}
exports.onlyOneApplicablePolicyPolicyCombiningAlogrithm = onlyOneApplicablePolicyPolicyCombiningAlogrithm;
//# sourceMappingURL=OnlyOneApplicable.js.map