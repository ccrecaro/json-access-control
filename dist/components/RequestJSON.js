"use strict";
class RequestJSON {
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
}
//# sourceMappingURL=RequestJSON.js.map