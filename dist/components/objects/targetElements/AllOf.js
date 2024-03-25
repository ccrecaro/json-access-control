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
exports.AllOf = void 0;
const typescript_json_serializer_1 = require("typescript-json-serializer");
let AllOf = class AllOf {
    constructor(matches) {
        this._matches = matches;
    }
    get matches() {
        return this._matches;
    }
    set matches(matches) {
        this._matches = matches;
    }
    match(request) {
        var firstIndeterminateStatus = null;
        var result;
        for (let match of this._matches) {
            let result = match.match(request);
            // at least one no match
            if (result == MatchResult.NO_MATCH) {
                return result;
            }
            if (result == MatchResult.INDETERMINATE) {
                if (firstIndeterminateStatus == null) {
                    firstIndeterminateStatus = result;
                }
            }
        }
        // all matches
        if (firstIndeterminateStatus == null)
            return MatchResult.MATCH;
        else
            return MatchResult.INDETERMINATE;
    }
};
exports.AllOf = AllOf;
__decorate([
    (0, typescript_json_serializer_1.JsonProperty)({ name: 'Match', required: true }),
    __metadata("design:type", Array)
], AllOf.prototype, "_matches", void 0);
exports.AllOf = AllOf = __decorate([
    (0, typescript_json_serializer_1.JsonObject)(),
    __metadata("design:paramtypes", [Array])
], AllOf);
//# sourceMappingURL=AllOf.js.map