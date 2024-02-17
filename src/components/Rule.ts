class Rule {
    private _ruleId: string;
    private _effect: effectType;
    private _description?: string;
    private _target?: AnyOf[];
    private _condition?: Expression;
    private _obligationExpressions?: ObligationOrAdviceExpression[];
    private _adviceExpressions?: ObligationOrAdviceExpression[];

    constructor(ruleId: string,
        effect: effectType,
        description?: string,
        target?: AnyOf[],
        condition?: Expression,
        obligationExpressions?: ObligationOrAdviceExpression[],
        adviceExpressions?: ObligationOrAdviceExpression[]) {
            this._ruleId = ruleId;
            this._effect = effect;
            this._description = description;
            this._target = target;
            this._condition = condition;
            this._obligationExpressions = obligationExpressions;
            this._adviceExpressions = adviceExpressions;
    }

    public get ruleId() {
        return this._ruleId;
    }

    public set ruleId(id: string) {
        this._ruleId = id;
    }

    public get effect() {
        return this._effect;
    }

    public set effect(effect: effectType) {
        this._effect = effect;
    }

    public getDescription() {
        return this._description;
    }

    public set description(description: string){
        this._description = description;
    }

    public getTarget() {
        return this._target;
    }

    public set target(target: AnyOf[]) {
        this._target = target
    }

    public getCondition() {
        return this._condition;
    }

    public set condition(condition: Expression) {
        this._condition = condition;
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

}