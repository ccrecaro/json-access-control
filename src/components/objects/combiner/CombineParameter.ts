import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { valueType } from '../../../utils/types/valueType';

@JsonObject()
export class CombinerParameter {
    @JsonProperty({name: 'ParameterName', required: true})
    private _parameterName: string;
    @JsonProperty({name: 'DataType', required: true})
    private _dataType: string;
    @JsonProperty({name: 'Value', required: false})
    private _value?: valueType;

    constructor(parameterName: string,
        dataType: string,
        value?: valueType) {
            this._parameterName = parameterName;
            this._dataType = dataType;
            this._value = value;
    }

    public get parameterName() {
        return this._parameterName;
    }

    public set parameterName(name: string) {
        this._parameterName = name;
    }

    public getDataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public getValue() {
        return this._value;
    }

    public set value(value: valueType) {
        this._value = value;
    }

}