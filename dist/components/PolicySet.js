"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PolicyAlgorithms_1 = require("../constants/PolicyAlgorithms");
const DenyOverrides_1 = require("../services/combiningAlgorithms/DenyOverrides");
const DenyUnlessPermit_1 = require("../services/combiningAlgorithms/DenyUnlessPermit");
const FirstApplicable_1 = require("../services/combiningAlgorithms/FirstApplicable");
const OnlyOneApplicable_1 = require("../services/combiningAlgorithms/OnlyOneApplicable");
const PermitOverrides_1 = require("../services/combiningAlgorithms/PermitOverrides");
const PermitUnlessDeny_1 = require("../services/combiningAlgorithms/PermitUnlessDeny");
class PolicySet {
    constructor(policySetId, version, policyCombiningAlgId, target, description, policyIssuer, policySetDefaults, policySet, policy, policySetIdReference, policyIdReference, combinerParameters, policyCombinerParameters, policySetCombinerParameters, obligationExpressions, adviceExpressions, maxDelegationDepth) {
        this._policySetId = policySetId;
        this._version = version;
        this._policyCombiningAlgId = policyCombiningAlgId;
        this._target = target;
        this._description = description;
        this._policyIssuer = policyIssuer;
        this._policySetDefaults = policySetDefaults;
        this._policySet = policySet;
        this._policy = policy;
        this._policySetIdReference = policySetIdReference;
        this._policyIdReference = policyIdReference;
        this._combinerParameters = combinerParameters;
        this._policyCombinerParameters = policyCombinerParameters;
        this._policySetCombinerParameters = policySetCombinerParameters;
        this._obligationExpressions = obligationExpressions;
        this._adviceExpressions = adviceExpressions;
        this._maxDelegationDepth = maxDelegationDepth;
    }
    get policySetId() {
        return this._policySetId;
    }
    set policySetId(id) {
        this._policySetId = id;
    }
    get version() {
        return this._version;
    }
    set version(version) {
        this._version = version;
    }
    get policyCombiningAlgId() {
        return this._policyCombiningAlgId;
    }
    set policyCombiningAlgId(id) {
        this._policyCombiningAlgId = id;
    }
    get target() {
        return this._target;
    }
    set target(target) {
        this._target = target;
    }
    getDescription() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    getPolicyIssuer() {
        return this._policyIssuer;
    }
    set policyIssuer(policyIssuer) {
        this._policyIssuer = policyIssuer;
    }
    getPolicySetDefaults() {
        return this._policySetDefaults;
    }
    set policySetDefaults(policySetDefaults) {
        this._policySetDefaults = policySetDefaults;
    }
    getPolicySet() {
        return this._policySet;
    }
    set policySet(policySet) {
        this._policySet = policySet;
    }
    getPolicy() {
        return this._policy;
    }
    set policy(policy) {
        this._policy = policy;
    }
    getPolicySetIdReference() {
        return this._policySetIdReference;
    }
    set policySetIdReference(policySetIdReference) {
        this._policySetIdReference = policySetIdReference;
    }
    getPolicyIdReference() {
        return this._policyIdReference;
    }
    set policyIdReference(policyIdReference) {
        this._policyIdReference = policyIdReference;
    }
    getCombinerParameters() {
        return this._combinerParameters;
    }
    set combinerParameters(combinerParameters) {
        this._combinerParameters = combinerParameters;
    }
    getPolicyCombinerParameters() {
        return this._policyCombinerParameters;
    }
    set policyCombinerParameters(policyCombinerParameters) {
        this._policyCombinerParameters = policyCombinerParameters;
    }
    getPolicySetCombinerParameters() {
        return this._policySetCombinerParameters;
    }
    set policySetCombinerParameters(policySetCombinerParameters) {
        this._policySetCombinerParameters = policySetCombinerParameters;
    }
    getObligationExpressions() {
        return this._obligationExpressions;
    }
    set obligationExpressions(obligationExpressions) {
        this._obligationExpressions = obligationExpressions;
    }
    getAdviceExpressions() {
        return this._adviceExpressions;
    }
    set adviceExpressions(adviceExpressions) {
        this._adviceExpressions = adviceExpressions;
    }
    getMaxDelegationDepth() {
        return this._maxDelegationDepth;
    }
    set maxDelegationDepth(maxDepth) {
        this._maxDelegationDepth = maxDepth;
    }
    evaluateTarget(request) {
    }
    createPolicySetFromJSON(json) {
    }
    getCombiningAlgorithm(request) {
        if (this._policy) {
            switch (this._policyCombiningAlgId) {
                case PolicyAlgorithms_1.DENY_OVERRIDES:
                    return (0, DenyOverrides_1.denyOverridesCombiningAlgorithm)(request, this._policy);
                case PolicyAlgorithms_1.DENY_UNLESS_PERMIT:
                    return (0, DenyUnlessPermit_1.denyUnlessPermitCombiningAlgorithm)(request, this._policy);
                case PolicyAlgorithms_1.FIRST_APPLICABLE:
                    return (0, FirstApplicable_1.firstApplicableEffectRuleCombiningAlgorithm)(request, this._policy);
                case PolicyAlgorithms_1.ONLY_ONE_APPLICABLE:
                    return (0, OnlyOneApplicable_1.onlyOneApplicablePolicyPolicyCombiningAlogrithm)(request, this._policy);
                case PolicyAlgorithms_1.ONLY_ONE_APPLICABLE:
                    return (0, OnlyOneApplicable_1.onlyOneApplicablePolicyPolicyCombiningAlogrithm)(request, this._policy);
                /*case ORDERED_DENY_OVERRIDES:
                    return OrderedDenyOverridesCombiningAlgorithm(request, this._policy);
                case ORDERED_PERMIT_OVERRIDES:
                    return OrderedPermitOverridesCombiningAlgorithm(request, this._policy);*/
                case PolicyAlgorithms_1.PERMIT_OVERRIDES:
                    return (0, PermitOverrides_1.permitOverridesCombiningAlgorithm)(request, this._policy);
                case PolicyAlgorithms_1.PERMIT_UNLESS_DENY:
                    return (0, PermitUnlessDeny_1.permitUnlessDenyCombiningAlgorithm)(request, this._policy);
                default:
                    break;
            }
        }
    }
}
//# sourceMappingURL=PolicySet.js.map