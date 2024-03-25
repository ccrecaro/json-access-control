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
exports.RequestCtx = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let RequestCtx = class RequestCtx {
    // si el xPath no existe pasar un undefined
    constructor(returnPolicyIdList = false, combinedDecision = false, xPathVersion, category) {
        this._returnPolicyIdList = returnPolicyIdList;
        this._combinedDecision = combinedDecision;
        this._xPathVersion = xPathVersion;
        this._category = category;
    }
    get returnPolicyIdList() {
        return this._returnPolicyIdList;
    }
    set returnPolicyIdList(shouldReturn) {
        this._returnPolicyIdList = shouldReturn;
    }
    get combinedDecision() {
        return this._combinedDecision;
    }
    set combinedDecision(isCombinedDecision) {
        this._combinedDecision = isCombinedDecision;
    }
    getXPathVersion() {
        return this._xPathVersion;
    }
    set xPathVersion(version) {
        this._xPathVersion = version;
    }
    getCategory() {
        return this._category || undefined;
    }
    set category(categories) {
        this._category = categories;
    }
    getAttributeWithType(type, id, issuer, category) {
        let values = [];
        if (this._category) {
            for (let categoryElement of this._category) {
                let attributesFound = categoryElement.findAttribute(type, id, issuer, category);
                for (let attribute of attributesFound) {
                    values.push(attribute.value);
                }
            }
        }
        return new EvaluationResult(false, values, type, null, null);
    }
};
exports.RequestCtx = RequestCtx;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'ReturnPolicyIdList', required: true }),
    __metadata("design:type", Boolean)
], RequestCtx.prototype, "_returnPolicyIdList", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'CombinedDecision', required: true }),
    __metadata("design:type", Boolean)
], RequestCtx.prototype, "_combinedDecision", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'XPathVersion', required: false }),
    __metadata("design:type", String)
], RequestCtx.prototype, "_xPathVersion", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: false }),
    __metadata("design:type", Array)
], RequestCtx.prototype, "_category", void 0);
exports.RequestCtx = RequestCtx = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [Boolean, Boolean, String, Array])
], RequestCtx);
//# sourceMappingURL=RequestCtx.js.map