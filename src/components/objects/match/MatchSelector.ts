class MatchSelector extends MatchCreator {
    private _attributeSelector: AttributeSelector;

    constructor(matchId: string,
        attributeSelector: AttributeSelector,
        value?: valueType,
        dataType?: string,
        xPathCategory?: string){
            super(matchId, value, dataType, xPathCategory);
            this._attributeSelector = attributeSelector;
    }

    public get attributeSelector() {
        return this._attributeSelector;
    }

    public set attributeSelector(attributeSelector: AttributeSelector) {
        this._attributeSelector = attributeSelector;
    }

}