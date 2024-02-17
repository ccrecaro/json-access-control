class MatchDesignator extends MatchCreator{
    private _attributeDesignator: AttributeDesignator;

    constructor(matchId: string,
        attributeDesignator: AttributeDesignator,
        value?: valueType,
        dataType?: string,
        xPathCategory?: string){
            super(matchId, value, dataType, xPathCategory);
            this._attributeDesignator = attributeDesignator;
    }

    public get attributeDesignator() {
        return this._attributeDesignator;
    }

    public set attributeDesignator(attributeDesignator: AttributeDesignator) {
        this._attributeDesignator = attributeDesignator;
    }

}