import { Result } from "../../Result";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Ctx } from "./Ctx";

@JsonObject()
export class ResponseCtx implements Ctx{
    @JsonProperty({name: 'Response', required: true})
    private _result: Result[];

    constructor(result: Result[]) {
        this._result = result
    }

    public get result() {
        return this._result;
    }

    public set result(results: Result[]) {
        this._result = results;
    }

}