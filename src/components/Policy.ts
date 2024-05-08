import { PERMIT_OVERRIDES } from "../constants/PolicyAlgorithms";
import { DENY_OVERRIDES, DENY_UNLESS_PERMIT, FIRST_APPLICABLE, ORDERED_PERMIT_OVERRIDES, PERMIT_UNLESS_DENY } from "../constants/RuleAlgorithms";
import { DecisionResult } from "../enums/DecisionResults";
import { MatchResult } from "../enums/MatchResult";
import { denyOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/DenyOverrides";
import { denyUnlessPermitCombiningAlgorithm } from "../services/combiningAlgorithms/DenyUnlessPermit";
import { firstApplicableEffectRuleCombiningAlgorithm } from "../services/combiningAlgorithms/FirstApplicable";
import { permitOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/PermitOverrides";
import { permitUnlessDenyCombiningAlgorithm } from "../services/combiningAlgorithms/PermitUnlessDeny";
import { Rule } from "./Rule";
import { IdReference } from "./objects/IdReference";
import { ObligationOrAdvice } from "./objects/ObligationOrAdvice";
import { ObligationOrAdviceExpression } from "./objects/ObligationOrAdviceExpression";
import { PolicyIdentifier } from "./objects/PolicyIdentifier";
import { PolicyIssuer } from "./objects/PolicyIssuer";
import { Result } from "./objects/Result";
import { VariableDefinition } from "./objects/VariableDefinition";
import { RequestCtx } from "./objects/architecture/context/RequestCtx";
import { ResponseCtx } from "./objects/architecture/context/ResponseCtx";
import { CombinerParameters } from "./objects/combiner/CombinerParameters";
import { RuleCombinerParameters } from "./objects/combiner/RuleCombinerParameters";
import { Target } from "./objects/targetElements/Target";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class Policy {
    @JsonProperty({name: 'PolicyId', required: true})
    private _policyId: string;

    @JsonProperty({name: 'Version', required: true})
    private _version: string;

    @JsonProperty({name: 'RuleCombiningAlgId', required: true})
    private _ruleCombiningAlgId: string;

    @JsonProperty({name: 'Target', type: Target, required: false})
    private _target?: Target;

    @JsonProperty({name: 'Description', required: false})
    private _description?: string;

    @JsonProperty({name: 'PolicyIssuer', type: PolicyIssuer, required: false})
    private _policyIssuer?: PolicyIssuer;

    @JsonProperty({name: 'PolicyDefaults', required: false})
    private _policyDefaults?: string;

    @JsonProperty({name: 'CombinerParameters', type: CombinerParameters, required: false})
    private _combinerParameters?: CombinerParameters[];

    @JsonProperty({name: 'RuleCombinerParameters', type: RuleCombinerParameters, required: false})
    private _ruleCombinerParameters?: RuleCombinerParameters[];

    @JsonProperty({name: 'VariableDefinition', type: VariableDefinition, required: false})
    private _variableDefinition?: VariableDefinition[];

    @JsonProperty({name: 'Rule', type: Rule, required: false})
    private _rule?: Rule[];

    @JsonProperty({name: 'ObligationExpressions', type: ObligationOrAdviceExpression, required: false})
    private _obligationExpressions?: ObligationOrAdviceExpression[];

    @JsonProperty({name: 'AdviceExpressions', type: ObligationOrAdviceExpression, required: false})
    private _adviceExpressions?: ObligationOrAdviceExpression[];

    @JsonProperty({name: 'MaxDelegationDepth', required: false})
    private _maxDelegationDepth?: number;

    constructor(policyId: string,
        version: string,
        ruleCombiningAlgId: string,
        target?: Target,
        description?: string,
        policyIssuer?: PolicyIssuer,
        policyDefaults?: string,
        combinerParameters?: CombinerParameters[],
        ruleCombinerParameters?: RuleCombinerParameters[],
        variableDefinition?: VariableDefinition[],
        rule?: Rule[],
        obligationExpressions?: ObligationOrAdviceExpression[],
        adviceExpressions?: ObligationOrAdviceExpression[],
        maxDelegationDepth?: number){
            
            this._policyId = policyId;
            this._version = version;
            this._ruleCombiningAlgId = ruleCombiningAlgId;
            this._target = target;
            this._description = description;
            this._policyIssuer = policyIssuer;
            this._policyDefaults = policyDefaults;
            this._combinerParameters = combinerParameters;
            this._ruleCombinerParameters = ruleCombinerParameters;
            this._variableDefinition = variableDefinition;
            this._rule = rule;
            this._obligationExpressions = obligationExpressions;
            this._adviceExpressions = adviceExpressions;
            this._maxDelegationDepth = maxDelegationDepth;
    }

    public get policyId() {
        return this._policyId;
    }

    public set policyId(id: string) {
        this._policyId = id;
    }

    public get version() {
        return this._version;
    }

    public set version(version: string) {
        this._version = version;
    }

    public get ruleCombiningAlgId() {
        return this._ruleCombiningAlgId;
    }

    public set ruleCombiningAlgId(id: string) {
        this._ruleCombiningAlgId = id;
    }

    public getTarget() {
        return this._target;
    }

    public set target(target: Target) {
        this._target = target
    }

    public getDescription() {
        return this._description;
    }

    public set description(description: string){
        this._description = description;
    }

    public getPolicyIssuer() {
        return this._policyIssuer;
    }

    public set policyIssuer(policyIssuer: PolicyIssuer) {
        this._policyIssuer = policyIssuer;
    }

    public getPolicyDefaults() {
        return this._policyDefaults;
    }

    public set policyDefaults(policyDefaults: string) {
        this._policyDefaults = policyDefaults;
    }

    public getCombinerParameters() {
        return this._combinerParameters;
    }

    public set combinerParameters(combinerParameters: CombinerParameters[]) {
        this._combinerParameters = combinerParameters;
    }

    public getRuleCombinerParameters() {
        return this._ruleCombinerParameters;
    }

    public set ruleCombinerParameters(ruleCombinerParameters: RuleCombinerParameters[]) {
        this._ruleCombinerParameters = ruleCombinerParameters;
    }

    public getVariableDefinition() {
        return this._variableDefinition;
    }

    public set variableDefinition(variableDefinition: VariableDefinition[]) {
        this._variableDefinition = variableDefinition;
    }

    public getRule() {
        return this._rule;
    }

    public set rule(rules: Rule[]) {
        this._rule = rules;
    }

    public getObligationExpressions() {
        return this._obligationExpressions;
    }

    public set obligationExpressions(obligationExpressions: ObligationOrAdviceExpression[]) {
        this._obligationExpressions = obligationExpressions;
    }

    public getAdviceExpressions() {
        return this._adviceExpressions;
    }

    public set adviceExpressions(adviceExpressions: ObligationOrAdviceExpression[]) {
        this._adviceExpressions = adviceExpressions;
    }

    public getMaxDelegationDepth() {
        return this._maxDelegationDepth;
    }

    public set maxDelegationDepth(maxDepth: number) {
        this._maxDelegationDepth = maxDepth;
    }
    
    public generateResponse(request: RequestCtx): ResponseCtx {
        var result: Result = this.evaluate(request);
        var decisionResult: DecisionResult = result.getDecisionResultFromString() as DecisionResult;
        var idReference: IdReference = new IdReference(this._policyId, this._version);
        var policyIdentifier: PolicyIdentifier = new PolicyIdentifier([idReference]);

        if(this._obligationExpressions && this._obligationExpressions.length<1 
            || this._adviceExpressions && this._adviceExpressions.length<1) {
            return new ResponseCtx([result]);
        }
        if(this.isIndeterminate(decisionResult) || decisionResult == DecisionResult.NOT_APPLICABLE) {
            return new ResponseCtx([result])
        }

        var response: ResponseCtx = new ResponseCtx([result])
        return this.processObligationAndAdvices(request, decisionResult, response);

    }

    public evaluate(request: RequestCtx): Result {
        var decisionResult: DecisionResult =  this.getCombiningAlgorithm(request);
        
        if(this._obligationExpressions && this._obligationExpressions.length<1 
            && this._adviceExpressions && this._adviceExpressions.length<1) {
                
            return new Result(decisionResult);
        }

        if(this.isIndeterminate(decisionResult) || decisionResult == DecisionResult.NOT_APPLICABLE) {
            return new Result(decisionResult);
        }

        var idReference: IdReference = new IdReference(this._policyId, this._version);
        var policyIdentifier: PolicyIdentifier = new PolicyIdentifier([idReference]);
        var initialResult: Result = new Result(decisionResult, undefined, undefined, undefined, undefined, [policyIdentifier]);
        return initialResult;
    }

    private getCombiningAlgorithm(request: RequestCtx): DecisionResult {
        if(this._rule){
            switch (this._ruleCombiningAlgId) {
                case DENY_OVERRIDES:
                    return denyOverridesCombiningAlgorithm(request, this._rule);
                case DENY_UNLESS_PERMIT:
                    return denyUnlessPermitCombiningAlgorithm(request, this._rule);
                case FIRST_APPLICABLE:
                    return firstApplicableEffectRuleCombiningAlgorithm(request, this._rule);
                /*case ORDERED_DENY_OVERRIDES:
                    return OrderedDenyOverridesCombiningAlgorithm(request, this._rule);
                case ORDERED_PERMIT_OVERRIDES:
                    return OrderedPermitOverridesCombiningAlgorithm(request, this._rule);*/
                case PERMIT_OVERRIDES:
                    return permitOverridesCombiningAlgorithm(request, this._rule);
                case PERMIT_UNLESS_DENY:
                    return permitUnlessDenyCombiningAlgorithm(request, this._rule);
                default:
                    return DecisionResult.INDETERMINATE;
            }
        }
        return DecisionResult.INDETERMINATE;
    }

    public match(request: RequestCtx): MatchResult {
        if(this._target){
            return this._target.match(request);
        } else {
            return MatchResult.MATCH;
        }
    }

    private isIndeterminate(result: DecisionResult): boolean {
        switch (result) {
            case DecisionResult.INDETERMINATE :
            case DecisionResult.INDETERMINATE_DP:
            case DecisionResult.INDETERMINATE_D:
            case DecisionResult.INDETERMINATE_P:           
                return true;
        
            default:
                return false;
        }
    }

    private processObligationAndAdvices(request: RequestCtx, effect: DecisionResult, response: ResponseCtx): ResponseCtx {
        var results = new Set<ObligationOrAdvice>();

        if(this._obligationExpressions != null && this._obligationExpressions.length > 0) {
            for(let obligationExpression of this._obligationExpressions) {
                if(obligationExpression.fulfillOnOrAppliesTo.toLowerCase() == effect.toLowerCase()) {
                    results.add(obligationExpression.evaluate(request));
                }
            }
            response.result[0].obligations = [...results];
        }
        if(this._adviceExpressions != null && this._adviceExpressions.length > 0) {
            for(let adviceExpression of this._adviceExpressions) {
                if(adviceExpression.fulfillOnOrAppliesTo == effect) {
                    results.add(adviceExpression.evaluate(request));
                }
            }
            response.result[0].obligations = [...results];
        }
        return response;
    }

}