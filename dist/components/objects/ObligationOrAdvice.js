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
exports.ObligationOrAdvice = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let ObligationOrAdvice = class ObligationOrAdvice {
    constructor(id, attributeAssignment) {
        this._id = id;
        this._attributeAssignment = attributeAssignment;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    getAttributeAssignment() {
        return this._attributeAssignment;
    }
    set attributeAssignment(attributeAssignments) {
        this._attributeAssignment = attributeAssignments;
    }
};
exports.ObligationOrAdvice = ObligationOrAdvice;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Id', required: true }),
    __metadata("design:type", String)
], ObligationOrAdvice.prototype, "_id", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeAssignment', required: false }),
    __metadata("design:type", Array)
], ObligationOrAdvice.prototype, "_attributeAssignment", void 0);
exports.ObligationOrAdvice = ObligationOrAdvice = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Array])
], ObligationOrAdvice);
//# sourceMappingURL=ObligationOrAdvice.js.map