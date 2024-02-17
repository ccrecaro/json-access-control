class Policy {
    private _policyId: string;
    private _version: string;
    private _ruleCombiningAlgId: string;
    private _target: AnyOf[];
    private _description?: string;
    private _policyIssuer?: PolicyIssuer;
    private _policyDefaults?: string;
    private _combinerParameters?: CombinerParameters[];
    private _ruleCombinerParameters?: RuleCombinerParameters[];
    private _variableDefinition?: VariableDefinition[];
    private _rule?: Rule[];
    private _obligationExpressions?: ObligationOrAdviceExpression[];
    private _adviceExpressions?: ObligationOrAdviceExpression[];
    private _maxDelegationDepth?: number;

    constructor(policyId: string,
        version: string,
        ruleCombiningAlgId: string,
        target: AnyOf[],
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

    public get target() {
        return this._target;
    }

    public set target(target: AnyOf[]) {
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
}