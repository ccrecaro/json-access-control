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
exports.Attribute = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
const EvaluationResult_1 = require("../result/EvaluationResult");
let Attribute = class Attribute {
    constructor(attributeId, value, dataType = "string", issuer, includeInResult) {
        this._dataType = "string";
        this._attributeId = attributeId;
        this._value = value;
        this._issuer = issuer;
        this._dataType = dataType;
        this._includeInResult = includeInResult;
    }
    get attributeId() {
        return this._attributeId;
    }
    set attributeId(id) {
        this._attributeId = id;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    getIssuer() {
        return this._issuer;
    }
    set issuer(issuer) {
        this._issuer = issuer;
    }
    getDataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    getIncludeInResult() {
        return this._includeInResult;
    }
    set includeInResult(include) {
        this._includeInResult = include;
    }
    evaluate(request) {
        return new EvaluationResult_1.EvaluationResult(false, this._value, this._dataType, null, null);
    }
    isSearchedAttribute(type, id, issuer) {
        return this._dataType == type &&
            this._attributeId == id &&
            this._issuer == issuer;
    }
};
exports.Attribute = Attribute;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeId', required: true }),
    __metadata("design:type", String)
], Attribute.prototype, "_attributeId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Value', required: true }),
    __metadata("design:type", Object)
], Attribute.prototype, "_value", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: true }),
    __metadata("design:type", String)
], Attribute.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Issuer', required: false }),
    __metadata("design:type", String)
], Attribute.prototype, "_issuer", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'IncludeInResult', required: false }),
    __metadata("design:type", Boolean)
], Attribute.prototype, "_includeInResult", void 0);
exports.Attribute = Attribute = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Object, String, String, Boolean])
], Attribute);
//# sourceMappingURL=Attribute.js.map