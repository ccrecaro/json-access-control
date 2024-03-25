import { VariableDefinition } from '../VariableDefinition';
import { Expression } from './Expression';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { EvaluationResult } from '../result/EvaluationResult';
export declare class VariableReference implements Expression {
    private _variableId;
    private _definition;
    constructor(variableId: string, definition?: VariableDefinition | null);
    get functionId(): string;
    set functionId(id: string);
    evaluate(request: RequestCtx): EvaluationResult | null;
}
