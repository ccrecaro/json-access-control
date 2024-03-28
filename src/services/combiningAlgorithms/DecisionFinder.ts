import { Policy } from "../../components/Policy";
import { Rule } from "../../components/Rule";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";

export function decisionFinder(request:RequestCtx, element: Rule | Policy): string{
    console.log("/////");
    console.log(element);

    return element.evaluate(request).decision;
}