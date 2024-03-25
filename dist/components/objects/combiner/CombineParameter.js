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
exports.CombinerParameter = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let CombinerParameter = class CombinerParameter {
    constructor(parameterName, dataType, value) {
        this._parameterName = parameterName;
        this._dataType = dataType;
        this._value = value;
    }
    get parameterName() {
        return this._parameterName;
    }
    set parameterName(name) {
        this._parameterName = name;
    }
    getDataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    getValue() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
};
exports.CombinerParameter = CombinerParameter;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'ParameterName', required: true }),
    __metadata("design:type", String)
], CombinerParameter.prototype, "_parameterName", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: true }),
    __metadata("design:type", String)
], CombinerParameter.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Value', required: false }),
    __metadata("design:type", Object)
], CombinerParameter.prototype, "_value", void 0);
exports.CombinerParameter = CombinerParameter = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, Object])
], CombinerParameter);
//# sourceMappingURL=CombineParameter.js.map