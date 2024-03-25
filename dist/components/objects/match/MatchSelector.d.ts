declare class MatchSelector extends MatchCreator {
    private _attributeSelector;
    constructor(matchId: string, attributeSelector: AttributeSelector, value?: valueType, dataType?: string, xPathCategory?: string);
    get attributeSelector(): AttributeSelector;
    set attributeSelector(attributeSelector: AttributeSelector);
}
