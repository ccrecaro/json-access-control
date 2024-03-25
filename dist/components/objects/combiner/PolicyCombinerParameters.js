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
exports.PolicyCombinerParameters = void 0;
const CombinerParameters_1 = require("./CombinerParameters");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let PolicyCombinerParameters = class PolicyCombinerParameters extends CombinerParameters_1.CombinerParameters {
    constructor(policyIdRef, combinerParameter) {
        super(combinerParameter);
        this._policyIdRef = policyIdRef;
    }
    get policyIdRef() {
        return this._policyIdRef;
    }
    set policyIdRef(id) {
        this._policyIdRef = id;
    }
};
exports.PolicyCombinerParameters = PolicyCombinerParameters;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicyIdRef', required: true }),
    __metadata("design:type", String)
], PolicyCombinerParameters.prototype, "_policyIdRef", void 0);
exports.PolicyCombinerParameters = PolicyCombinerParameters = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Array])
], PolicyCombinerParameters);
//# sourceMappingURL=PolicyCombinerParameters.js.map