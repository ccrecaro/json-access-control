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
exports.Match = void 0;
const AttributeDesignator_1 = require("../expression/AttributeDesignator");
const functionEvaluator_1 = require("../../../services/functions/functionEvaluator");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let Match = class Match {
    constructor(matchId, evaluator /*| AttributeSelector*/, value, dataType, xPathCategory) {
        this._matchId = matchId;
        this._evaluator = evaluator;
        this._value = value;
        this._dataType = dataType;
        this._xPathCategory = xPathCategory;
    }
    get matchId() {
        return this._matchId;
    }
    set matchId(id) {
        this._matchId = id;
    }
    getValue() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    getDataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    getXPathCategory() {
        return this._xPathCategory;
    }
    set xPathCategory(xPathCategory) {
        this._xPathCategory = xPathCategory;
    }
    getEvaluator() {
        return this._evaluator;
    }
    set evaluator(evaluator /*| AttributeSelector*/) {
        this._evaluator = evaluator;
    }
    match(request) {
        var atLeastOneError = false;
        var result = this._evaluator.evaluate(request);
        if (result) {
            if (result.isIndeterminate) {
                return MatchResult.INDETERMINATE;
            }
            var resultValue = result.value; //recordar que pueden ser arrays
            var bag = Array.isArray(resultValue) ? resultValue : [resultValue];
            if (bag.length != 0) {
                let atLeastOneError = false;
                let firstIndeterminateStatus = null;
                for (let element of bag) {
                    let inputs = [this.value, element];
                    let match = this.evaluateMatch(inputs, request);
                    // we only need one match for this whole thing to match
                    if (match == MatchResult.MATCH) {
                        return match;
                    }
                    // if it was INDETERMINATE, we want to remember for later
                    if (match == MatchResult.INDETERMINATE) {
                        atLeastOneError = true;
                    }
                }
                // if we got here, then nothing matched, so we'll either return
                // INDETERMINATE or NO_MATCH
                if (atLeastOneError)
                    return MatchResult.INDETERMINATE;
                else
                    return MatchResult.NO_MATCH;
            }
            else {
                return MatchResult.NO_MATCH;
            }
        }
        return MatchResult.ERROR;
    }
    evaluateMatch(inputs, request) {
        // first off, evaluate the function
        var result = (0, functionEvaluator_1.functionEvaluator)(this.matchId, inputs, request);
        var bool = false;
        // if it was indeterminate, then that's what we return immediately
        if (result.isIndeterminate)
            return MatchResult.INDETERMINATE;
        // otherwise, we figure out if it was a match
        if (typeof result.value == "boolean") {
            bool = result.value;
        }
        if (bool)
            return MatchResult.MATCH;
        else
            return MatchResult.NO_MATCH;
    }
};
exports.Match = Match;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'MatchId', required: true }),
    __metadata("design:type", String)
], Match.prototype, "_matchId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeDesignator', required: true }),
    __metadata("design:type", AttributeDesignator_1.AttributeDesignator /*| AttributeSelector*/)
], Match.prototype, "_evaluator", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Value', required: false }),
    __metadata("design:type", Object)
], Match.prototype, "_value", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: false }),
    __metadata("design:type", String)
], Match.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'XPathCategory', required: false }),
    __metadata("design:type", String)
], Match.prototype, "_xPathCategory", void 0);
exports.Match = Match = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, AttributeDesignator_1.AttributeDesignator /*| AttributeSelector*/, Object, String, String])
], Match);
//# sourceMappingURL=Match.js.map