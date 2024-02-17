class Status {
    private _statusMessage?: string;
    private _statusDetail?: string | MissingAttributeDetail[];
    private _statusCode?: StatusCode;

    constructor(statusMessage?: string,
        statusDetail?: string | MissingAttributeDetail[],
        statusCode?: StatusCode) {

            this._statusMessage = statusMessage;
            this._statusDetail = statusDetail;
            this._statusCode = statusCode;
    }

    public getStatusMessage() {
        return this._statusMessage;
    }

    public set statusMessage(message: string) {
        this._statusMessage = message;
    }

    public getStatusDetail() {
        return this._statusDetail;
    }

    public set statusDetail(detail: string | MissingAttributeDetail[]) {
        this._statusDetail = detail;
    }

    public getStatusCode() {
        return this._statusCode;
    }

    public set statusCode(code: StatusCode) {
        this._statusCode = code;
    }

}