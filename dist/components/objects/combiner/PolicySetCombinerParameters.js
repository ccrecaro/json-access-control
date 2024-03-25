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
exports.PolicySetCombinerParameters = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
const CombinerParameters_1 = require("./CombinerParameters");
let PolicySetCombinerParameters = class PolicySetCombinerParameters extends CombinerParameters_1.CombinerParameters {
    constructor(policySetIdRef, combinerParameter) {
        super(combinerParameter);
        this._policySetIdRef = policySetIdRef;
    }
    get policySetIdRef() {
        return this._policySetIdRef;
    }
    set policySetIdRef(id) {
        this._policySetIdRef = id;
    }
};
exports.PolicySetCombinerParameters = PolicySetCombinerParameters;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicySetIdRef', required: true }),
    __metadata("design:type", String)
], PolicySetCombinerParameters.prototype, "_policySetIdRef", void 0);
exports.PolicySetCombinerParameters = PolicySetCombinerParameters = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Array])
], PolicySetCombinerParameters);
//# sourceMappingURL=PolicySetCombinerParameters.js.map