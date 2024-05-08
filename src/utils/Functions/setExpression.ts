import { Attribute } from "../../components/objects/expression/Attribute";
import { AttributeDesignator } from "../../components/objects/expression/AttributeDesignator";
import { FunctionEx } from "../../components/objects/expression/FunctionEx";
import { VariableReference } from "../../components/objects/expression/VariableReference";

export const setExpression = (expression : any) => {
    const key = Object.keys(expression)[0];
    switch (key) {
        case "Attribute":
            return Attribute;
        case "AttributeDesignator":
            return AttributeDesignator;
        case "FunctionEx":
            return FunctionEx;
        case "VariableReference":
            return VariableReference;
        default:
            break;
    }
};

