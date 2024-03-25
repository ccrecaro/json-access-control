declare class Apply implements Expression {
    private _functionId;
    private _description?;
    private _expression?;
    constructor(functionId: string, description?: string, expression?: Expression[]);
    get functionId(): string;
    set functionId(id: string);
    getDescription(): string | undefined;
    set description(description: string);
    getExpression(): Expression[] | undefined;
    set expression(expressions: Expression[]);
    evaluate(request: Request): EvaluationResult;
}
