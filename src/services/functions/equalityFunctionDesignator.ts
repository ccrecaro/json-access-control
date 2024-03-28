import { argumentsEqual, stringEqualIgnoreCase } from "./EqualityFunctions";

export function equalityFunctionDesignator(functionId: string, arg1:any, arg2: any) {
    switch(functionId) {
        case "urn:oasis:names:tc:xacml:3.0:function:string-equal-ignore-case":
            return stringEqualIgnoreCase(arg1, arg2);
        
        default:
            return argumentsEqual(arg1, arg2);
    }
}