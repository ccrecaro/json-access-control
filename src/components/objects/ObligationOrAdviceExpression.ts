class ObligationOrAdviceExpression {
    private _id: string;
    private _fulfillOnOrAppliesTo: effectType;
    private _attributeAssignmentExpression?: AttributeAssignmentExpression[];

    constructor(id: string,
        fulfillOnOrAppliesTo: effectType,
        attributeAssignmentExpression?: AttributeAssignmentExpression[]) {

            this._id = id;
            this._fulfillOnOrAppliesTo = fulfillOnOrAppliesTo;
            this._attributeAssignmentExpression = attributeAssignmentExpression;
    }

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get fulfillOnOrAppliesTo() {
        return this._fulfillOnOrAppliesTo;
    }

    public set fulfillOnOrAppliesTo(fulfillOnOrAppliesTo: effectType) {
        this._fulfillOnOrAppliesTo = fulfillOnOrAppliesTo;
    }

    public getAttributeAssignmentExpression() {
        return this._attributeAssignmentExpression;
    }

    public set attributeAssignmentExpression(expressions: AttributeAssignmentExpression[]) {
        this._attributeAssignmentExpression = expressions;
    }

}