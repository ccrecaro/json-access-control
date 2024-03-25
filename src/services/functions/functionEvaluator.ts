import { argumentsgEqual } from "./EqualityFunctions";

export function functionEvaluator(functionId: string, inputs: valueType, request: request): EvaluationResult {
    var result: valueType;
    switch (functionId) {
        case DAYTIME_DURATION_EQUAL:
            result = argumentsEqual(inputs, request.value):
            break;
    
        default:
            break;
    }
}