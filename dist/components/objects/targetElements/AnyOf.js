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
exports.AnyOf = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let AnyOf = class AnyOf {
    constructor(allOf) {
        this._allOf = allOf;
    }
    get allOf() {
        return this._allOf;
    }
    set allOf(allOf) {
        this._allOf = allOf;
    }
    match(request) {
        var firstIndeterminateStatus = null;
        for (let group of this._allOf) {
            let result = group.match(request);
            // One match
            if (result == MatchResult.MATCH) {
                return result;
            }
            //somethins is indeterminate
            if (result == MatchResult.INDETERMINATE) {
                if (firstIndeterminateStatus == null)
                    firstIndeterminateStatus = result;
            }
        }
        // no matches
        if (firstIndeterminateStatus == null) {
            return MatchResult.NO_MATCH;
        }
        else { // at least one indeterminate over all no matches
            return MatchResult.INDETERMINATE;
        }
    }
};
exports.AnyOf = AnyOf;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'AllOf', required: true }),
    __metadata("design:type", Array)
], AnyOf.prototype, "_allOf", void 0);
exports.AnyOf = AnyOf = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [Array])
], AnyOf);
//# sourceMappingURL=AnyOf.js.map