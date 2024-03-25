import { denyOverridesCombiningAlgorithm } from "./DenyOverrides";

export function OrderedDenyOverridesCombiningAlgorithm(orderedChildren: any[]): DecisionResult{
    return denyOverridesCombiningAlgorithm(orderedChildren);
}