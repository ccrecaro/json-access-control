"use strict";
class MatchSelector extends MatchCreator {
    constructor(matchId, attributeSelector, value, dataType, xPathCategory) {
        super(matchId, value, dataType, xPathCategory);
        this._attributeSelector = attributeSelector;
    }
    get attributeSelector() {
        return this._attributeSelector;
    }
    set attributeSelector(attributeSelector) {
        this._attributeSelector = attributeSelector;
    }
}
//# sourceMappingURL=MatchSelector.js.map