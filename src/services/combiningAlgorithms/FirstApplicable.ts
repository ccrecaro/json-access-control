import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";
import { decisionFinder } from "./DecisionFinder";

export function firstApplicableEffectRuleCombiningAlgorithm(request: RequestCtx, elements: Rule[] | Policy[]): DecisionResult {
   for(let i = 0 ; i < elements.length ; i++) {
      let decision: string = decisionFinder(request, elements[i]);
      if (decision == DecisionResult.DENY) {
            return DecisionResult.DENY;
      }
      if (decision == DecisionResult.PERMIT) {
            return DecisionResult.PERMIT;
      }
      if (decision == DecisionResult.NOT_APPLICABLE) {
            continue;
      }
      if (decision == DecisionResult.INDETERMINATE) {
            return DecisionResult.INDETERMINATE;
      }
   }
   return DecisionResult.NOT_APPLICABLE;
}