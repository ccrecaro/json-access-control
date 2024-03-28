import { RequestCtx } from "../architecture/context/RequestCtx";
import { EvaluationResult } from "../result/EvaluationResult";

export abstract class Expression {
    abstract evaluate(request: RequestCtx): EvaluationResult | null;

}