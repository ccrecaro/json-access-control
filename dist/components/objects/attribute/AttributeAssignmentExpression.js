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
exports.AttributeAssignmentExpression = void 0;
const AttributeAssignment_1 = require("./AttributeAssignment");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let AttributeAssignmentExpression = class AttributeAssignmentExpression {
    constructor(expression, attributeId, category, issuer) {
        this._expression = expression;
        this._attributeId = attributeId;
        this._category = category;
        this._issuer = issuer;
    }
    get expression() {
        return this._expression;
    }
    set expression(expression) {
        this._expression = expression;
    }
    get attributeId() {
        return this._attributeId;
    }
    set attributeId(id) {
        this._attributeId = id;
    }
    getCategory() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    getIssuer() {
        return this._issuer;
    }
    set issuer(issuer) {
        this._issuer = issuer;
    }
    evaluate(request) {
        var values = new Set();
        var result = this.expression.evaluate(request);
        if (result == null || result.isIndeterminate) {
            return null;
        }
        var attributeValue = result.value;
        if (attributeValue) {
            if (Array.isArray(attributeValue)) {
                if (attributeValue.length > 0) {
                    for (let value of attributeValue) {
                        let assignment = new AttributeAssignment_1.AttributeAssignment(this.attributeId, value, this._category, typeof value, this._issuer);
                        values.add(assignment);
                    }
                }
                else {
                    return null;
                }
            }
            else {
                let assignment = new AttributeAssignment_1.AttributeAssignment(this.attributeId, attributeValue, this._category, typeof attributeValue, this._issuer);
                values.add(assignment);
            }
        }
        return null;
    }
};
exports.AttributeAssignmentExpression = AttributeAssignmentExpression;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Expression', required: true }),
    __metadata("design:type", Object)
], AttributeAssignmentExpression.prototype, "_expression", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeId', required: true }),
    __metadata("design:type", String)
], AttributeAssignmentExpression.prototype, "_attributeId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: false }),
    __metadata("design:type", String)
], AttributeAssignmentExpression.prototype, "_category", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Issuer', required: false }),
    __metadata("design:type", String)
], AttributeAssignmentExpression.prototype, "_issuer", void 0);
exports.AttributeAssignmentExpression = AttributeAssignmentExpression = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [Object, String, String, String])
], AttributeAssignmentExpression);
//# sourceMappingURL=AttributeAssignmentExpression.js.map