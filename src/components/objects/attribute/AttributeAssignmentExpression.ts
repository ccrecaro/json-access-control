class AttributeAssignmentExpression {
    private _expression: Expression;
    private _attributeId: string;
    private _category?: string;
    private _issuer?: string;

    constructor(expression: Expression,
        attributeId: string,
        category?: string,
        issuer?: string) {

            this._expression = expression;
            this._attributeId = attributeId;
            this._category = category;
            this._issuer = issuer;
    }

    public get expression() {
        return this._expression;
    }

    public set expression(expression: Expression) {
        this._expression = expression;
    }

    public get attributeId() {
        return this._attributeId;
    }

    public set attributeId(id: string) {
        this._attributeId = id;
    }

    public getCategory() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public getIssuer() {
        return this._issuer;
    }

    public set issuer(issuer: string) {
        this._issuer = issuer;
    }
}