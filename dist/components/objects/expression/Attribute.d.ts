import { RequestCtx } from '../architecture/context/RequestCtx';
import { Expression } from './Expression';
import { EvaluationResult } from '../result/EvaluationResult';
export declare class Attribute implements Expression {
    private _attributeId;
    private _value;
    private _dataType;
    private _issuer?;
    private _includeInResult?;
    constructor(attributeId: string, value: valueType, dataType?: string, issuer?: string, includeInResult?: boolean);
    get attributeId(): string;
    set attributeId(id: string);
    get value(): valueType;
    set value(value: valueType);
    getIssuer(): string | undefined;
    set issuer(issuer: string);
    getDataType(): string;
    set dataType(dataType: string);
    getIncludeInResult(): boolean | undefined;
    set includeInResult(include: boolean);
    evaluate(request: RequestCtx): EvaluationResult | null;
    isSearchedAttribute(type: string, id: string, issuer: string): boolean;
}
