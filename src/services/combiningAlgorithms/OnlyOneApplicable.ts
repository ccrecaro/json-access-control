import { Policy } from "../../components/Policy";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";
import { DecisionResult } from "../../enums/DecisionResults";
import { MatchResult } from "../../enums/MatchResult";

export function onlyOneApplicablePolicyPolicyCombiningAlogrithm(request: RequestCtx, policies: Policy[]): DecisionResult {
    var atLeastOne: boolean = false;
    var selectedPolicy: Policy|null = null;
    var appResult: MatchResult; 

    for (let i = 0; i < policies.length ; i++ ) {
        appResult = policies[i].match(request); 
        if ( appResult == MatchResult.INDETERMINATE ) {
            return DecisionResult.INDETERMINATE;
        }
        if( appResult == MatchResult.MATCH ) {
            if ( atLeastOne ) {
                return DecisionResult.INDETERMINATE;
            } else {
                atLeastOne     = true;
                selectedPolicy = policies[i];
            }
        }

        if ( appResult == MatchResult.NO_MATCH ) {
            continue;
        }
    }

    if ( atLeastOne ) {
        if(selectedPolicy) {
            let decisionResult: DecisionResult = selectedPolicy.evaluate(request).getDecisionResultFromString() as DecisionResult;
            return decisionResult;
        }
    }
    return DecisionResult.NOT_APPLICABLE;
}