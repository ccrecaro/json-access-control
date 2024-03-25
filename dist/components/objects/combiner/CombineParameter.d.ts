export declare class CombinerParameter {
    private _parameterName;
    private _dataType;
    private _value?;
    constructor(parameterName: string, dataType: string, value?: valueType);
    get parameterName(): string;
    set parameterName(name: string);
    getDataType(): string;
    set dataType(dataType: string);
    getValue(): valueType | undefined;
    set value(value: valueType);
}
