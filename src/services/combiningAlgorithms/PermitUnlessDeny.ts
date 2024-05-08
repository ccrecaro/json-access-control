import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";
import { DecisionResult } from "../../enums/DecisionResults";

export function permitUnlessDenyCombiningAlgorithm(request: RequestCtx, elements: Rule[] | Policy[]): DecisionResult {
    for(let i=0 ; i < elements.length ; i++ ) {
        let decision: DecisionResult = elements[i].evaluate(request).getDecisionResultFromString() as DecisionResult;

         if (decision == DecisionResult.DENY) {
             return DecisionResult.DENY;
         }
    }
    return DecisionResult.PERMIT;
 }