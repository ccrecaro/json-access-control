import { Target } from "./objects/targetElements/Target";
import { ObligationOrAdviceExpression } from "./objects/ObligationOrAdviceExpression";
import { ObligationOrAdvice } from "./objects/ObligationOrAdvice";
import { Result } from "./objects/Result";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { RequestCtx } from "./objects/architecture/context/RequestCtx";
import { EvaluationResult } from "./objects/result/EvaluationResult";
import { Expression } from "./objects/expression/Expression";
import { MatchResult } from "../enums/MatchResult";
import { DecisionResult } from "../enums/DecisionResults";

@JsonObject()
export class Rule {
    @JsonProperty({name: 'RuleId', required: true})
    private _ruleId: string;
    @JsonProperty({name: 'Effect', required: true})
    private _effect: effectType;
    @JsonProperty({name: 'Description', required: false})
    private _description?: string;
    @JsonProperty({name: 'Target', type: Target, required: false})
    private _target?: Target;
    @JsonProperty({name: 'Condition', type: Expression, required: false})
    private _condition?: Expression;
    @JsonProperty({name: 'ObligationExpressions', type: ObligationOrAdviceExpression, required: false})
    private _obligationExpressions?: ObligationOrAdviceExpression[];
    @JsonProperty({name: 'AdviceExpressions', type: ObligationOrAdviceExpression, required: false})
    private _adviceExpressions?: ObligationOrAdviceExpression[];

    constructor(ruleId: string,
        effect: effectType,
        description?: string,
        target?: Target,
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

    public set target(target: Target) {
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


    public evaluate(request: RequestCtx): Result {
        var match: MatchResult;
        console.log("RULE EVAL");

        if (this._target) {
            match = this._target.match(request);
            console.log(`match: ${match}`);

            if (match == MatchResult.NO_MATCH){
                return new Result(DecisionResult.NOT_APPLICABLE);
            }

            if (match == MatchResult.INDETERMINATE) {
                if(this._effect == "Permit") {
                    return new Result(DecisionResult.INDETERMINATE_P);
                } else {
                    return new Result(DecisionResult.INDETERMINATE_D);
                }
            }
        }

        if(this._condition == null) {
            return new Result(this._effect, undefined, this.processObligationsAndAdvices(request, this._obligationExpressions), this.processObligationsAndAdvices(request, this._adviceExpressions))
        }

        var result: EvaluationResult|null = this._condition.evaluate(request);

        if(result) {
            if(result._isIndeterminate) {
                if(this._effect == "Permit"){
                    return new Result(DecisionResult.INDETERMINATE_P);
                } else {
                    return new Result(DecisionResult.INDETERMINATE_D);
                }
            } else {
    
                if(typeof result.value == "boolean") {
                    if(result.value) {
                        return new Result(this._effect, undefined, this.processObligationsAndAdvices(request, this._obligationExpressions), this.processObligationsAndAdvices(request, this._adviceExpressions));
                    } else {
                        return new Result(DecisionResult.NOT_APPLICABLE);
                    }
                } 
                return new Result(DecisionResult.NOT_APPLICABLE);
            }
        } else {
            return new Result(DecisionResult.NOT_APPLICABLE);
        }

    }

    private processObligationsAndAdvices(request: RequestCtx, obligationOrAdviceExpression?: ObligationOrAdviceExpression[]): ObligationOrAdvice[] | undefined {

        if(obligationOrAdviceExpression != null && obligationOrAdviceExpression.length > 0){
            var results: ObligationOrAdvice[] = [];
            for(let expression of obligationOrAdviceExpression){
                if(expression.fulfillOnOrAppliesTo == this._effect) {
                    results.push(expression.evaluate(request));
                }
            }
            return results;
        }
        return undefined;
    }
}