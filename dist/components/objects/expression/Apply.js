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
exports.Apply = void 0;
const FunctionEx_1 = require("./FunctionEx");
const typescript_json_serializer_1 = require("typescript-json-serializer");
let Apply = class Apply {
    constructor(functionId, description, expression) {
        this._functionId = functionId;
        this._description = description;
        this._expression = expression;
    }
    get functionId() {
        return this._functionId;
    }
    set functionId(id) {
        this._functionId = id;
    }
    getDescription() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    getExpression() {
        return this._expression;
    }
    set expression(expressions) {
        this._expression = expressions;
    }
    evaluate(request) {
        var fnc = new FunctionEx_1.FunctionEx(this._functionId);
        return fnc.evaluateFunction(this._expression, request);
    }
};
exports.Apply = Apply;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'FunctionId', required: true }),
    __metadata("design:type", String)
], Apply.prototype, "_functionId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Description', required: false }),
    __metadata("design:type", String)
], Apply.prototype, "_description", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Expression', required: false }),
    __metadata("design:type", Array)
], Apply.prototype, "_expression", void 0);
exports.Apply = Apply = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, Array])
], Apply);
//# sourceMappingURL=Apply.js.map