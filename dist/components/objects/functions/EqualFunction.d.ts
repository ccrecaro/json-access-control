import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { FunctionEx } from "../expression/FunctionEx";
import { EvaluationResult } from "../result/EvaluationResult";
export declare class EqualFunction extends FunctionEx {
    constructor(functionId: string);
    evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult | null;
}
