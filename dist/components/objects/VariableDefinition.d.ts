import { Expression } from './expression/Expression';
export declare class VariableDefinition {
    private _expression;
    private _variableId;
    constructor(expression: Expression, variableId: string);
    get expression(): Expression;
    set expression(expression: Expression);
    get variableId(): string;
    set variableId(id: string);
}
