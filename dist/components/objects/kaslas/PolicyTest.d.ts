import { AnyOfTest } from "./AnyOfTest";
import { PolicyIssuerTest } from './PolicyIssuerTest';
export declare class PolicyTest {
    private _policyId;
    private _ruleCombiningAlgId;
    private _target;
    private _policyIssuer?;
    constructor(policyId: string, ruleCombiningAlgId: string, target: AnyOfTest[], policyIssuer?: PolicyIssuerTest);
}
