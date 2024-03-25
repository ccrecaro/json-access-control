declare class MatchDesignator extends MatchCreator {
    private _attributeDesignator;
    constructor(matchId: string, attributeDesignator: AttributeDesignator, value?: valueType, dataType?: string, xPathCategory?: string);
    get attributeDesignator(): AttributeDesignator;
    set attributeDesignator(attributeDesignator: AttributeDesignator);
}
