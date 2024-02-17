class VariableDefinition {
    private _expression: Expression;
    private _variableId: string;

    constructor(expression: Expression, variableId: string) {
        this._expression = expression;
        this._variableId = variableId;
    }

    public get expression() {
        return this._expression;
    }

    public set expression(expression: Expression) {
        this._expression = expression;
    }

    public get variableId() {
        return this._variableId;
    }

    public set variableId(id: string) {
        this._variableId = id;
    }    
}