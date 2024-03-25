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
exports.PolicyIssuer = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let PolicyIssuer = class PolicyIssuer {
    constructor(content, attribute) {
        this._content = content;
        this._attribute = attribute;
    }
    getContent() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    getAttribute() {
        return this.attribute;
    }
    set attribute(attribute) {
        this._attribute = attribute;
    }
};
exports.PolicyIssuer = PolicyIssuer;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Content', required: false }),
    __metadata("design:type", String)
], PolicyIssuer.prototype, "_content", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Attribute', required: false }),
    __metadata("design:type", Array)
], PolicyIssuer.prototype, "_attribute", void 0);
exports.PolicyIssuer = PolicyIssuer = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, Array])
], PolicyIssuer);
//# sourceMappingURL=PolicyIssuer.js.map