import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";
import { DecisionResult } from "../../enums/DecisionResults";
import { decisionFinder } from "./DecisionFinder";

// Usando any por simplicidad pero luego cambiarlo por lo correcto
export function denyOverridesCombiningAlgorithm(request: RequestCtx, elements: Rule[] | Policy[]): DecisionResult {
    var atLeastOneErrorD:boolean  = false;
    var atLeastOneErrorP:boolean = false;
    var atLeastOneErrorDP:boolean  = false;
    var atLeastOnePermit:boolean = false;

    for(let i=0 ; i < elements.length ; i++) {
        let decision : string = decisionFinder(request, elements[i]);
        console.log(`decision: ${decision}`);
        
        if (decision == DecisionResult.DENY) {
            return DecisionResult.DENY;
        }
        if (decision == DecisionResult.PERMIT) {
              atLeastOnePermit = true;
              continue;
        }
        if (decision == DecisionResult.NOT_APPLICABLE) {
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_D) {
            atLeastOneErrorD = true;
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_P) {
            atLeastOneErrorP = true;
            continue;
        }
        if (decision == DecisionResult.INDETERMINATE_DP) {
            atLeastOneErrorDP = true;
            continue;
        }
    }
    if (atLeastOneErrorDP) {
        return DecisionResult.INDETERMINATE_DP;
    }
    if (atLeastOneErrorD && (atLeastOneErrorP || atLeastOnePermit)) {
        return DecisionResult.INDETERMINATE_DP;
    }
    if (atLeastOneErrorD) {
        return DecisionResult.INDETERMINATE_D;
    }
    if (atLeastOnePermit) {
        return DecisionResult.PERMIT;
    }
    if (atLeastOneErrorP) {
        return DecisionResult.INDETERMINATE_P;
    }
 
    return DecisionResult.NOT_APPLICABLE;
}