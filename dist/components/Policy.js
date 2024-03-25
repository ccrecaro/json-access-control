"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
const PolicyAlgorithms_1 = require("../constants/PolicyAlgorithms");
const RuleAlgorithms_1 = require("../constants/RuleAlgorithms");
const DenyOverrides_1 = require("../services/combiningAlgorithms/DenyOverrides");
const DenyUnlessPermit_1 = require("../services/combiningAlgorithms/DenyUnlessPermit");
const FirstApplicable_1 = require("../services/combiningAlgorithms/FirstApplicable");
const PermitOverrides_1 = require("../services/combiningAlgorithms/PermitOverrides");
const PermitUnlessDeny_1 = require("../services/combiningAlgorithms/PermitUnlessDeny");
const IdReference_1 = require("./objects/IdReference");
const PolicyIdentifier_1 = require("./objects/PolicyIdentifier");
const PolicyIssuer_1 = require("./objects/PolicyIssuer");
const Result_1 = require("./objects/Result");
const ResponseCtx_1 = require("./objects/architecture/context/ResponseCtx");
const Target_1 = require("./objects/targetElements/Target");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let Policy = class Policy {
    constructor(policyId, version, ruleCombiningAlgId, target, description, policyIssuer, policyDefaults, combinerParameters, ruleCombinerParameters, variableDefinition, rule, obligationExpressions, adviceExpressions, maxDelegationDepth) {
        this._policyId = policyId;
        this._version = version;
        this._ruleCombiningAlgId = ruleCombiningAlgId;
        this._target = target;
        this._description = description;
        this._policyIssuer = policyIssuer;
        this._policyDefaults = policyDefaults;
        this._combinerParameters = combinerParameters;
        this._ruleCombinerParameters = ruleCombinerParameters;
        this._variableDefinition = variableDefinition;
        this._rule = rule;
        this._obligationExpressions = obligationExpressions;
        this._adviceExpressions = adviceExpressions;
        this._maxDelegationDepth = maxDelegationDepth;
    }
    get policyId() {
        return this._policyId;
    }
    set policyId(id) {
        this._policyId = id;
    }
    get version() {
        return this._version;
    }
    set version(version) {
        this._version = version;
    }
    get ruleCombiningAlgId() {
        return this._ruleCombiningAlgId;
    }
    set ruleCombiningAlgId(id) {
        this._ruleCombiningAlgId = id;
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
    getPolicyDefaults() {
        return this._policyDefaults;
    }
    set policyDefaults(policyDefaults) {
        this._policyDefaults = policyDefaults;
    }
    getCombinerParameters() {
        return this._combinerParameters;
    }
    set combinerParameters(combinerParameters) {
        this._combinerParameters = combinerParameters;
    }
    getRuleCombinerParameters() {
        return this._ruleCombinerParameters;
    }
    set ruleCombinerParameters(ruleCombinerParameters) {
        this._ruleCombinerParameters = ruleCombinerParameters;
    }
    getVariableDefinition() {
        return this._variableDefinition;
    }
    set variableDefinition(variableDefinition) {
        this._variableDefinition = variableDefinition;
    }
    getRule() {
        return this._rule;
    }
    set rule(rules) {
        this._rule = rules;
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
    evaluate(request) {
        var decisionResult = this.getCombiningAlgorithm(request);
        if (this._obligationExpressions && this._obligationExpressions.length < 1
            && this._adviceExpressions && this._adviceExpressions.length < 1) {
            return new ResponseCtx_1.ResponseCtx([new Result_1.Result(decisionResult)]);
        }
        if (this.isIndeterminate(decisionResult) || decisionResult == DecisionResult.NOT_APPLICABLE) {
            return new ResponseCtx_1.ResponseCtx([new Result_1.Result(decisionResult)]);
        }
        var idReference = new IdReference_1.IdReference(this._policyId, this._version);
        var policyIdentifier = new PolicyIdentifier_1.PolicyIdentifier([idReference]);
        var initialResult = new Result_1.Result(decisionResult, undefined, undefined, undefined, undefined, [policyIdentifier]);
        var response = new ResponseCtx_1.ResponseCtx([initialResult]);
        return this.processObligationAndAdvices(request, decisionResult, response);
    }
    getCombiningAlgorithm(request) {
        if (this._rule) {
            switch (this._ruleCombiningAlgId) {
                case RuleAlgorithms_1.DENY_OVERRIDES:
                    return (0, DenyOverrides_1.denyOverridesCombiningAlgorithm)(request, this._rule);
                case RuleAlgorithms_1.DENY_UNLESS_PERMIT:
                    return (0, DenyUnlessPermit_1.denyUnlessPermitCombiningAlgorithm)(request, this._rule);
                case RuleAlgorithms_1.FIRST_APPLICABLE:
                    return (0, FirstApplicable_1.firstApplicableEffectRuleCombiningAlgorithm)(request, this._rule);
                /*case ORDERED_DENY_OVERRIDES:
                    return OrderedDenyOverridesCombiningAlgorithm(request, this._rule);
                case ORDERED_PERMIT_OVERRIDES:
                    return OrderedPermitOverridesCombiningAlgorithm(request, this._rule);*/
                case PolicyAlgorithms_1.PERMIT_OVERRIDES:
                    return (0, PermitOverrides_1.permitOverridesCombiningAlgorithm)(request, this._rule);
                case RuleAlgorithms_1.PERMIT_UNLESS_DENY:
                    return (0, PermitUnlessDeny_1.permitUnlessDenyCombiningAlgorithm)(request, this._rule);
                default:
                    return DecisionResult.INDETERMINATE;
            }
        }
        return DecisionResult.INDETERMINATE;
    }
    match(request) {
        return this.target.match(request);
    }
    isIndeterminate(result) {
        switch (result) {
            case DecisionResult.INDETERMINATE:
            case DecisionResult.INDETERMINATE_DP:
            case DecisionResult.INDETERMINATE_D:
            case DecisionResult.INDETERMINATE_P:
                return true;
            default:
                return false;
        }
    }
    processObligationAndAdvices(request, effect, response) {
        var results = new Set();
        if (this._obligationExpressions != null && this._obligationExpressions.length > 0) {
            for (let obligationExpression of this._obligationExpressions) {
                if (obligationExpression.fulfillOnOrAppliesTo == effect) {
                    results.add(obligationExpression.evaluate(request));
                }
            }
            response.result[0].obligations = [...results];
        }
        if (this._adviceExpressions != null && this._adviceExpressions.length > 0) {
            for (let adviceExpression of this._adviceExpressions) {
                if (adviceExpression.fulfillOnOrAppliesTo == effect) {
                    results.add(adviceExpression.evaluate(request));
                }
            }
            response.result[0].obligations = [...results];
        }
        return response;
    }
};
exports.Policy = Policy;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicyId', required: true }),
    __metadata("design:type", String)
], Policy.prototype, "_policyId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Version', required: true }),
    __metadata("design:type", String)
], Policy.prototype, "_version", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'RuleCombiningAlgId', required: true }),
    __metadata("design:type", String)
], Policy.prototype, "_ruleCombiningAlgId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Target', required: true }),
    __metadata("design:type", Target_1.Target)
], Policy.prototype, "_target", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Version', required: false }),
    __metadata("design:type", String)
], Policy.prototype, "_description", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicyIssuer', required: false }),
    __metadata("design:type", PolicyIssuer_1.PolicyIssuer)
], Policy.prototype, "_policyIssuer", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicyDefaults', required: false }),
    __metadata("design:type", String)
], Policy.prototype, "_policyDefaults", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'CombinerParameters', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_combinerParameters", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'RuleCombinerParameters', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_ruleCombinerParameters", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'VariableDefinition', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_variableDefinition", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Rule', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_rule", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'ObligationExpressions', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_obligationExpressions", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AdviceExpressions', required: false }),
    __metadata("design:type", Array)
], Policy.prototype, "_adviceExpressions", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'MaxDelegationDepth', required: false }),
    __metadata("design:type", Number)
], Policy.prototype, "_maxDelegationDepth", void 0);
exports.Policy = Policy = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, String, Target_1.Target, String, PolicyIssuer_1.PolicyIssuer, String, Array, Array, Array, Array, Array, Array, Number])
], Policy);
//# sourceMappingURL=Policy.js.map