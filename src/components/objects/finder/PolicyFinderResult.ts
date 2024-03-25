import { Policy } from "../../Policy";
import { Status } from "../Status";

export class PolicyFinderResult {
    private _policy?: Policy;
    private _result?: MatchResult;
    private _status?: Status;

    constructor()
    constructor(policy: Policy)
    constructor(policy: Policy, result: MatchResult)
    constructor(policy: Policy, result: MatchResult, status: Status)
    constructor(policy?: Policy, result?: MatchResult, status?: Status) {
        this._policy = policy;
        this._result = result;
        this._status = status;
    }

    public getPolicy() {
        return this._policy;
    }

    public set policy(policy: Policy) {
        this._policy = policy;
    }

    public getResult() {
        return this._result;
    }

    public set result(result: MatchResult) {
        this._result = result;
    }

    public getStatus() {
        return this._status;
    }

    public set status(status: Status) {
        this._status = status;
    }
}