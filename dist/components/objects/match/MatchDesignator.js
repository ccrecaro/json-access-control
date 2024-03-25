"use strict";
class MatchDesignator extends MatchCreator {
    constructor(matchId, attributeDesignator, value, dataType, xPathCategory) {
        super(matchId, value, dataType, xPathCategory);
        this._attributeDesignator = attributeDesignator;
    }
    get attributeDesignator() {
        return this._attributeDesignator;
    }
    set attributeDesignator(attributeDesignator) {
        this._attributeDesignator = attributeDesignator;
    }
}
//# sourceMappingURL=MatchDesignator.js.map