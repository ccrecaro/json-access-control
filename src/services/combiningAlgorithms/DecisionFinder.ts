import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";

export function decisionFinder(request:RequestCtx, element: Rule | Policy): string{
    if(element instanceof Rule) {
        return element.evaluate(request).decision;
    } else {
        return element.evaluate(request).result[0].decision;
    }
}