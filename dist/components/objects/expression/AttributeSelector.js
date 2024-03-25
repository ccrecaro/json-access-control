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
exports.AttributeSelector = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let AttributeSelector = class AttributeSelector {
    constructor(category, path, dataType, mustBePresent, contextSelectorId) {
        this._mustBePresent = false;
        this._category = category;
        this._path = path;
        this._dataType = dataType;
        this._mustBePresent = mustBePresent;
        this._contextSelectorId = contextSelectorId;
    }
    get category() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    get path() {
        return this._path;
    }
    set path(path) {
        this._path = path;
    }
    get dataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    get mustBePresent() {
        return this._mustBePresent;
    }
    set mustBePresent(mustBePresent) {
        this._mustBePresent = mustBePresent;
    }
    getContextSelectorId() {
        return this._contextSelectorId;
    }
    set contextSelectorId(id) {
        this._contextSelectorId = id;
    }
    evaluate(request) {
        return null;
    }
};
exports.AttributeSelector = AttributeSelector;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: true }),
    __metadata("design:type", String)
], AttributeSelector.prototype, "_category", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Path', required: true }),
    __metadata("design:type", String)
], AttributeSelector.prototype, "_path", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: true }),
    __metadata("design:type", String)
], AttributeSelector.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'MustBePresent', required: true }),
    __metadata("design:type", Boolean)
], AttributeSelector.prototype, "_mustBePresent", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'ContextSelectorId', required: false }),
    __metadata("design:type", String)
], AttributeSelector.prototype, "_contextSelectorId", void 0);
exports.AttributeSelector = AttributeSelector = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, String, Boolean, String])
], AttributeSelector);
//# sourceMappingURL=AttributeSelector.js.map