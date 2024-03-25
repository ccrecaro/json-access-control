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
exports.Result = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
const Status_1 = require("./Status");
let Result = class Result {
    constructor(decision, status, obligations, associatedAdvice, category, policyIdentifierList) {
        this._decision = decision;
        this._status = status;
        this._obligations = obligations;
        this._associatedAdvice = associatedAdvice;
        this._category = category;
        this._policyIdentifierList = policyIdentifierList;
    }
    get decision() {
        return this._decision;
    }
    set decision(decision) {
        this._decision = decision;
    }
    getStatus() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    getObligations() {
        return this._obligations;
    }
    set obligations(obligations) {
        this._obligations = obligations;
    }
    getAssociatedAdvice() {
        return this._associatedAdvice;
    }
    set associatedAdvice(advices) {
        this._associatedAdvice = advices;
    }
    getCategory() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    getPolicyIdentifierList() {
        return this._policyIdentifierList;
    }
    set policyIdentifierList(policyIdentifierList) {
        this._policyIdentifierList = policyIdentifierList;
    }
};
exports.Result = Result;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Decision', required: true }),
    __metadata("design:type", String)
], Result.prototype, "_decision", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Status', required: false }),
    __metadata("design:type", Status_1.Status)
], Result.prototype, "_status", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Obligations', required: false }),
    __metadata("design:type", Array)
], Result.prototype, "_obligations", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AssociatedAdvice', required: false }),
    __metadata("design:type", Array)
], Result.prototype, "_associatedAdvice", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: false }),
    __metadata("design:type", Object)
], Result.prototype, "_category", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'PolicyIdentifierList', required: false }),
    __metadata("design:type", Array)
], Result.prototype, "_policyIdentifierList", void 0);
exports.Result = Result = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Status_1.Status, Array, Array, Object, Array])
], Result);
//# sourceMappingURL=Result.js.map