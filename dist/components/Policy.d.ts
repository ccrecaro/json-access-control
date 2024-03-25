import { Rule } from "./Rule";
import { ObligationOrAdviceExpression } from "./objects/ObligationOrAdviceExpression";
import { PolicyIssuer } from "./objects/PolicyIssuer";
import { VariableDefinition } from "./objects/VariableDefinition";
import { RequestCtx } from "./objects/architecture/context/RequestCtx";
import { ResponseCtx } from "./objects/architecture/context/ResponseCtx";
import { CombinerParameters } from "./objects/combiner/CombinerParameters";
import { RuleCombinerParameters } from "./objects/combiner/RuleCombinerParameters";
import { Target } from "./objects/targetElements/Target";
export declare class Policy {
    private _policyId;
    private _version;
    private _ruleCombiningAlgId;
    private _target;
    private _description?;
    private _policyIssuer?;
    private _policyDefaults?;
    private _combinerParameters?;
    private _ruleCombinerParameters?;
    private _variableDefinition?;
    private _rule?;
    private _obligationExpressions?;
    private _adviceExpressions?;
    private _maxDelegationDepth?;
    constructor(policyId: string, version: string, ruleCombiningAlgId: string, target: Target, description?: string, policyIssuer?: PolicyIssuer, policyDefaults?: string, combinerParameters?: CombinerParameters[], ruleCombinerParameters?: RuleCombinerParameters[], variableDefinition?: VariableDefinition[], rule?: Rule[], obligationExpressions?: ObligationOrAdviceExpression[], adviceExpressions?: ObligationOrAdviceExpression[], maxDelegationDepth?: number);
    get policyId(): string;
    set policyId(id: string);
    get version(): string;
    set version(version: string);
    get ruleCombiningAlgId(): string;
    set ruleCombiningAlgId(id: string);
    get target(): Target;
    set target(target: Target);
    getDescription(): string | undefined;
    set description(description: string);
    getPolicyIssuer(): PolicyIssuer | undefined;
    set policyIssuer(policyIssuer: PolicyIssuer);
    getPolicyDefaults(): string | undefined;
    set policyDefaults(policyDefaults: string);
    getCombinerParameters(): CombinerParameters[] | undefined;
    set combinerParameters(combinerParameters: CombinerParameters[]);
    getRuleCombinerParameters(): RuleCombinerParameters[] | undefined;
    set ruleCombinerParameters(ruleCombinerParameters: RuleCombinerParameters[]);
    getVariableDefinition(): VariableDefinition[] | undefined;
    set variableDefinition(variableDefinition: VariableDefinition[]);
    getRule(): Rule[] | undefined;
    set rule(rules: Rule[]);
    getObligationExpressions(): ObligationOrAdviceExpression[] | undefined;
    set obligationExpressions(obligationExpressions: ObligationOrAdviceExpression[]);
    getAdviceExpressions(): ObligationOrAdviceExpression[] | undefined;
    set adviceExpressions(adviceExpressions: ObligationOrAdviceExpression[]);
    getMaxDelegationDepth(): number | undefined;
    set maxDelegationDepth(maxDepth: number);
    evaluate(request: RequestCtx): ResponseCtx;
    private getCombiningAlgorithm;
    match(request: RequestCtx): MatchResult;
    private isIndeterminate;
    private processObligationAndAdvices;
}