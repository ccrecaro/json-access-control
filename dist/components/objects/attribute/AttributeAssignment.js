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
exports.AttributeAssignment = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let AttributeAssignment = class AttributeAssignment {
    constructor(attributeId, value, category, dataType, issuer) {
        this._attributeId = attributeId;
        this._value = value;
        this._category = category;
        this._dataType = dataType;
        this._issuer = issuer;
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
    getCategory() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    getDataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    getIssuer() {
        return this._issuer;
    }
    set issuer(issuer) {
        this._issuer = issuer;
    }
};
exports.AttributeAssignment = AttributeAssignment;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeId', required: true }),
    __metadata("design:type", String)
], AttributeAssignment.prototype, "_attributeId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Value', required: true }),
    __metadata("design:type", Object)
], AttributeAssignment.prototype, "_value", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: false }),
    __metadata("design:type", String)
], AttributeAssignment.prototype, "_category", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: false }),
    __metadata("design:type", String)
], AttributeAssignment.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Issuer', required: false }),
    __metadata("design:type", String)
], AttributeAssignment.prototype, "_issuer", void 0);
exports.AttributeAssignment = AttributeAssignment = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Object, String, String, String])
], AttributeAssignment);
//# sourceMappingURL=AttributeAssignment.js.map