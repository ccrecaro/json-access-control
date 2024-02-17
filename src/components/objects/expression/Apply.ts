class Apply implements Expression {
    private _functionId: string;
    private _description?: string;
    private _expression?: Expression[];

    constructor(functionId: string,
        description?: string,
        expression?: Expression[]) {

            this._functionId = functionId;
            this._description = description;
            this._expression = expression;
    }

    public get functionId() {
        return this._functionId;
    }

    public set functionId(id: string) {
        this._functionId = id;
    }

    public getDescription() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public getExpression() {
        return this._expression;
    }

    public set expression(expressions: Expression[]) {
        this._expression = expressions;
    }

    public execute(): void {
        
    }
}