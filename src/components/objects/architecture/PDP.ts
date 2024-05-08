import { DecisionResult } from "../../../enums/DecisionResults";
import { Result } from "../Result";
import { PolicyFinder } from "../finder/PolicyFinder";
import { PolicyFinderResult } from "../finder/PolicyFinderResult";
import { RequestCtx } from "./context/RequestCtx";
import { ResponseCtx } from "./context/ResponseCtx";
import { Policy } from "../../Policy";

export class PDP {
    private _policyFinder: PolicyFinder;

    constructor(policyFinder: PolicyFinder) {
        this._policyFinder = policyFinder;
    }

    public get policyFinder():PolicyFinder {
        return this._policyFinder;
    }

    public evaluateContext(request: RequestCtx): ResponseCtx {
        var finderResult: PolicyFinderResult = this.policyFinder.findPolicy(request);
        var result: Result;

        //No hay politicas aplicables
        if(finderResult.notApplicable()) {
            result = new Result(DecisionResult.NOT_APPLICABLE);
            return new ResponseCtx([result]);
        }

        //Hay algun error al intentar obtener politica
        if(finderResult.indeterminate()) {
            result = new Result(DecisionResult.INDETERMINATE, finderResult.getStatus());
            return new ResponseCtx([result]);
        }


        //Hay politica valida
        //Entrega lista de policy id
        var policyIdentifierList = [];
        if(request.returnPolicyIdList){
            policyIdentifierList.push(finderResult.getPolicy()?.policyId);
        }

        var policy = finderResult.getPolicy();

        return policy? policy.generateResponse(request): new ResponseCtx([new Result(DecisionResult.NOT_APPLICABLE)]);
        
    }


}