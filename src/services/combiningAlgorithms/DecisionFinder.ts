import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";

export function decisionFinder(request:RequestCtx, element: Rule | Policy): string{
    return element.evaluate(request).decision;
}