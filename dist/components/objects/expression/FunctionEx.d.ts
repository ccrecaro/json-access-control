import { RequestCtx } from "../architecture/context/RequestCtx";
import { EvaluationResult } from "../result/EvaluationResult";
import { Expression } from "./Expression";
export declare class FunctionEx implements Expression {
    private _functionId;
    constructor(functionId: string);
    get functionId(): string;
    set functionId(id: string);
    execute(): void;
    evaluateFunction(inputs: Expression[] | undefined, request: RequestCtx): EvaluationResult | null;
    evalArgs(inputs: Expression[], request: RequestCtx, args: valueType[]): EvaluationResult | null;
    evaluate(request: RequestCtx): EvaluationResult | null;
}
