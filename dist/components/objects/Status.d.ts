import { StatusCode } from './StatusCode';
import { MissingAttributeDetail } from './MissingAttributeDetail';
export declare class Status {
    private _message?;
    private _detail?;
    private _code?;
    constructor(statusMessage?: string, statusDetail?: string | MissingAttributeDetail[], statusCode?: StatusCode);
    getMessage(): string | undefined;
    set message(message: string);
    getDetail(): string | MissingAttributeDetail[] | undefined;
    set detail(detail: string | MissingAttributeDetail[]);
    getCode(): StatusCode | undefined;
    set code(code: StatusCode);
}
