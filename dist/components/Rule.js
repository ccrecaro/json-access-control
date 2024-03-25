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
exports.Rule = void 0;
const Target_1 = require("./objects/targetElements/Target");
const Result_1 = require("./objects/Result");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let Rule = class Rule {
    constructor(ruleId, effect, description, target, condition, obligationExpressions, adviceExpressions) {
        this._ruleId = ruleId;
        this._effect = effect;
        this._description = description;
        this._target = target;
        this._condition = condition;
        this._obligationExpressions = obligationExpressions;
        this._adviceExpressions = adviceExpressions;
    }
    get ruleId() {
        return this._ruleId;
    }
    set ruleId(id) {
        this._ruleId = id;
    }
    get effect() {
        return this._effect;
    }
    set effect(effect) {
        this._effect = effect;
    }
    getDescription() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    getTarget() {
        return this._target;
    }
    set target(target) {
        this._target = target;
    }
    getCondition() {
        return this._condition;
    }
    set condition(condition) {
        this._condition = condition;
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
    evaluate(request) {
        var match;
        if (this._target) {
            match = this._target.match(request);
            if (match == MatchResult.NO_MATCH) {
                return new Result_1.Result(DecisionResult.NOT_APPLICABLE);
            }
            if (match == MatchResult.INDETERMINATE) {
                if (this._effect == "Permit") {
                    return new Result_1.Result(DecisionResult.INDETERMINATE_P);
                }
                else {
                    return new Result_1.Result(DecisionResult.INDETERMINATE_D);
                }
            }
        }
        if (this._condition == null) {
            return new Result_1.Result(this._effect, undefined, this.processObligationsAndAdvices(request, this._obligationExpressions), this.processObligationsAndAdvices(request, this._adviceExpressions));
        }
        var result = this._condition.evaluate(request);
        if (result) {
            if (result._isIndeterminate) {
                if (this._effect == "Permit") {
                    return new Result_1.Result(DecisionResult.INDETERMINATE_P);
                }
                else {
                    return new Result_1.Result(DecisionResult.INDETERMINATE_D);
                }
            }
            else {
                if (typeof result.value == "boolean") {
                    if (result.value) {
                        return new Result_1.Result(this._effect, undefined, this.processObligationsAndAdvices(request, this._obligationExpressions), this.processObligationsAndAdvices(request, this._adviceExpressions));
                    }
                    else {
                        return new Result_1.Result(DecisionResult.NOT_APPLICABLE);
                    }
                }
                return new Result_1.Result(DecisionResult.NOT_APPLICABLE);
            }
        }
        else {
            return new Result_1.Result(DecisionResult.NOT_APPLICABLE);
        }
    }
    processObligationsAndAdvices(request, obligationOrAdviceExpression) {
        if (obligationOrAdviceExpression != null && obligationOrAdviceExpression.length > 0) {
            var results = [];
            for (let expression of obligationOrAdviceExpression) {
                if (expression.fulfillOnOrAppliesTo == this._effect) {
                    results.push(expression.evaluate(request));
                }
            }
            return results;
        }
        return undefined;
    }
};
exports.Rule = Rule;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'RuleId', required: true }),
    __metadata("design:type", String)
], Rule.prototype, "_ruleId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Effect', required: true }),
    __metadata("design:type", String)
], Rule.prototype, "_effect", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Description', required: false }),
    __metadata("design:type", String)
], Rule.prototype, "_description", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Target', required: false }),
    __metadata("design:type", Target_1.Target)
], Rule.prototype, "_target", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Condition', required: false }),
    __metadata("design:type", Object)
], Rule.prototype, "_condition", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'ObligationExpressions', required: false }),
    __metadata("design:type", Array)
], Rule.prototype, "_obligationExpressions", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AdviceExpressions', required: false }),
    __metadata("design:type", Array)
], Rule.prototype, "_adviceExpressions", void 0);
exports.Rule = Rule = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, String, Target_1.Target, Object, Array, Array])
], Rule);
//# sourceMappingURL=Rule.js.map