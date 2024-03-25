"use strict";
class MatchCreator {
    constructor(matchId, value, dataType, xPathCategory) {
        this._matchId = matchId;
        this._value = value;
        this._dataType = dataType;
        this._xPathCategory = xPathCategory;
    }
    get matchId() {
        return this._matchId;
    }
    set matchId(id) {
        this._matchId = id;
    }
    getValue() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    getDataType() {
        return this._dataType;
    }
    set dataType(dataType) {
        this._dataType = dataType;
    }
    getXPathCategory() {
        return this._xPathCategory;
    }
    set xPathCategory(xPathCategory) {
        this._xPathCategory = xPathCategory;
    }
    evaluate(values, dataTypes, request) {
    }
}
//# sourceMappingURL=MatchCreator.js.map