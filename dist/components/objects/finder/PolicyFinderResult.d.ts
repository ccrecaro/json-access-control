import { Policy } from "../../Policy";
import { Status } from "../Status";
export declare class PolicyFinderResult {
    private _policy?;
    private _result?;
    private _status?;
    constructor();
    constructor(policy: Policy);
    constructor(policy: Policy, result: MatchResult);
    constructor(policy: Policy, result: MatchResult, status: Status);
    getPolicy(): Policy | undefined;
    set policy(policy: Policy);
    getResult(): MatchResult | undefined;
    set result(result: MatchResult);
    getStatus(): Status | undefined;
    set status(status: Status);
}
