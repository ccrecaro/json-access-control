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
exports.Status = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
const StatusCode_1 = require("./StatusCode");
let Status = class Status {
    constructor(statusMessage, statusDetail, statusCode) {
        this._message = statusMessage;
        this._detail = statusDetail;
        this._code = statusCode;
    }
    getMessage() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
    getDetail() {
        return this._detail;
    }
    set detail(detail) {
        this._detail = detail;
    }
    getCode() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
};
exports.Status = Status;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'StatusMessage', required: false }),
    __metadata("design:type", String)
], Status.prototype, "_message", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'StatusDetail', required: false }),
    __metadata("design:type", Object)
], Status.prototype, "_detail", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'StatusCode', required: false }),
    __metadata("design:type", StatusCode_1.StatusCode)
], Status.prototype, "_code", void 0);
exports.Status = Status = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Object, StatusCode_1.StatusCode])
], Status);
//# sourceMappingURL=Status.js.map