import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { StatusCode } from './StatusCode';
import { MissingAttributeDetail } from './MissingAttributeDetail';

@JsonObject()
export class Status {
    @JsonProperty({name: 'StatusMessage', required: false})
    private _message?: string;
    
    @JsonProperty({name: 'StatusDetail', type: MissingAttributeDetail, required: false})
    private _detail?: string | MissingAttributeDetail[];
    
    @JsonProperty({name: 'StatusCode', type: StatusCode, required: false})
    private _code?: StatusCode;

    constructor(statusMessage?: string,
        statusDetail?: string | MissingAttributeDetail[],
        statusCode?: StatusCode) {

            this._message = statusMessage;
            this._detail = statusDetail;
            this._code = statusCode;
    }

    public getMessage() {
        return this._message;
    }

    public set message(message: string) {
        this._message = message;
    }

    public getDetail() {
        return this._detail;
    }

    public set detail(detail: string | MissingAttributeDetail[]) {
        this._detail = detail;
    }

    public getCode() {
        return this._code;
    }

    public set code(code: StatusCode) {
        this._code = code;
    }

}