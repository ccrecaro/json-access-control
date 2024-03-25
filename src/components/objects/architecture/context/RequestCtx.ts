import { Category } from "../../Category";
import { Attribute } from "../../expression/Attribute";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { EvaluationResult } from "../../result/EvaluationResult";

@JsonObject()
export class RequestCtx implements Ctx {
    @JsonProperty({name: 'ReturnPolicyIdList', required: true})
    private _returnPolicyIdList: boolean;

    @JsonProperty({name: 'CombinedDecision', required: true})
    private _combinedDecision: boolean;

    @JsonProperty({name: 'XPathVersion', required: false})
    private _xPathVersion?: string;

    @JsonProperty({name: 'Category', required: false})
    private _category?: Category[];

    // si el xPath no existe pasar un undefined
    constructor(returnPolicyIdList: boolean = false,
            combinedDecision: boolean = false,
            xPathVersion?: string,
            category?: Category[]) {

        this._returnPolicyIdList = returnPolicyIdList;
        this._combinedDecision = combinedDecision;
        this._xPathVersion = xPathVersion;
        this._category = category;
    }


    public get returnPolicyIdList() {
        return this._returnPolicyIdList;
    }

    public set returnPolicyIdList(shouldReturn: boolean) {
        this._returnPolicyIdList = shouldReturn;
    }

    public get combinedDecision() {
        return this._combinedDecision;
    }

    public set combinedDecision(isCombinedDecision: boolean) {
        this._combinedDecision = isCombinedDecision;
    }

    public getXPathVersion() {
        return this._xPathVersion; 
    }

    public set xPathVersion(version: string) {
        this._xPathVersion = version;
    }

    public getCategory() {
        return this._category || undefined;
    }

    public set category(categories: Category[]) {
        this._category = categories;
    }


    public getAttributeWithType(type: string, id: string, issuer: string, category: string): EvaluationResult {
        let values: valueType[] = [];
        if(this._category){
            for(let categoryElement of this._category){
                let attributesFound: Attribute[] = categoryElement.findAttribute(type, id, issuer, category);
                
                for (let attribute of attributesFound) {
                    values.push(attribute.value);
                }
            }
        }

        return new EvaluationResult(
            false,
            values,
            type,
            null,
            null
        )
    }

/*     
    getAttributeWithPath(path: string, type: string, category: string, contextSelectorId?: string): EvaluationResult {
        let values: valueType[] = [];
        if()
    } 
*/

}