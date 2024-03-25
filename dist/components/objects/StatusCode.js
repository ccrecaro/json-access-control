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
exports.StatusCode = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let StatusCode = class StatusCode {
    constructor(value, subStatusCode) {
        this._value = value;
        this._subStatusCode = subStatusCode;
    }
    getValue() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    getSubStatusCode() {
        return this._subStatusCode;
    }
    set subStatusCode(subStatusCode) {
        this._subStatusCode = subStatusCode;
    }
};
exports.StatusCode = StatusCode;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Value', required: false }),
    __metadata("design:type", String)
], StatusCode.prototype, "_value", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'SubStatusCode', required: false }),
    __metadata("design:type", Array)
], StatusCode.prototype, "_subStatusCode", void 0);
exports.StatusCode = StatusCode = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Array])
], StatusCode);
//# sourceMappingURL=StatusCode.js.map