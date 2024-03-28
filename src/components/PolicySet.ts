import { DENY_OVERRIDES, DENY_UNLESS_PERMIT, FIRST_APPLICABLE, ONLY_ONE_APPLICABLE, ORDERED_DENY_OVERRIDES, ORDERED_PERMIT_OVERRIDES, PERMIT_OVERRIDES, PERMIT_UNLESS_DENY } from "../constants/PolicyAlgorithms";
import { denyOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/DenyOverrides";
import { denyUnlessPermitCombiningAlgorithm } from "../services/combiningAlgorithms/DenyUnlessPermit";
import { firstApplicableEffectRuleCombiningAlgorithm } from "../services/combiningAlgorithms/FirstApplicable";
import { onlyOneApplicablePolicyPolicyCombiningAlogrithm } from "../services/combiningAlgorithms/OnlyOneApplicable";
/* import { OrderedDenyOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/OrderedDenyOverrides";
import { OrderedPermitOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/OrderedPermitOverrides"; */
import { permitOverridesCombiningAlgorithm } from "../services/combiningAlgorithms/PermitOverrides";
import { permitUnlessDenyCombiningAlgorithm } from "../services/combiningAlgorithms/PermitUnlessDeny";
import { Policy } from "./Policy";
import { IdReference } from "./objects/IdReference";
import { ObligationOrAdviceExpression } from "./objects/ObligationOrAdviceExpression";
import { PolicyIssuer } from "./objects/PolicyIssuer";
import { RequestCtx } from "./objects/architecture/context/RequestCtx";
import { CombinerParameters } from "./objects/combiner/CombinerParameters";
import { PolicyCombinerParameters } from "./objects/combiner/PolicyCombinerParameters";
import { PolicySetCombinerParameters } from "./objects/combiner/PolicySetCombinerParameters";
import { EvaluationResult } from "./objects/result/EvaluationResult";
import { Target } from "./objects/targetElements/Target";

class PolicySet {
    private _policySetId: string;
    private _version: string;
    private _policyCombiningAlgId: string;
    private _target: Target;
    private _description?: string;
    private _policyIssuer?: PolicyIssuer;
    private _policySetDefaults?: string;
    private _policySet?: PolicySet[];
    private _policy?: Policy[];
    private _policySetIdReference?: IdReference[];
    private _policyIdReference?: IdReference[];
    private _combinerParameters?: CombinerParameters[];
    private _policyCombinerParameters?: PolicyCombinerParameters[];
    private _policySetCombinerParameters?: PolicySetCombinerParameters[];
    private _obligationExpressions?: ObligationOrAdviceExpression[];
    private _adviceExpressions?: ObligationOrAdviceExpression[];
    private _maxDelegationDepth?: number;

    constructor(policySetId: string,
        version: string,
        policyCombiningAlgId: string,
        target: Target,
        description?: string,
        policyIssuer?: PolicyIssuer,
        policySetDefaults?: string,
        policySet?: PolicySet[],
        policy?: Policy[],
        policySetIdReference?: IdReference[],
        policyIdReference?: IdReference[],
        combinerParameters?: CombinerParameters[],
        policyCombinerParameters?: PolicyCombinerParameters[],
        policySetCombinerParameters?: PolicySetCombinerParameters[],
        obligationExpressions?: ObligationOrAdviceExpression[],
        adviceExpressions?: ObligationOrAdviceExpression[],
        maxDelegationDepth?: number) {

            this._policySetId = policySetId;
            this._version = version;
            this._policyCombiningAlgId = policyCombiningAlgId;
            this._target = target;
            this._description = description;
            this._policyIssuer = policyIssuer;
            this._policySetDefaults = policySetDefaults;
            this._policySet = policySet;
            this._policy = policy;
            this._policySetIdReference = policySetIdReference;
            this._policyIdReference = policyIdReference;
            this._combinerParameters = combinerParameters;
            this._policyCombinerParameters = policyCombinerParameters;
            this._policySetCombinerParameters = policySetCombinerParameters;
            this._obligationExpressions = obligationExpressions;
            this._adviceExpressions = adviceExpressions;
            this._maxDelegationDepth = maxDelegationDepth;
    }

    public get policySetId() {
        return this._policySetId;
    }

    public set policySetId(id: string) {
        this._policySetId = id;
    }

    public get version() {
        return this._version;
    }

    public set version(version: string) {
        this._version = version;
    }

    public get policyCombiningAlgId() {
        return this._policyCombiningAlgId;
    }

    public set policyCombiningAlgId(id: string) {
        this._policyCombiningAlgId = id;
    }

    public get target() {
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

    public getPolicySetDefaults() {
        return this._policySetDefaults;
    }

    public set policySetDefaults(policySetDefaults: string) {
        this._policySetDefaults = policySetDefaults;
    }

    public getPolicySet() {
        return this._policySet;
    }

    public set policySet(policySet: PolicySet[]) {
        this._policySet = policySet;
    }

    public getPolicy() {
        return this._policy;
    }

    public set policy(policy: Policy[]) {
        this._policy = policy;
    }

    public getPolicySetIdReference() {
        return this._policySetIdReference;
    }

    public set policySetIdReference(policySetIdReference: IdReference[]) {
        this._policySetIdReference = policySetIdReference;
    }

    public getPolicyIdReference() {
        return this._policyIdReference;
    }

    public set policyIdReference(policyIdReference: IdReference[]) {
        this._policyIdReference = policyIdReference;
    }

    public getCombinerParameters() {
        return this._combinerParameters;
    }

    public set combinerParameters(combinerParameters: CombinerParameters[]) {
        this._combinerParameters = combinerParameters;
    }


    public getPolicyCombinerParameters() {
        return this._policyCombinerParameters;
    }

    public set policyCombinerParameters(policyCombinerParameters: PolicyCombinerParameters[]) {
        this._policyCombinerParameters = policyCombinerParameters;
    }

    public getPolicySetCombinerParameters() {
        return this._policySetCombinerParameters;
    }

    public set policySetCombinerParameters(policySetCombinerParameters: PolicySetCombinerParameters[]) {
        this._policySetCombinerParameters = policySetCombinerParameters;
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


/*     public evaluateTarget(request: RequestCtx): EvaluationResult {
    }

    public createPolicySetFromJSON(json: JSON): PolicySet {
        
    } */

    private getCombiningAlgorithm(request: RequestCtx) {
        if(this._policy){
            switch (this._policyCombiningAlgId) {
                case DENY_OVERRIDES:
                    return denyOverridesCombiningAlgorithm(request, this._policy);
                case DENY_UNLESS_PERMIT:
                    return denyUnlessPermitCombiningAlgorithm(request, this._policy);
                case FIRST_APPLICABLE:
                    return firstApplicableEffectRuleCombiningAlgorithm(request, this._policy);
                case ONLY_ONE_APPLICABLE:
                    return onlyOneApplicablePolicyPolicyCombiningAlogrithm(request, this._policy);
                case ONLY_ONE_APPLICABLE:
                    return onlyOneApplicablePolicyPolicyCombiningAlogrithm(request, this._policy);
                /*case ORDERED_DENY_OVERRIDES:
                    return OrderedDenyOverridesCombiningAlgorithm(request, this._policy);
                case ORDERED_PERMIT_OVERRIDES:
                    return OrderedPermitOverridesCombiningAlgorithm(request, this._policy);*/
                case PERMIT_OVERRIDES:
                    return permitOverridesCombiningAlgorithm(request, this._policy);
                case PERMIT_UNLESS_DENY:
                    return permitUnlessDenyCombiningAlgorithm(request, this._policy);
                default:
                    break;
            }
        }
    }
}