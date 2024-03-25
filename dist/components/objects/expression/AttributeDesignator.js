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
exports.AttributeDesignator = void 0;
const Status_1 = require("../../../constants/Status");
const typescript_json_serializer_1 = require("typescript-json-serializer");
const MissingAttributeDetail_1 = require("../MissingAttributeDetail");
const StatusCode_1 = require("../StatusCode");
const Status_2 = require("../Status");
let AttributeDesignator = class AttributeDesignator {
    constructor(attributeId, category, dataType, mustBePresent, issuer) {
        this._mustBePresent = false; //recordar seccion 7.3.5
        this._attributeId = attributeId;
        this._category = category;
        this._dataType = dataType;
        this._mustBePresent = mustBePresent;
        this._issuer = issuer;
    }
    get attributeId() {
        return this._attributeId;
    }
    set attributeId(id) {
        this._attributeId = id;
    }
    get category() {
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
    evaluate(request) {
        let result;
        // look in  attribute values
        result = request.getAttributeWithType(this._dataType, this._attributeId, this._issuer, this._category);
        // if the lookup was indeterminate, then we return immediately
        if (result.isIndeterminate) {
            return result;
        }
        var resultValue = result.value; //recordar que pueden ser arrays
        var bag = Array.isArray(resultValue) ? resultValue : [resultValue];
        // si no existe, debo ver si el campo debe estar presente
        if (bag.length == 0) {
            if (this.mustBePresent) {
                //If MustBePresent is “True”, then a missing attribute SHALL result in “Indeterminate”
                console.log("AttributeDesignator failed to resolve a "
                    + "value for a required attribute: " + this.attributeId);
                let code = Status_1.STATUS_MISSING_ATTRIBUTE;
                let missingAttributes = [];
                let missingAttribute = new MissingAttributeDetail_1.MissingAttributeDetail(this.attributeId, this.category, [], this.issuer, this.dataType);
                missingAttributes.push(missingAttribute);
                const message = "Couldn't find AttributeDesignator attribute";
                let statusCode = new StatusCode_1.StatusCode(code, undefined);
                let status = new Status_2.Status(message, message, statusCode);
                result.isIndeterminate = true;
                result.matchResult = MatchResult.INDETERMINATE;
                result.status = status;
                return result;
            } // si this.mustBePresent == false, retorno la bag vacia
        }
        return result;
    }
};
exports.AttributeDesignator = AttributeDesignator;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AttributeId', required: true }),
    __metadata("design:type", String)
], AttributeDesignator.prototype, "_attributeId", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Category', required: true }),
    __metadata("design:type", String)
], AttributeDesignator.prototype, "_category", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'DataType', required: true }),
    __metadata("design:type", String)
], AttributeDesignator.prototype, "_dataType", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'MustBePresent', required: true }),
    __metadata("design:type", Boolean)
], AttributeDesignator.prototype, "_mustBePresent", void 0);
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Issuer', required: true }),
    __metadata("design:type", String)
], AttributeDesignator.prototype, "_issuer", void 0);
exports.AttributeDesignator = AttributeDesignator = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [String, String, String, Boolean, String])
], AttributeDesignator);
//# sourceMappingURL=AttributeDesignator.js.map