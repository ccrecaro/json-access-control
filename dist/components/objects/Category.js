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
exports.Category = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let Category = class Category {
    constructor(categoryId, id, content, attribute) {
        this._categoryId = categoryId;
        this._id = id;
        this._content = content;
        this._attribute = attribute;
    }
    get categoryId() {
        return this._categoryId;
    }
    set categoryId(id) {
        this._categoryId = id;
    }
    getId() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    getContent() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    getAttribute() {
        return this._attribute;
    }
    set attribute(attribute) {
        this._attribute = attribute;
    }
    findAttribute(type, id, issuer, category) {
        var attributeResult = [];
        if (this._categoryId == category && this._attribute) {
            for (let attribute of this._attribute) {
                if (attribute.isSearchedAttribute(type, id, issuer))
                    attributeResult.push(attribute);
            }
        }
        return attributeResult;
    }
};
exports.Category = Category;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'CategoryId', required: true }),
    __metadata("design:type", String)
], Category.prototype, "_categoryId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Id', required: false }),
    __metadata("design:type", String)
], Category.prototype, "_id", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Content', required: false }),
    __metadata("design:type", String)
], Category.prototype, "_content", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Attribute', required: false }),
    __metadata("design:type", Array)
], Category.prototype, "_attribute", void 0);
exports.Category = Category = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, String, Array])
], Category);
//# sourceMappingURL=Category.js.map