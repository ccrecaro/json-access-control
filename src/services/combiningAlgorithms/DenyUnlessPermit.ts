import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";
import { DecisionResult } from "../../enums/DecisionResults";
import { decisionFinder } from "./DecisionFinder";

export function denyUnlessPermitCombiningAlgorithm(request: RequestCtx, elements: Rule[] | Policy[]): DecisionResult {
   for(let i=0 ; i < elements.length ; i++ ) {
        if (decisionFinder(request, elements[i]) == DecisionResult.PERMIT) {
            return DecisionResult.PERMIT;
        }
   }
   return DecisionResult.DENY;
}