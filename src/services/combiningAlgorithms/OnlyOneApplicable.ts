import { Policy } from "../../components/Policy";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";

export function onlyOneApplicablePolicyPolicyCombiningAlogrithm(request: RequestCtx, policies: Policy[]): DecisionResult {
    var atLeastOne: boolean = false;
    var selectedPolicy: Policy;
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
        let decisionResult: string = selectedPolicy.evaluate(request).result[0].decision;
        return Object.keys(DecisionResult).filter(x => DecisionResult[x] == decisionResult);

    } else {
        return DecisionResult.NOT_APPLICABLE;
    }
}