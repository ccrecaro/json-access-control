export function permitUnlessDenyCombiningAlgorithm(request: RequestCtx, elements: Rule[] | Policy[]): DecisionResult {
    for(let i=0 ; i < elements.length ; i++ ) {
         if (elements[i].evaluate(request) == DecisionResult.DENY) {
             return DecisionResult.DENY;
         }
    }
    return DecisionResult.PERMIT;
 }