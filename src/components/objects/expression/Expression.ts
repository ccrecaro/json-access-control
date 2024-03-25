import { RequestCtx } from "../architecture/context/RequestCtx";
import { EvaluationResult } from "../result/EvaluationResult";

export interface Expression {
    evaluate(request: RequestCtx): EvaluationResult | null;

}